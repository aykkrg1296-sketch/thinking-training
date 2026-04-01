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
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-006',
        title: 'スマホって何？',
        steps: [
          {
            prompt: '「スマホ」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '電話するための機械...それだけ？',
              'スマホがなかった時代と今、何が一番変わった？',
            ],
            sampleAnswer: '自由をポケットに入れたもの',
            explanation: '電話・地図・カメラ・支払い...全部「今すぐ、どこでも」できるようになった。スマホの本質は機能じゃなくて「場所や時間を選ばない自由」。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 1,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-007',
        title: '音楽って何？',
        steps: [
          {
            prompt: '「音楽」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '音が並んでるもの...それで終わり？',
              '音楽を聴いてる時、何が起きてる？',
            ],
            sampleAnswer: '気持ちを引っ張り出してくれるもの',
            explanation: '音楽は物理的には「空気の振動」。でも人間にとっては感情を動かすスイッチ。悲しくなったり、やる気が出たり。同じ音でも聴く人によって意味が変わる—これが抽象の面白さ。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 1,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-008',
        title: '旅行って何？',
        steps: [
          {
            prompt: '「旅行」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '知らない場所に行くこと...もう一歩',
              '旅行から帰ってきた時、何かが変わってる？',
            ],
            sampleAnswer: '知らない自分に会いに行くこと',
            explanation: '旅行の表面は「移動」。でも人が旅行する理由は「いつもと違う自分に気づくため」のことが多い。非日常の環境に置かれると、普段見えない自分の反応が出てくる。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 2,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-009',
        title: '病院って何？',
        steps: [
          {
            prompt: '「病院」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '病気を治す場所...それだけ？',
              '病院に行く前と後で、気持ちはどう変わる？',
            ],
            sampleAnswer: '「大丈夫」を取り戻す場所',
            explanation: '医療行為（具体）の奥には「不安が安心に変わる」体験がある。どんなに検査が完璧でも、患者が「大丈夫だ」と思えなければ意味がない。機能と体験は別の話。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 2,
      },
      {
        moduleId: 'abstraction-ladder',
        questionId: 'al-010',
        title: 'お金って何？',
        steps: [
          {
            prompt: '「お金」ってひとことで言うと何だろう？',
            inputType: 'text',
            hints: [
              '買い物に使うもの...それだけ？',
              'お金があると、何ができるようになる？',
            ],
            sampleAnswer: '選択肢を増やすもの',
            explanation: 'お金そのものに価値はない（紙と金属）。価値があるのは「自分で選べる幅が広がること」。これがわかると、お金の使い方の考え方が変わる。',
          },
        ],
        thinkingType: 'abstraction',
        difficulty: 3,
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
      {
        moduleId: 'essence-catch',
        questionId: 'ec-004',
        title: 'スタバ・ジム・本屋の共通点',
        steps: [
          {
            prompt: '「スターバックス」「ジム」「本屋」。この3つに共通することは？',
            inputType: 'text',
            hints: [
              '全部お金を払う場所...それだけ？',
              'そこにいる間、どんな気持ち？',
            ],
            sampleAnswer: '自分のための時間を買う場所',
            explanation: '商品やサービスは違う。でも「そこに行くと自分がちゃんと自分の時間を使えてる気がする」という体験は共通。売ってるのは物や場所じゃなくて「自分への投資感」。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
      {
        moduleId: 'essence-catch',
        questionId: 'ec-005',
        title: 'SNSから1つだけ残すとしたら',
        steps: [
          {
            prompt: '「SNS」からひとつだけ残すとしたら、何を残す？投稿機能？いいね？フォロー？',
            inputType: 'text',
            hints: [
              '投稿できても誰も見てなかったら？',
              'いいねがあっても知らない人ばかりだったら？',
            ],
            sampleAnswer: 'つながってる感覚',
            explanation: '投稿もいいねもフォローも、全部「つながってる」という感覚のための手段。手段を1つ残すより、その奥にある「つながり感」を残す方が本質に近い。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
      {
        moduleId: 'essence-catch',
        questionId: 'ec-006',
        title: '試合・発表会・面接の共通点',
        steps: [
          {
            prompt: '「試合」「発表会」「面接」。この3つに共通することは？',
            inputType: 'text',
            hints: [
              '緊張する...もう一歩',
              'その前に何をしてる？',
            ],
            sampleAnswer: '積み上げてきたものを出し切る場',
            explanation: '形は違う。でも全部「ここまでやってきた」を試される瞬間。だから緊張する。本番の価値は結果じゃなくて「これまでの自分を全部出せたか」にある。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
      {
        moduleId: 'essence-catch',
        questionId: 'ec-007',
        title: '手紙・プレゼント・誕生日ケーキの共通点',
        steps: [
          {
            prompt: '「手紙」「プレゼント」「誕生日ケーキ」。この3つに共通することは？',
            inputType: 'text',
            hints: [
              '全部もらって嬉しいもの...もう少し深く',
              'なぜもらうと嬉しい？',
            ],
            sampleAnswer: '「あなたのことを考えてたよ」という証拠',
            explanation: 'プレゼントが高価かどうかより、「選んでくれた」という事実が嬉しい。手紙もケーキも同じ。「自分のために時間を使ってくれた」という意思の証明がもらえること—これが本質。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 3,
      },
      {
        moduleId: 'essence-catch',
        questionId: 'ec-008',
        title: 'おいしいご飯の本質',
        steps: [
          {
            prompt: '「おいしいご飯」からひとつだけ残すとしたら、何を残す？味？見た目？値段？',
            inputType: 'text',
            hints: [
              '同じ料理でも、誰と食べるかで味が変わる気がしない？',
              'ひとりで食べる時と、大好きな人と食べる時の違いは？',
            ],
            sampleAnswer: '食べた後の「よかった」という気持ち',
            explanation: '味が良くても体調が悪い日は「おいしい」と感じにくい。逆に普通の料理でも、特別な場所や人と食べると「最高においしかった」になる。「おいしい」は料理だけじゃなくて、その時の全体の体験。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 3,
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
      {
        moduleId: 'purpose-means',
        questionId: 'pm-004',
        title: '日記を書く理由',
        steps: [
          {
            prompt: '日記を書く。そもそも何のため？',
            inputType: 'text',
            hints: [
              '「記録するため」...でも読み返さない人も多いよね',
              '書いてる時、何が起きてる？',
            ],
            sampleAnswer: '頭の中をいったん外に出すため',
            explanation: '日記の目的は「読み返すこと」じゃない人も多い。書くという行為自体が「考えを整理する」行為。書かないと気づかなかった自分の気持ちに気づく。「記録」は手段、「思考の整理」が本当の目的。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 1,
      },
      {
        moduleId: 'purpose-means',
        questionId: 'pm-005',
        title: '挨拶をする理由',
        steps: [
          {
            prompt: '「おはようございます」と挨拶をする。そもそも何のため？',
            inputType: 'text',
            hints: [
              '礼儀だから...それだけ？',
              '挨拶しない人と毎日顔を合わせたら、どんな気持ち？',
            ],
            sampleAnswer: '「あなたのことを認識してます」を伝えるため',
            explanation: '挨拶は言葉の意味より「存在を認める」という行為。無視されると存在を否定された気分になる。逆に挨拶されると「見えてる」と感じる。礼儀は手段、関係の扉を開け続けることが目的。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
      {
        moduleId: 'purpose-means',
        questionId: 'pm-006',
        title: '運動する理由',
        steps: [
          {
            prompt: '「体のために運動しよう」。そもそも何のため？ なぜ続けるの？',
            inputType: 'text',
            hints: [
              '「健康のため」...それで終わり？',
              '運動した日と、しなかった日、気持ちが違う？',
            ],
            sampleAnswer: '「ちゃんと自分を大切にできた」という感覚のため',
            explanation: '体の健康は目に見えにくい。でも「今日も運動できた」という達成感は毎日感じられる。運動が習慣になる人は、健康（遠い目的）より自己肯定感（今日の目的）で動いていることが多い。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 2,
      },
      {
        moduleId: 'purpose-means',
        questionId: 'pm-007',
        title: 'おしゃれをする理由',
        steps: [
          {
            prompt: '朝、服を選んでおしゃれをする。そもそも何のため？',
            inputType: 'text',
            hints: [
              '「人に見られるから」...もう1段深く',
              'ひとりでいる日もおしゃれしたくなる時ある？',
            ],
            sampleAnswer: '今日の自分をどんな自分にするか決めるため',
            explanation: 'おしゃれは他人のためだけじゃない。服を選ぶ行為は「今日の自分のテンションや役割を自分で設定する」こと。制服がある職場でも、靴や髪で「今日の自分」を作る人は多い。',
          },
        ],
        thinkingType: 'essence',
        difficulty: 3,
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
      {
        moduleId: 'verbalization',
        questionId: 'vb-003',
        title: '「やる気」って何？',
        steps: [
          {
            prompt: '「やる気」って何？ 小学生に伝わるように説明してみて。',
            inputType: 'text',
            hints: [
              '「やりたい気持ち」...それをもっと具体的に',
              'やる気がある時と、ない時、体の感じが違う？',
            ],
            sampleAnswer: 'やり始めたら止まらなくなる感じ',
            explanation: '「やる気」は「動き出す前の感情」より「動き始めると出てくる」ことが多い。研究でも「やる気が出たから動く」より「動いたらやる気が出た」の方が正確。だから「やる気を待つ」より「とりあえず1分やる」が正解。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 1,
      },
      {
        moduleId: 'verbalization',
        questionId: 'vb-004',
        title: '「プロ」ってどういう人？',
        steps: [
          {
            prompt: '「プロ」ってどういう人？ 10文字以内で定義してみて。',
            inputType: 'text',
            hints: [
              'お金をもらってる人...それだけ？',
              'アマチュアとプロの一番の違いは？',
            ],
            sampleAnswer: '何度でも同じ質を出せる人',
            explanation: 'プロとアマの違いは「上手いかどうか」より「安定してるかどうか」。調子いい日だけ上手いのはアマ。疲れてる日も、気分が乗らない日も、同じ質を出せる。それがプロ。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 2,
      },
      {
        moduleId: 'verbalization',
        questionId: 'vb-005',
        title: 'スポーツ観戦の楽しさ',
        steps: [
          {
            prompt: 'スポーツ観戦の楽しさを、10文字以内で伝えてみて。',
            inputType: 'text',
            hints: [
              '「応援が楽しい」...もう少し踏み込んで',
              '逆転した瞬間、何を感じてる？',
            ],
            sampleAnswer: '知らない人と一緒に熱くなれる',
            explanation: 'スポーツ観戦の不思議は「自分は何もしてないのに感情が動く」こと。しかも見知らぬ人と同じ感情を共有できる。「一体感」が本質。これをひとことで伝えるのが言語化の腕の見せ所。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 2,
      },
      {
        moduleId: 'verbalization',
        questionId: 'vb-006',
        title: '「友達」って何？',
        steps: [
          {
            prompt: '「友達」って何？ 小学生に伝わるように説明してみて。',
            inputType: 'text',
            hints: [
              '「仲良しの人」...それで終わり？',
              '友達と知り合いの違いは何？',
            ],
            sampleAnswer: '本音が言えて、また会いたくなる人',
            explanation: '知り合いは「会ったことある人」。友達は「また会いたいと思える人」。何が違うかというと「本音を見せ合えるかどうか」。友達の本質は「飾らなくていい関係」。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 2,
      },
      {
        moduleId: 'verbalization',
        questionId: 'vb-007',
        title: '休日の良さ',
        steps: [
          {
            prompt: '「ダラダラする休日」の良さを、10文字以内で伝えてみて。',
            inputType: 'text',
            hints: [
              '「休める」...もう少し具体的に',
              'なぜダラダラしたくなる？',
            ],
            sampleAnswer: '何もしなくていい、の安心感',
            explanation: '「ダラダラ」が気持ちいいのは「やらなきゃいけないことがない」状態だから。プレッシャーがゼロの時間。これを言語化できると「休日とは何か」「なぜ人は休む必要があるか」が見えてくる。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 3,
      },
      {
        moduleId: 'verbalization',
        questionId: 'vb-008',
        title: '「おもしろい人」って？',
        steps: [
          {
            prompt: '「おもしろい人」ってどういう人？ 10文字以内で定義してみて。',
            inputType: 'text',
            hints: [
              '笑わせてくれる人...それだけ？',
              '笑わせなくても「おもしろい」人って、どういう人？',
            ],
            sampleAnswer: '話してると気づきがある人',
            explanation: '「面白い人=笑わせる人」と思われがちだけど、「この人の話を聞くと、自分の知らなかった視点が増える」人も「面白い」と言われる。笑いも知的発見も、共通するのは「予想を外してくること」。',
          },
        ],
        thinkingType: 'verbalization',
        difficulty: 3,
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
      {
        moduleId: 'deconstruction',
        questionId: 'dc-003',
        title: 'カフェを分解',
        steps: [
          {
            prompt: '「カフェ」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              '飲み物がある...他には？',
              'スーパーのイートインとカフェの違いは？',
            ],
            sampleAnswer: '飲み物 + 居場所（空間）+ 時間',
            explanation: '飲み物だけなら自販機で十分。「居場所」と「時間」があるから人はカフェに行く。スタバが高くても人が来るのは「飲み物+空間+過ごす時間」という3点セットが揃ってるから。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 1,
      },
      {
        moduleId: 'deconstruction',
        questionId: 'dc-004',
        title: '「信頼される人」を分解',
        steps: [
          {
            prompt: '「信頼される人」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              '約束を守る...他には？',
              '約束を守っても信頼されない場合ってある？',
            ],
            sampleAnswer: '約束を守る + 正直 + 結果を出す',
            explanation: '約束を守るだけでは信頼の「最低ライン」。そこに「悪いことも正直に言える」と「実際に成果を出す」が揃って、はじめて深い信頼になる。どれか一つ欠けると崩れる。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 2,
      },
      {
        moduleId: 'deconstruction',
        questionId: 'dc-005',
        title: 'いいお店を分解',
        steps: [
          {
            prompt: '「また行きたいお店」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              '料理がおいしい...他には？',
              '料理がおいしくても行かなくなるお店ってある？',
            ],
            sampleAnswer: '料理 + 空間 + 人（接客・雰囲気）',
            explanation: '料理だけなら料理のおいしさで選べる。でも「また行きたい」は空間の居心地と、そこで働く人の雰囲気で決まることが多い。逆に言うと、どれか一つダメだと全体が崩れる。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 1,
      },
      {
        moduleId: 'deconstruction',
        questionId: 'dc-006',
        title: '「いい映画」を分解',
        steps: [
          {
            prompt: '「見て良かった映画」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              'ストーリーがいい...他には？',
              'ストーリーは普通でも「よかった」と思う映画ってある？',
            ],
            sampleAnswer: 'ストーリー + 感情の動き + 余韻',
            explanation: 'ストーリーがうまくても感情が動かなければ「よかった」にならない。見終わった後に「なんかいい映画だったな」と思わせる「余韻」も独立した要素。感情の動きと余韻は別物。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 2,
      },
      {
        moduleId: 'deconstruction',
        questionId: 'dc-007',
        title: 'スマホを分解',
        steps: [
          {
            prompt: '「スマホ」って何と何でできてる？ 機能で3つに分けてみて。',
            inputType: 'text',
            hints: [
              'カメラ、電話...他には？',
              'スマホを機能ごとに考えると、何個のデバイスが合体してる？',
            ],
            sampleAnswer: '通信（電話・ネット）+ 計算（アプリ）+ センサー（カメラ・GPS）',
            explanation: 'スマホは電話・コンピュータ・カメラ・地図・財布・音楽プレーヤー...の合体品。分解すると「これ、以前は別々のデバイスだったんだ」と気づける。分解は「歴史を見る」眼にもなる。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 2,
      },
      {
        moduleId: 'deconstruction',
        questionId: 'dc-008',
        title: '「続けられること」を分解',
        steps: [
          {
            prompt: '「習慣として続けられること」って何と何でできてる？ 3つに分けてみて。',
            inputType: 'text',
            hints: [
              '意志が強い...それだけで続けられる？',
              '続いてる習慣と、続かなかった習慣の違いは？',
            ],
            sampleAnswer: 'やりやすい仕組み + 小さな達成感 + 理由（なぜやるか）',
            explanation: '意志の力だけで続けようとすると必ず折れる。続く習慣には「仕組み（続けやすい環境）」と「小さな達成感（続けた実感）」と「理由（やめたくない動機）」がある。どれが欠けても崩れやすくなる。',
          },
        ],
        thinkingType: 'deconstruction',
        difficulty: 3,
      },
    ],
  },
];
