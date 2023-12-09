const questions = [
    {
        question: "オナガ、カケス、カササギと言えばいずれも何科の鳥？",
        answer: "カラス",
        explanation: ""
    },
    {
        question: "音声素材は小山乃舞世が務めている、2008年のエイプリルフールに架空のVOCALOIDを作る企画から誕生した、代表曲に『右に曲ガール』『吉原ラメント』『おちゃめ機能』があるキャラクターは？",
        answer: "重音テト",
        explanation: `フリーの音声合成ソフトUTAUの音源として知られるキャラクター。
　元々は2008年にネット掲示板２ちゃんねるにて、架空のVOCALOIDを作るというネタから生まれた。エイプリルフールが近かった事もあり、同年4月1日に重音テトが嘘として形となる。
　ところが、UTAU音源からVOCALOID同様に様々な楽曲が作られ、15周年迎えた2023年4月には商用ソフトである音声合成ソフトSynthesizer Vでの音源化。形は異なるものの、嘘から出た真となった。`
    },
    {
        question: "元は奇抜な演出を指す歌舞伎用語である、現代では多く「味」を伴って「はったり」や「ごまかし」の意味で用いられる言葉は？",
        answer: "外連",
        explanation: ""
    },
    {
        question: "女子英学塾を創設して近代的な女子高等教育に尽力した、2024年7月からは新五千円札の肖像にも採用された人物は？",
        answer: "津田梅子",
        explanation: "女子英学塾(現:津田塾大学)を創設し、近代的な女子高等教育に尽力した。"
    },
    {
        question: "「東西南北」の内、現在、国連加盟国の国名に使われていない物はどれでしょう？",
        answer: "西",
        explanation: "-東    :東ティモール/-南  :南アフリカ、南スーダン/-北  :北マケドニア"
    },
    {
        question: "エマヌエル・ロイツェによるデラウェア川を渡る彼の姿を描いた絵画も有名である、アメリカ初代大統領は誰？",
        answer: "ジョージ・ワシントン",
        explanation: ""
    },
    {
        question: "英語では「hourgrass」と言う、8の字型の容器を引っ繰り返して中身をちょっとずつ落とす事で時間を計る器具を、一般的に中身に用いられる物から何と言う？",
        answer: "砂時計",
        explanation: ""
    },
    {
        question: "国境、三月、行進を表すのに共通する英単語の綴りは？",
        answer: "March",
        explanation: ""
    },
    {
        question: "日光東照宮の薬師堂のものが有名である、平行に向かい合う硬い面の間で反響が繰り返されビリビリといった音が聞こえる現象を、ある架空の生き物を用いて何と言う？",
        answer: "鳴き竜",
        explanation: ``
    },
    {
        question: "雪、床、筆に共通して付く、いつまでも変わらずに同じ状態である意味を表す語は？",
        answer: "万年",
        explanation: `それぞれ、
万年雪:一年中解けない雪
万年床:ずっと敷きっぱなしにした布団
万年筆:内部のインクが継続的に出てくるペン`
    },
    {
        question: "英語では「EEZ」と略される、漁業や資源採掘などを他国に邪魔されず自由に行える、領海の基線からその外側200海里に設けられる領域を何と言う？",
        answer: "排他的経済水域",
        explanation: `英語では"Exclusive Economic Zone"。
　"Exclusive"は「排他的。独占的」の意味で、日本語と同じ。`
    },
    {
        question: "「猶予」の読みは「ゆうよ」ですが、「猶予う」の読みは？",
        answer: "いざよ",
        explanation: `「猶予」は「実行の期日を伸ばす」の他、「ぐずぐずする」という意味もある。
　「一刻の猶予も許されない」は後者の用例となる。

　「いざよう」も「ぐずぐずする。躊躇う」の意味。
　なお、「十六夜(いざよい)」の表記は有名だが、「十六夜う」とは書かれない。`
    },
    {
        question: "数表では「縦列」、新聞では「寄稿欄」を表す英単語は？",
        answer: "column",
        explanation: `「円柱」を原義とする単語。
　派生して「円柱状の物」「縦に並んだ物」も指すようになった。

「縦列」はExcelを使っている方ならCOLUMN関数で馴染み深いか。

「寄稿欄」は、「新聞の縦欄」の意味が更に派生したものだろう。`
    },
    {
        question: "英語では「面接」という意味も持つ、日本では主に「取材」の意味で用いられる英単語は？",
        answer: "interview",
        explanation: `"interview"は「面接。尋問。取材」と、相手に聞き取りを行うという意味の語。
　用例 : 就職面接 / job interview`
    },
    {
        question: "「蹄はウシ、頭はウマ、角はシカ、体はロバに似ている」と言われるものの、そのどれとも違うことからその名が付いたシカ科の動物は？",
        answer: "シフゾウ",
        explanation: `体長約2ｍ、体重150〜200kgほどのシカ科の動物。
　問題文の冒頭のように言われるものの、そのどれとも違う事から「四不像(シフゾウ)」と名付けられた。
　漢字が違うとはいえ、「シカ科」で「ゾウ」と更に紛らわしい。

　野生では一度絶滅してしまったものの、1986年には飼育下の個体を還す保護区が設けられ、現在は野生復帰が進みつつある。
　日本の動物園では、多摩動物公園、広島市安佐動物公園、熊本市動植物園で飼育されている。`
    },
    {
        question: "不正サイトへのリンクが印刷されたシールを張り付けるいう手法も問題となっている、QRコードを利用したフィッシング詐欺を何と言う？",
        answer: "クイッシング",
        explanation: `QRコードの特性上、一般的なフィッシング詐欺とは異なって、リンク策のURLが確認できなくなっているのが特徴。
        また、メールでも不正なURLならばそれに大して警告が生じるのに対し、QRコードではそれが起こらないという問題があった。`
    },
    {
        question: "盲腸、鼻血、眉毛などの絵柄もある、1984年に来日したある動物を基に設計されたロッテのお菓子は？",
        answer: "コアラのマーチ",
        explanation: `1984年10月にコアラが初来日するのに合わせて作られ、同年3月に誕生した。
　コアラの絵柄に加え、六角柱の箱はユーカリを意識している。`
    },
    {
        question: "正式名称は「船島」という、佐々木小次郎と宮本武蔵が決闘した場所として知られる、下関市にある島を一般的に何島というでしょう？",
        answer: "巌流島",
        explanation: `山口県下関市にある島。
　正式名称は「船島」と言い、巌流島の名は 佐々木小次郎の流派「巌流」が由来。
　1973年以降は無人島となっており、観光地化されている。`
    },
    {
        question: "「ドベネックの桶」の譬えでも知られる、「植物の成長は、必要な物質の内で与えられた量が最も少ない物によって決まる」という説を、それを提唱したとされるドイツの化学者の名前から「何の最小律」という？",
        answer: "リービッヒ",
        explanation: ``
    },
    {
        question: "2023年には彼女の声を基とする音声創作ソフト「音楽的同位体　星界」が発売された、『いろはに咲きて』『シリウスの心臓』などの代表曲があるバーチャルシンガーは？",
        answer: "ヰ世界情緒",
        explanation: `KAMITSUBAKI STUDIO所属のバーチャルシンガー。2019年12月に活動開始した。
　少女的でありながら芯が太い伸びやかな歌声をしている。`
    },
    {
        question: "ナイアガラの滝を構成する三つの滝と言えば、アメリカ滝、カナダ滝と残り一つは何？",
        answer: "ブライダルベール滝",
        explanation: `ナイアガラの滝は大きいものから順に、ホースシュー滝(カナダ滝としても知られる)、アメリカ滝、ブライダル ベール滝の3つの滝で構成されている。`
    },
    {
        question: "赤道が通っている国は全部で幾つある？",
        answer: "10",
        explanation: ``
    },
    {
        question: "葉に含まれるネペタラクトールには蚊を忌避したり、猫が酔っぱらったような状態にする効果がある、漢字では「木天蓼」と書く植物は？",
        answer: "またたび",
        explanation: ``
    },
    {
        question: "ドイツにおける国民車構想の一つとなっていた、速度無制限区間があることでも有名な、ドイツ全土を結ぶ高速道路の名前は？",
        answer: "アウトバーン",
        explanation: ``
    },
    {
        question: "330年にローマ帝国の首都としてビザンティオンに遷都した際にこの名称となった、アジアとヨーロッパの中継点として古代から東西交易の場として栄えた、現在のイスタンブールの前身となった都市は？",
        answer: "コンスタンティノープル",
        explanation: ``
    },
    {
        question: "その名前は「4」を表す単語と「テニス」を組み合わせたものである、計7種類のブロックを回転、移動、落下させることで列を作り消していくという内容の、1984年にアレクセイ・パジトノフによって開発されたパズルゲームは？",
        answer: "テトリス",
        explanation: ``
    },
    {
        question: "1986年にパズルゲーム『テトリス』を開発した、ロシアの情報工学者は誰でしょう？",
        answer: "アレクセイ・パジトノフ",
        explanation: ``
    },
    {
        question: "世界で唯一、ペルー文化省の許可を得てナスカの地上絵の学術調査を行っている大学である、鶴岡や小白川などにキャンパスを置く大学は？",
        answer: "山形大学",
        explanation: ``
    },
    {
        question: "看板商品としてミラノ風ドリアが知られる、1973年に洋食屋からイタリアンレストランに転身して生まれた、正垣泰彦が創業したファミリーレストランは？",
        answer: "サイゼリヤ",
        explanation: ``
    },
    {
        question: "中国原産のシナサルナシが品種改良されたものである、その名前は見た目がニュージーランドの国鳥に似ている事に由来するマタタビ科の植物は？",
        answer: "キウイフルーツ",
        explanation: ``
    },
    {
        question: "煩悩や妄想に縛られ自由でない事を表す、「解脱」の対語は？",
        answer: "繋縛",
        explanation: ``
    },
    {
        question: "御一新草、明治草、鉄道草などの別名がある、北アメリカ原産のキク科の植物は？",
        answer: "ヒメムカシヨモギ",
        explanation: ``
    },
    {
        question: "その有毒性から「馬食わず」や「歯欠」とも呼ばれる、実から生える白い毛が特徴的なキンポウゲ科の植物は？",
        answer: "センニンソウ",
        explanation: ``
    },
    {
        question: "建築面積の46,755平方メートルや容積の124万立方メートルは単位としても用いられがちな、読売ジャイアンツの本拠地にもなっているスタジアムの名前は？",
        answer: "東京ドーム",
        explanation: ``
    },
    {
        question: "「はい」「いいえ」「たぶんそう/部分的にそう」などの質問を重ねて、プレイヤーが思い浮かべた人物や動物をランプの魔人が当てるという内容のゲームは？",
        answer: "アキネイター",
        explanation: ``
    },
    {
        question: "白と黒で互いに15個の駒を動かし、先にその全てをゴールさせたら得点するという内容の盤上競技は？",
        answer: "バックギャモン",
        explanation: ``
    },
    {
        question: "バックギャモンの三種類ある勝ち方と言えば、ギャモン勝ち、バックギャモン勝ちと残り一つは何？",
        answer: "シングル",
        explanation: ``
    },
    {
        question: "世界幻想文学大賞の受賞作『奇術師』を執筆した小説家・プリーストと、それを2006年に『プレステージ』として映画化した監督・ノーランに共通するファーストネームは？",
        answer: "クリストファー",
        explanation: ``
    },
    {
        question: "競走馬・キングヘイローやナリタブライアンなどが装着していた、下方を見えにくくして前方に意識を集中させたり、頭を下げさせて馬を御しやすくする目的で使用される、馬の鼻先に着用するボア状の矯正馬具は？",
        answer: "シャドーロール",
        explanation: ``
    },
    {
        question: "七夕賞やオールカマーが主な勝鞍である、勝つ時は派手に勝ち、負ける時は派手に惨敗するその大逃げから「最後の個性派」とも称される競走馬は？",
        answer: "ツインターボ",
        explanation: ``
    },
    {
        question: "1992年にはマイルチャンピオンSの連覇を果たしている、口を開けて走る姿から「笑う馬」、人気が有る時は走らず、無い時は走ることから「新聞が読める馬」とも呼ばれた競走馬は？",
        answer: "ダイタクヘリオス",
        explanation: ``
    },
    {
        question: "高知競馬場で活躍していた馬であり、113戦0勝という生涯記録でも知られている競走馬は？",
        answer: "ハルウララ",
        explanation: ``
    },
    {
        question: "コモロ諸島がその最大の輸出国となっている、ティファニーやシャネルの香水にも用いられている、タガログ語で「花の中の花」を意味するバンレイシ科の植物は",
        answer: "イランイラン",
        explanation: ``
    },
    {
        question: "1960年代までは夜光塗料として時計の文字盤にも用いられたが、従業員の健康被害が続出し規制された、1898年にマリー・キュリーにより発見された原子番号88、元素記号Raの元素は？",
        answer: "ラジウム",
        explanation: ``
    },
    {
        question: "ニュージーランドの5ドル紙幣の肖像にもなっている、1953年5月29日にシェルパのテンジン・ノルゲイと共に人類で初めてエベレストに登頂した人物は誰でしょう？",
        answer: "エドモンド・ヒラリー",
        explanation: ``
    },
    {
        question: "ヌワラエリヤ、キャンディ、ウバなどの紅茶の産地として有名である、1972年に国名をセイロンから改めた、インド洋に位置する島国は",
        answer: "スリランカ",
        explanation: ``
    },
    {
        question: "2018年にはフォーブス誌による「アメリカの最も裕福なセレブ」で1位となっている、『インディ・ジョーンズ』や『スター・ウォーズ』の生みの親として知られる映画監督は",
        answer: "ジョージ・ルーカス",
        explanation: ``
    },
    {
        question: "通称「The Met」と呼ばれる、1866年のパリにてアメリカの独立記念90周年を祝う人々によって構想が提案され、1870年に創立したニューヨーク5番街にある美術館は？",
        answer: "メトロポリタン美術館",
        explanation: ``
    },
    {
        question: "鮭の身が赤く見えるのはこれに由来する、優れた抗酸化作用を持つカロテノイド系色素は？",
        answer: "アスタキサンチン",
        explanation: ``
    },
    {
        question: "現在の形のものはイギリスの薬剤師ジョン・ウォーカーによって発明された、一般的には軸木の先端にある頭薬を、容器に付けられた側薬に擦りつける事で着火する道具は",
        answer: "マッチ",
        explanation: ``
    },
    {
        question: "「栴檀は双葉より芳し」の「栴檀」は本来この植物の事である、東インドに分布する半寄生性の常緑植物は",
        answer: "ビャクダン",
        explanation: ``
    },
    {
        question: "無駄な事は「闇夜のこれ」、自らの行いを権威付ける事は「これの御旗」、出世して故郷へ帰る事は「これを飾る」。いずれも何と言う単語が入る？",
        answer: "錦",
        explanation: ``
    },
    {
        question: "生物の学名を、属名と種名で表す「二名法」を確立したことから「分類学の父」と呼ばれる、1707年5月23日生まれのスウェーデンの博物学者は",
        answer: "カール・フォン・リンネ",
        explanation: ``
    },
    {
        question: "海賊対処の為に自衛隊にとっては事実上初の海外拠点が開設されている、1977年にフランスから独立した、アデン湾と紅海を結ぶ位置にあるアフリカの国は？",
        answer: "ジブチ",
        explanation: ``
    },
    /*
    他のクイズを追加。
    {
        question: "",
        answer: "",
        explanation: ``
    },
    */
];

