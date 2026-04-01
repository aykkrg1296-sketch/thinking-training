/**
 * テキスト分析ユーティリティ
 * 根拠: Schwartz et al. (2013) PLOS ONE + 解釈レベル理論 (Trope & Liberman) + J-LIWC2015
 */

/** 軸1: 抽象度 — 解釈レベル理論ベース */
function getAbstractionScore(text: string): number {
  const abstractWords = text.match(/なぜ|本質|つまり|要するに|すなわち|根本|本来|本質的|抽象|概念|意味|価値|理念|哲学/g) || [];
  const concreteWords = text.match(/たとえば|例えば|具体的|実際に|たとえ|場合|状況|シーン|こと|もの|ところ/g) || [];
  return abstractWords.length - concreteWords.length;
}

/** 軸2: 自己 vs 他者 — 自己スキーマ理論ベース */
function getSelfScore(text: string): number {
  const selfWords = text.match(/私|自分|僕|俺|わたし|わたくし|自身|自己/g) || [];
  const otherWords = text.match(/みんな|誰か|相手|人々|社会|他者|他の人|周り|世間|友達|家族/g) || [];
  return selfWords.length - otherWords.length;
}

/** 軸3: 感情 vs 論理 — J-LIWC2015 感情カテゴリ参考 */
function getEmotionScore(text: string): number {
  const emotionWords = text.match(/好き|嫌い|嬉しい|楽しい|つらい|悲しい|怖い|ワクワク|感動|不安|安心|幸せ|辛い|苦しい|温かい/g) || [];
  const logicWords = text.match(/なぜなら|したがって|つまり|結果として|効率|論理|理由|根拠|証拠|分析|構造|仕組み|システム/g) || [];
  return emotionWords.length - logicWords.length;
}

/** 軸4: 比喩の世界観 — 概念メタファー理論 (Lakoff & Johnson, 1980) */
function getMetaphorDomain(text: string): string | null {
  const foodWords = text.match(/食べ|飲み|料理|味|食事|ごはん|おいしい|腹|空腹/g) || [];
  const bodyWords = text.match(/体|心|頭|手|足|目|耳|感じ|痛い|重い|軽い/g) || [];
  const relationWords = text.match(/友達|家族|恋人|関係|繋がり|信頼|絆|コミュニティ/g) || [];
  const workWords = text.match(/仕事|会社|プロジェクト|目標|成果|効率|スケジュール|タスク/g) || [];

  const max = Math.max(foodWords.length, bodyWords.length, relationWords.length, workWords.length);
  if (max === 0) return null;
  if (max === foodWords.length) return 'food';
  if (max === bodyWords.length) return 'body';
  if (max === relationWords.length) return 'relation';
  return 'work';
}

export interface TextInsight {
  /** 1〜2文の「気づき」テキスト */
  insight: string;
  /** 詳細ラベル（自分説明書に蓄積する用） */
  tags: string[];
}

export function analyzeText(answers: string[]): TextInsight {
  if (answers.length === 0) {
    return { insight: '', tags: [] };
  }

  const text = answers.join(' ');
  const abstraction = getAbstractionScore(text);
  const self = getSelfScore(text);
  const emotion = getEmotionScore(text);
  const metaphor = getMetaphorDomain(text);

  const tags: string[] = [];
  let insight = '';

  // 抽象度判定
  if (abstraction >= 2) {
    tags.push('抽象思考');
    insight = 'あなたは「なぜ？」から考え始める人みたいです。答えより理由の方を大事にしているのかもしれません。';
  } else if (abstraction <= -2) {
    tags.push('具体思考');
    insight = 'あなたは具体的なイメージで考える人みたいです。頭の中で場面を描いてから答えが出てくるタイプかも。';
  }

  // 自己/他者判定
  if (self >= 2) {
    tags.push('自己視点');
    if (!insight) insight = 'あなたは自分の体験を起点に考える人みたいです。「自分だったら」という問いを自然と立てているんだと思います。';
  } else if (self <= -2) {
    tags.push('他者視点');
    if (!insight) insight = 'あなたは他者や社会の視点から考える人みたいです。誰かのことを想像しながら答えが出てくるタイプかも。';
  }

  // 感情/論理判定
  if (emotion >= 2) {
    tags.push('感情ドリブン');
    if (!insight) insight = 'あなたは感情を手がかりに考える人みたいです。「好きか嫌いか」が思考のコンパスになっているのかもしれません。';
  } else if (emotion <= -2) {
    tags.push('論理ドリブン');
    if (!insight) insight = 'あなたは論理と構造で考える人みたいです。「なぜそうなるか」の仕組みを確かめながら考えていそう。';
  }

  // 比喩の世界観
  if (metaphor === 'food' && !tags.includes('抽象思考')) {
    tags.push('食体験メタファー');
    if (!insight) insight = 'あなたは食べ物や身体感覚でものごとを捉える人みたいです。抽象的なことを「おいしい/まずい」で感じ取るタイプかも。';
  } else if (metaphor === 'relation') {
    tags.push('関係性メタファー');
    if (!insight) insight = 'あなたは人との関係を通してものごとを理解する人みたいです。つながりの中で意味を見つけるタイプかも。';
  }

  // デフォルト
  if (!insight) {
    insight = 'あなたなりの切り口で考えられています。答えを重ねるほど、あなたの思考の地図が育っていきます。';
  }

  return { insight, tags };
}
