import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'abstraction-ladder',
    name: 'ひとことで言うと？',
    description: 'ものごとをざっくり言い換える練習',
    icon: '🔭',
    color: '#FF8C42',
    questions: [
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-001',
        title: 'カフェって何？',
        steps: [
          {
            prompt: '「カフェ」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              'コーヒーを売ってる場所...だけじゃないよね',
              '人はなぜカフェに行く？ 飲み物のため？',
            ],
            sampleAnswer: 'ほっとできる場所',
            explanation: '「コーヒーを売る店」は目に見える話（具体）。「ほっとできる場所」は目に見えない話（抽象）。同じものを違う高さから見てるだけ。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 1,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-002',
        title: '傘って何？',
        steps: [
          {
            prompt: '「傘」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '雨を防ぐ道具...それだけ？',
              '傘がなかったら、代わりに何を使う？',
            ],
            sampleAnswer: '自分を守るもの',
            explanation: '「雨を防ぐ道具」は具体。「自分を守るもの」まで上がると、日傘もヘルメットも同じ仲間だと気づける。これが抽象化。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 1,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-003',
        title: 'コンビニって何？',
        steps: [
          {
            prompt: '「コンビニ」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '何でも売ってる小さなお店...もうちょっと考えてみて',
              'なぜスーパーじゃなくてコンビニに行く？',
            ],
            sampleAnswer: '「今すぐ」を叶える場所',
            explanation: 'コンビニの本質は「便利（convenience）」。品揃えじゃなくて「今すぐ手に入る」こと。名前にヒントがあった。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 1,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-004',
        title: 'SNSって何？',
        steps: [
          {
            prompt: '「SNS」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '写真を投稿するアプリ...それは1つの使い方だよね',
              '人はなぜSNSを開く？ 暇だから？ それだけ？',
            ],
            sampleAnswer: '誰かとつながりたい気持ちの受け皿',
            explanation: '機能で見ると「投稿・いいね・コメント」。でも本質は「つながりたい」という気持ち。機能（具体）と欲求（抽象）は違う階層の話。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 2,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-005',
        title: '逆をやってみよう',
        steps: [
          {
            prompt: '「安心」って、具体的にはどういう状態？ 場面を思い浮かべて書いてみて。',
            inputType: 'text',
            hints: [
              'あなたが最近「安心した」のはいつ？',
              'その時、何が見えて、何が聞こえてた？',
            ],
            sampleAnswer: '家に帰ってソファに座った瞬間',
            explanation: '今度は逆。抽象的な言葉を、自分の体験に落とす（具体化）。この「上がったり下がったり」が思考の基本運動。',
          },
        ],
        thinkingType: 'concretization',
        difficulty: 2,
      },
    ],
  },
  {
    id: 'essence-catch',
    name: 'なくなったら困るのは？',
    description: '大事なものを見つける練習',
    icon: '🎯',
    color: '#4ADE80',
    questions: [
      {
        moduleId: 'essence-catch',
        questionId: 'ec-001',
        title: '学校の本質',
        steps: [
          {
            prompt: '「学校」からひとつだけ残すとしたら、何を残す？',
            inputType: 'text',
            hints: [
              '建物？ 先生？ 教科書？ 友達？ テスト？',
              'それがなくなったら「学校」じゃなくなるものは？',
            ],
            sampleAnswer: '一緒に学ぶ仲間',
            explanation: '建物がなくても青空教室はある。教科書がなくても学べる。でも「一緒に学ぶ人」がいないと、それはもう学校じゃない。これが本質を見つけるコツ：「なくなったら、それじゃなくなるもの」。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 1,
      },
      {
        moduleId: 'essence-catch',
        questionId: 'ec-002',
        title: '映画の本質',
        steps: [
          {
            prompt: '「映画」からひとつだけ残すとしたら、何を残す？',
            inputType: 'text',
            hints: [
              '映像？ 音楽？ 俳優？ スクリーン？ ストーリー？',
              'YouTubeの動画と映画の違いは？',
            ],
            sampleAnswer: '2時間の中で感情が動くこと',
            explanation: '映像がなくてもラジオドラマがある。俳優がいなくてもアニメがある。でも「感情を動かす物語体験」がなかったら、それは映画じゃなくてただの映像。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 1,
      },
      {
        moduleId: 'essence-catch',
        questionId: 'ec-003',
        title: '3つの共通点',
        steps: [
          {
            prompt: '「ディズニーランド」「お祭り」「誕生日パーティー」。この3つに共通することは？',
            inputType: 'text',
            hints: [
              '全部楽しい...もう一歩踏み込んで',
              '普段の生活と何が違う？',
            ],
            sampleAnswer: '日常から離れる特別な時間',
            explanation: '「楽しい」で止まると表面。「非日常の特別感」まで行くと本質。3つの違うものから共通点を抜き出す = 本質に近づく最短ルート。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
    ],
  },
  {
    id: 'purpose-means',
    name: 'そもそも何のため？',
    description: '「本当の目的」を探る練習',
    icon: '🧭',
    color: '#60A5FA',
    questions: [
      {
        moduleId: 'purpose-means',
        questionId: 'pm-001',
        title: 'ノートを取る理由',
        steps: [
          {
            prompt: '授業でノートを取る。そもそも何のため？',
            inputType: 'text',
            hints: [
              '「忘れないため」...もう1段深く',
              'ノートを取らなくても覚えてたら、ノート要る？',
            ],
            sampleAnswer: '自分の言葉で理解するため',
            explanation: 'ノート = 手段。「記録する」は表面の目的。「理解する」が本当の目的。もしノートがきれいに書けたけど何も覚えてなかったら？ 手段が目的にすり替わってる。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 1,
      },
      {
        moduleId: 'purpose-means',
        questionId: 'pm-002',
        title: '会議の目的',
        steps: [
          {
            prompt: '毎週やってる会議。そもそも何のため？',
            inputType: 'text',
            hints: [
              '「情報共有」...それ、メールでよくない？',
              '会議でしかできないことって何？',
            ],
            sampleAnswer: 'その場で決めること',
            explanation: '情報共有はメールでできる。報告もチャットでできる。会議でしかできないのは「その場で議論して決める」こと。目的がズレてる会議は、手段が目的化してる典型例。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 1,
      },
      {
        moduleId: 'purpose-means',
        questionId: 'pm-003',
        title: '英語を勉強する理由',
        steps: [
          {
            prompt: '「英語を勉強しよう」。そもそも何のため？ 3回「なぜ？」を繰り返してみて。',
            inputType: 'text',
            hints: [
              '1回目: なぜ英語を勉強する？→ 仕事で使うから',
              '2回目: なぜ仕事で使う？→ 海外の人と話したいから',
            ],
            sampleAnswer: '自分の世界を広げたいから',
            explanation: '英語（手段）→ 仕事で使う（手段）→ 海外の人と話す（手段）→ 世界を広げたい（本当の目的）。「なぜ？」を3回繰り返すと、手段の奥にある本当の目的が出てくる。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
    ],
  },
  {
    id: 'verbalization',
    name: '伝わる言葉にするには？',
    description: '頭の中を言葉にする練習',
    icon: '💬',
    color: '#A78BFA',
    questions: [
      {
        moduleId: 'verbalization',
        questionId: 'vb-001',
        title: '小学生に説明してみよう',
        steps: [
          {
            prompt: '「信頼」って何？ 小学3年生に伝わるように説明してみて。',
            inputType: 'text',
            hints: [
              '難しい言葉を使わないで',
              '信頼してる人って、どんな人？ 具体的に',
            ],
            sampleAnswer: '「この人なら大丈夫」って思えること',
            explanation: '難しいことを簡単な言葉で言える = ちゃんと理解してる証拠。「信用に基づく人間関係の...」みたいな説明は、わかってない人の言い方。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 1,
      },
      {
        moduleId: 'verbalization',
        questionId: 'vb-002',
        title: 'ひとことキャッチコピー',
        steps: [
          {
            prompt: '「図書館」の良さを、10文字以内で伝えてみて。',
            inputType: 'text',
            hints: [
              '「本がたくさんある場所」...そのまますぎる',
              '図書館でしか味わえない感覚は？',
            ],
            sampleAnswer: '静かに自由になれる場所',
            explanation: '言語化の筋肉は「削る力」。長く説明するのは簡単。短く、でも伝わるように削る。これがコンセプトを書く力の土台になる。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 2,
      },
    ],
  },
  {
    id: 'deconstruction',
    name: 'バラしてみよう',
    description: 'ものごとを分けて見る練習',
    icon: '🔧',
    color: '#F472B6',
    questions: [
      {
        moduleId: 'deconstruction',
        questionId: 'dc-001',
        title: 'コンビニを分解',
        steps: [
          {
            prompt: '「コンビニ」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              '目に見えるものだけじゃないよ',
              '場所、品物、あとひとつは？',
            ],
            sampleAnswer: '場所（近い）+ 品物（何でもある）+ 時間（いつでも開いてる）',
            explanation: 'ものごとを要素に分ける。分けると「どこが強みか」が見える。コンビニの本当の強みは「時間」。24時間はスーパーにはない。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 1,
      },
      {
        moduleId: 'deconstruction',
        questionId: 'dc-002',
        title: 'いい先生を分解',
        steps: [
          {
            prompt: '「いい先生」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              '教え方がうまい...他には？',
              '教え方以外で、「この先生いいな」と思うのはどんな時？',
            ],
            sampleAnswer: '知識 + 伝え方 + 生徒への関心',
            explanation: '分解すると「何が足りないか」「何が大事か」がわかる。知識だけの先生は物知り。伝え方だけの先生は芸人。両方あっても関心がないと「いい先生」にはならない。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 1,
      },
    ],
  },
];
