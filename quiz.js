const questions = [
    {
        question: "フランスの首都は？",
        answer: "パリ",
        explanation: "パリはフランスの首都です。"
    },
    {
        question: "日本の首都は？",
        answer: "東京",
        explanation: "東京は日本の首都です。"
    },
    {
        question: "日本で一番高い山は？",
        answer: "富士山",
        explanation: "富士山は標高3776.12mで、日本一高い山です。世界文化遺産にもなっています。"
    },
    {
        question: "津田塾大学の前身となる学校を創設した、2024年7月からは新五千円札の肖像にも採用された人物は？",
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
