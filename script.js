        // Quiz Data
        const quizData = {
            html: {
                title: "HTML Quiz",
                questions: [
                    {
                        question: "What does HTML stand for?",
                        options: [
                            "Hyper Text Markup Language",
                            "High Tech Modern Language",
                            "Hyperlink and Text Markup Language",
                            "Home Tool Markup Language"
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: "Which tag is used to define the structure of an HTML document?",
                        options: [
                            "<body>",
                            "<html>",
                            "<head>",
                            "<structure>"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Which of the following is the correct way to create a paragraph in HTML?",
                        options: [
                            "<paragraph>This is a paragraph</paragraph>",
                            "<p>This is a paragraph</p>",
                            "<para>This is a paragraph</para>",
                            "<text>This is a paragraph</text>"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Which HTML tag is used to insert an image?",
                        options: [
                            "<picture>",
                            "<image>",
                            "<img>",
                            "<src>"
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: "How do you create a hyperlink in HTML?",
                        options: [
                            "<link href='https://example.com'>Example</link>",
                            "<a>https://example.com</a>",
                            "<a href='https://example.com'>Example</a>",
                            "<hyperlink url='https://example.com'>Example</hyperlink>"
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: "Which HTML tag is used to create a table?",
                        options: [
                            "<table>",
                            "<tb>",
                            "<grid>",
                            "<tbl>"
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: "Which tag creates a form in HTML?",
                        options: [
                            "<input>",
                            "<form>",
                            "<formfield>",
                            "<fieldset>"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the purpose of the <div> tag in HTML?",
                        options: [
                            "To create a division or section in an HTML document",
                            "To divide the text into columns",
                            "To create a dropdown list",
                            "To define a table division"
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: "Which HTML element is used to specify a header for a document or section?",
                        options: [
                            "<header>",
                            "<head>",
                            "<heading>",
                            "<h1>"
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the correct HTML for creating a checkbox?",
                        options: [
                            "<input type='check'>",
                            "<check>",
                            "<checkbox>",
                            "<input type='checkbox'>"
                        ],
                        correctAnswer: 3
                    }
                ]
            },
            css: {
                title: "CSS Quiz",
                questions: [
                    {
                        question: "What does CSS stand for?",
                        options: [
                            "Creative Style Sheets",
                            "Cascading Style Sheets",
                            "Computer Style Sheets",
                            "Colorful Style Sheets"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Which property is used to change the font of an element?",
                        options: [
                            "font-style",
                            "text-style",
                            "font-family",
                            "text-font"
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: "How do you change the text color of an element?",
                        options: [
                            "text-color: blue;",
                            "font-color: blue;",
                            "color: blue;",
                            "text: blue;"
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: "Which CSS property controls the background color?",
                        options: [
                            "bgcolor",
                            "background-color",
                            "color-background",
                            "background"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "How do you style a button in CSS?",
                        options: [
                            "button { style: bold; }",
                            "button { font-weight: bold; }",
                            "button { text-style: bold; }",
                            "button { weight: bold; }"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Which property is used to add a border to an element?",
                        options: [
                            "border",
                            "border-line",
                            "outline",
                            "stroke"
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: "How do you make text bold in CSS?",
                        options: [
                            "font: bold;",
                            "text-weight: bold;",
                            "font-weight: bold;",
                            "style: bold;"
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: "Which CSS property is used to control the space between elements?",
                        options: [
                            "spacing",
                            "margin",
                            "padding",
                            "border"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "How do you center align text in CSS?",
                        options: [
                            "text-align: center;",
                            "align: center;",
                            "text: center;",
                            "font-align: center;"
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: "Which property changes the size of text?",
                        options: [
                            "text-size",
                            "font-style",
                            "text-style",
                            "font-size"
                        ],
                        correctAnswer: 3
                    }
                ]
            }
        };
        
        // Variables
        let currentQuiz = null;
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let quizStartTime = 0;
        let quizEndTime = 0;
        let timerInterval = null;
        let secondsElapsed = 0;
        let completedQuizzes = [];
        
        // DOM Elements
        const welcomeScreen = document.getElementById('welcome-screen');
        const quizContainer = document.getElementById('quiz-container');
        const resultsScreen = document.getElementById('results-screen');
        const reviewScreen = document.getElementById('review-screen');
        const quizTitle = document.getElementById('quiz-title');
        const questionCounter = document.getElementById('question-counter');
        const progressBar = document.getElementById('progress-bar');
        const questionText = document.getElementById('question-text');
        const codeSnippet = document.getElementById('code-snippet');
        const optionsContainer = document.getElementById('options-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const timerElement = document.getElementById('timer');
        
        // Start Quiz
        function startQuiz(quizType) {
            currentQuiz = quizType;
            currentQuestionIndex = 0;
            userAnswers = Array(quizData[quizType].questions.length).fill(null);
            
            // Hide welcome screen and show quiz container
            welcomeScreen.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            
            // Set quiz title
            quizTitle.textContent = quizData[quizType].title;
            
            // Start timer
            startTimer();
            quizStartTime = new Date();
            
            // Load first question
            loadQuestion();
        }
        
        // Load Question
        function loadQuestion() {
            const question = quizData[currentQuiz].questions[currentQuestionIndex];
            const totalQuestions = quizData[currentQuiz].questions.length;
            
            // Update question counter and progress bar
            questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
            progressBar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
            
            // Set question text
            questionText.textContent = question.question;
            
            // Clear options container
            optionsContainer.innerHTML = '';
            
            // Add options
            question.options.forEach((option, index) => {
                const optionBtn = document.createElement('button');
                optionBtn.className = `option-btn w-full text-left p-4 border rounded-lg ${userAnswers[currentQuestionIndex] === index ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'} hover:bg-blue-50 transition duration-200`;
                optionBtn.textContent = option;
                optionBtn.onclick = () => selectOption(index);
                optionsContainer.appendChild(optionBtn);
            });
            
            // Update navigation buttons
            prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
            nextBtn.textContent = currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next';
        }
        
        // Select Option
        function selectOption(optionIndex) {
            userAnswers[currentQuestionIndex] = optionIndex;
            
            // Update option styling
            const optionBtns = optionsContainer.querySelectorAll('.option-btn');
            optionBtns.forEach((btn, index) => {
                btn.className = `option-btn w-full text-left p-4 border rounded-lg ${index === optionIndex ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'} hover:bg-blue-50 transition duration-200`;
            });
        }
        
        // Navigate to Next Question
        document.getElementById('next-btn').addEventListener('click', () => {
            const totalQuestions = quizData[currentQuiz].questions.length;
            
            if (currentQuestionIndex === totalQuestions - 1) {
                finishQuiz();
            } else {
                currentQuestionIndex++;
                loadQuestion();
            }
        });
        
        // Navigate to Previous Question
        document.getElementById('prev-btn').addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
            }
        });
        
        // Start Timer
        function startTimer() {
            secondsElapsed = 0;
            timerElement.textContent = '00:00';
            
            timerInterval = setInterval(() => {
                secondsElapsed++;
                const minutes = Math.floor(secondsElapsed / 60);
                const seconds = secondsElapsed % 60;
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        }
        
        // Stop Timer
        function stopTimer() {
            clearInterval(timerInterval);
        }
        
        // Finish Quiz
        function finishQuiz() {
            // Stop timer
            stopTimer();
            quizEndTime = new Date();
            
            // Hide quiz container and show results screen
            quizContainer.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            
            // Calculate score
            const totalQuestions = quizData[currentQuiz].questions.length;
            let correctAnswers = 0;
            
            userAnswers.forEach((answer, index) => {
                if (answer === quizData[currentQuiz].questions[index].correctAnswer) {
                    correctAnswers++;
                }
            });
            
            const score = (correctAnswers / totalQuestions) * 100;
            const incorrectAnswers = totalQuestions - correctAnswers;
            const accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(1);
            
            // Update results screen
            document.getElementById('final-score').textContent = `${score}%`;
            document.getElementById('result-title').textContent = getResultTitle(score);
            document.getElementById('result-message').textContent = getResultMessage(score);
            document.getElementById('correct-answers').textContent = `${correctAnswers} / ${totalQuestions}`;
            document.getElementById('incorrect-answers').textContent = `${incorrectAnswers} / ${totalQuestions}`;
            
            // Calculate time taken
            const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000);
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            document.getElementById('time-taken').textContent = `${minutes}m ${seconds}s`;
            
            document.getElementById('accuracy').textContent = `${accuracy}%`;
            
            // Animate score circle
            const scoreCircleFill = document.getElementById('score-circle-fill');
            const circumference = 2 * Math.PI * 60;
            const offset = circumference - (score / 100) * circumference;
            scoreCircleFill.style.strokeDasharray = `${circumference} ${circumference}`;
            scoreCircleFill.style.strokeDashoffset = offset;
            
            // Update other quiz button
            const otherQuizBtn = document.getElementById('other-quiz-btn');
            if (currentQuiz === 'html') {
                otherQuizBtn.textContent = 'Take CSS Quiz';
                otherQuizBtn.onclick = () => startQuiz('css');
            } else {
                otherQuizBtn.textContent = 'Take HTML Quiz';
                otherQuizBtn.onclick = () => startQuiz('html');
            }
            
            // Add to completed quizzes
            completedQuizzes.push({
                type: currentQuiz,
                score: score,
                answers: [...userAnswers]
            });
        }
        
        // Get Result Title
        function getResultTitle(score) {
            if (score >= 90) return "Excellent!";
            if (score >= 70) return "Good Job!";
            if (score >= 50) return "Not Bad!";
            return "Keep Practicing!";
        }
        
        // Get Result Message
        function getResultMessage(score) {
            if (score >= 90) return "You have an excellent understanding of " + (currentQuiz === 'html' ? 'HTML' : 'CSS') + "!";
            if (score >= 70) return "You have a good grasp of " + (currentQuiz === 'html' ? 'HTML' : 'CSS') + " concepts.";
            if (score >= 50) return "You have a basic understanding of " + (currentQuiz === 'html' ? 'HTML' : 'CSS') + ". Keep learning!";
            return "You might need more practice with " + (currentQuiz === 'html' ? 'HTML' : 'CSS') + " concepts.";
        }
        
        // Review Quiz
        function reviewQuiz() {
            resultsScreen.classList.add('hidden');
            reviewScreen.classList.remove('hidden');
            
            const reviewContainer = document.getElementById('review-container');
            reviewContainer.innerHTML = '';
            
            const questions = quizData[currentQuiz].questions;
            
            questions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const correctAnswer = question.correctAnswer;
                const isCorrect = userAnswer === correctAnswer;
                
                const questionDiv = document.createElement('div');
                questionDiv.className = 'border rounded-lg p-6';
                
                // Question header
                const questionHeader = document.createElement('div');
                questionHeader.className = 'flex items-center mb-4';
                
                const questionNumber = document.createElement('span');
                questionNumber.className = `inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
                questionNumber.textContent = index + 1;
                
                const questionStatus = document.createElement('span');
                questionStatus.className = `text-sm font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`;
                questionStatus.textContent = isCorrect ? 'Correct' : 'Incorrect';
                
                questionHeader.appendChild(questionNumber);
                questionHeader.appendChild(questionStatus);
                
                // Question text
                const questionTextElement = document.createElement('h3');
                questionTextElement.className = 'text-lg font-medium text-gray-800 mb-3';
                questionTextElement.textContent = question.question;
                
                // Options
                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'space-y-2 mb-4';
                
                question.options.forEach((option, optIndex) => {
                    const optionDiv = document.createElement('div');
                    optionDiv.className = `p-3 rounded-lg ${optIndex === correctAnswer ? 'bg-green-100 border border-green-300' : optIndex === userAnswer ? 'bg-red-100 border border-red-300' : 'bg-gray-50 border border-gray-200'}`;
                    
                    const optionText = document.createElement('p');
                    optionText.className = 'text-gray-800';
                    optionText.textContent = option;
                    
                    optionDiv.appendChild(optionText);
                    optionsDiv.appendChild(optionDiv);
                });
                
                // Explanation
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'mt-4 p-4 bg-blue-50 rounded-lg';
                
                const explanationTitle = document.createElement('h4');
                explanationTitle.className = 'font-medium text-blue-800 mb-2';
                explanationTitle.textContent = 'Explanation';
                
                const explanationText = document.createElement('p');
                explanationText.className = 'text-blue-700';
                explanationText.textContent = `The correct answer is: ${question.options[correctAnswer]}`;
                
                explanationDiv.appendChild(explanationTitle);
                explanationDiv.appendChild(explanationText);
                
                // Append all elements
                questionDiv.appendChild(questionHeader);
                questionDiv.appendChild(questionTextElement);
                questionDiv.appendChild(optionsDiv);
                questionDiv.appendChild(explanationDiv);
                
                reviewContainer.appendChild(questionDiv);
            });
        }
        
        // Return to Results
        function returnToResults() {
            reviewScreen.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
        }
        
        // Return to Home
        function returnToHome() {
            resultsScreen.classList.add('hidden');
            reviewScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
        }
    