const quizContainer = document.getElementById('quizText');

let currentQuestionIndex = 0;
let currentIndex = 0;
let intervalId;

// クイズの順番をランダムに入れ替える関数
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleQuestions(questions);

function displayNextCharacter() {
    const quizText = questions[currentQuestionIndex].question;
    document.getElementById("result").textContent = "";
    document.getElementById("explanation").textContent = "";
    document.getElementById("answer").value = "";
    
    if (currentIndex < quizText.length) {
        quizContainer.textContent += quizText.charAt(currentIndex);
        currentIndex++;
    } else {
        clearInterval(intervalId);
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        document.getElementById("result").textContent = "正解！";
    } else {
        document.getElementById("result").textContent = "残念！";
    }

    document.getElementById("explanation").textContent = currentQuestion.explanation;

    // 「Next」ボタンに変更
    const submitButton = document.querySelector("button");
    submitButton.textContent = "Next";
    submitButton.onclick = nextQuestion; // 次の質問に進む関数を設定
}

function nextQuestion() {
    // 「Next」ボタンを「Submit Answer」ボタンに戻す
    
    const submitButton = document.querySelector("button");
    submitButton.textContent = "Submit Answer";
    submitButton.onclick = checkAnswer; // 答えをチェックする関数を設定

    // Move to the next question or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        currentIndex = 0;
        quizContainer.textContent = "";
        intervalId = setInterval(displayNextCharacter, 125);
        displayNextCharacter();
    } else {
        document.getElementById("question").textContent = "クイズ終了！";
        document.getElementById("answer").style.display = "none";
        submitButton.textContent = "Continue"; // 「Continue」ボタンに変更
        submitButton.onclick = restartQuiz; // クイズを最初から始める関数を設定
    }
}

// クイズの文章を一文字ずつ表示するインターバルを設定
intervalId = setInterval(displayNextCharacter, 125);
