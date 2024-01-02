const codeQuestions = [

    {
        questionOne:
        "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Cascading Style System", "Computer Style Sheets", "Cascading System Service"],
        correctAnswer: "Cascading Style Sheets",
    
    },
    
    {
        questionTwo:
        "What does HTML stand for?",
        options: ["Home Tool Markup Language", "Hyperlinks and Text Markup Language", "HyperText Markup Language", "HyperText Model Language"],
        correctAnswer: "HyperText Markup Language",
    
    },
    
    {
        questionThree:
        "What is JavaScript mainly used for?",
        options: ["To collect statistics", "To build the basic structure of a webpage", "To add visual styling to a webpage", "To add interactivity to a webpage"],
        correctAnswer: "To add interactivity to a webpage",
    
    },
    
    {
        questionFour:
        "Which HTML tag is used to create an unordered list?",
        options: ["ol", "ul", "li", "list"],
        correctAnswer: "ul",
    
    },
    
    {
        questionFive:
        "Which JavaScript method is used to remove the last element from an array?",
        options: ["push()", "unshift()", "pop()", "shift()"],
        correctAnswer: "pop()",
    
    },
    
    
    ]


    document.addEventListener("DOMContentLoaded", function () {
        var startButton = document.getElementById("start");
        var questionsContainer = document.getElementById("questions");
        var endScreen = document.getElementById("end-screen");
        var timeElement = document.getElementById("time");
        var feedbackElement = document.getElementById("feedback");
        var submitButton = document.getElementById("submit");
        var initialsInput = document.getElementById("initials");
        var finalScoreElement = document.getElementById("final-score");
      
        var currentQuestionIndex = 0;
        var timer;
        var secondsLeft = 40; // Adjust this based on your desired time limit
        var score = 0;
      
        startButton.addEventListener("click", startQuiz);
      
        function startQuiz() {
          startButton.style.display = "none";
          // Start the timer
          timer = setInterval(function () {
            secondsLeft--;
            timeElement.textContent = secondsLeft;
      
            if (secondsLeft <= 0 || currentQuestionIndex === codeQuestions.length) {
              clearInterval(timer);
              endQuiz();
            }
          }, 1000);
      
          // Display the first question
          displayQuestion();
        }
      
        function displayQuestion() {
          var currentQuestion = codeQuestions[currentQuestionIndex];
      
          document.getElementById("question-title").textContent = currentQuestion.question;
          var choicesContainer = document.getElementById("choices");
          choicesContainer.innerHTML = "";
      
          currentQuestion.options.forEach(function (option, index) {
            var button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", function () {
              checkAnswer(option);
            });
            choicesContainer.appendChild(button);
          });
        }
      
        function checkAnswer(selectedAnswer) {
          var currentQuestion = codeQuestions[currentQuestionIndex];
      
          if (selectedAnswer === currentQuestion.correctAnswer) {
            feedbackElement.textContent = "Correct!";
            score++;
          } else {
            feedbackElement.textContent = "Incorrect! -5 seconds";
            secondsLeft -= 5;
          }
      
          feedbackElement.classList.remove("hide");
      
          // Move to the next question after a brief delay
          setTimeout(function () {
            feedbackElement.classList.add("hide");
            currentQuestionIndex++;
      
            if (currentQuestionIndex < codeQuestions.length) {
              displayQuestion();
            } else {
              endQuiz();
            }
          }, 1000);
        }
      
        function endQuiz() {
          questionsContainer.classList.add("hide");
          endScreen.classList.remove("hide");
          finalScoreElement.textContent = score;
          clearInterval(timer);
        }
      
        submitButton.addEventListener("click", function () {
          // Handle submitting the score and initials if needed
          var initials = initialsInput.value.trim();
          if (initials !== "") {
            // You can save the initials and score or perform other actions
            console.log("Initials: ", initials, "Score: ", score);
          }
        });
      });