const questions = [
    {
        question: "オナガ、カケス、カササギと言えばいずれも何科の鳥？",
        answer: "カラス",
        explanation: ""
    },
    {
        question: "音声素材は小山乃舞世が務めている、2008年のエイプリルフールに架空のVOCALOIDを作る企画から誕生した、代表曲に『右に曲ガール』『吉原ラメント』『おちゃめ機能』があるキャラクターは？？",
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
        question: "駆除の難しさから「地獄草」とも呼ばれる、その胞子茎はツクシとして知られるトクサ科の植物は？",
        answer: "スギナ",
        explanation: `葉が枝状に伸びるシダ植物。畑や防草ビニールで覆われた隙間などあちこちで生える雑草。
　除草しようにも、根を地下60cmと深くまで伸ばす上、塊茎と呼ばれる芋の部分が分離するとそこからも芽が出てくる。

　シダ植物なので種子ではなく胞子で繁殖する。
　いわばツクシはスギナの花に当たる。`
    },
    {
        question:"ヘブライ語で「神と闘う人」という意味がある、三つの宗教の聖地が同居する都市エルサレムがある事で知られる中東の国はどこでしょう？",
        answer: "イスラエル",
        explanation: `地中海の東側に位置する中東の国。日本の四国程度の面積を持つ。
　国旗の六芒星は「ダビデの星」と言われる。
　観光地として、イスラエルとヨルダンの国境にある死海が有名。

　エルサレムにある三つの宗教の聖地はそれぞれ、
　ユダヤ教の「嘆きの壁」
　イスラム教の「岩のドーム」
　キリスト教の「聖墳墓教会」`
    },
    {
        question: "音源には実際の小学生が起用されている、代表曲に『ラグトレイン』や『強風オールバック』がある、AHSから発売されたVOCALOIDは？",
        answer: "歌愛ユキ",
        explanation: `2009年にAH-Software(AHS)から発売されたVOCALOID。
　2015年には新型のVOCALOID4版も発売された。

　声質は少しハスキー。
　音源を担当した方によると、「録音前には治ったものの新型インフルエンザに罹っていた」そうなので、その影響か。`
    },
    {
        question: "「強」に送り仮名の「い」を付けると「つよい」と読みますが、送り仮名の「ち」を付けたら何と読む？",
        answer: "あなが",
        explanation: `後半を以下のように変える事も出来る。
　"「か」を付けたら"→「強か(したた-か)」
　"「いて」を付けたら"→「強いて(し-いて)」

　前半は「強い」以外から派生させるのは避けたい。
　理由は二つ。
　一つは、問題文の連続性が薄くなる事。「強か/強ち」なら「い」→「か/ち」の一文字変化、「強いて」なら「い」→「いて」の文字追加とどちらでも変化が自然。一方、「強ち」から「強いて」だと「ち」→「いて」、と変化に連続性が無く、わざわざ平行問題にする意味が無い。
　二つは、どれも最も一般的な読みである「つよい」から外れている事。「強か」と「強ち」での平行は成立するものの、前半だけでも短文問題として成立する。何故平行にしたのかという納得感が薄い、いじわるな問題になってしまう。`
    },
    // 他のクイズを追加
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
