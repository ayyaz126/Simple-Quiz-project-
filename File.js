const questions = [
    {
      question: "which is the largest animal in the world",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Which is the largest country in the world",
      answers: [
        { text: "Pakistan", correct: false },
        { text: "India", correct: false },
        { text: "China", correct: true },
        { text: "Dubai", correct: false },
      ],
    },
    {
      question: "Which is the smallest country in the world",
      answers: [
        { text: "Pakistan", correct: false },
        { text: "India", correct: false },
        { text: "Dubai", correct: false },
        { text: "Iceland", correct: true },
      ],
    },
    {
      question: "Which is the most corrupt country in the world",
      answers: [
        { text: "Pakistan", correct: true },
        { text: "India", correct: false },
        { text: "Dubai", correct: false },
        { text: "Iceland", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById('question');
  const answerButton = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('nextButton');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    answerButton.innerHTML = ''; // Clear previous answer buttons
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => checkAnswer(index));
      answerButton.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answers[selectedIndex].correct) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }
  
  function finishQuiz() {
    questionElement.innerHTML = 'Quiz Finished!';
    answerButton.innerHTML = 'Your Score: ' + score + ' out of ' + questions.length;
    nextButton.innerHTML = 'Restart';
    nextButton.addEventListener('click', startQuiz);
  }
  
  startQuiz();