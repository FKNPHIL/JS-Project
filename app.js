const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionPicture = document.getElementById('questionpicture')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
        }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
    questionPicture.src = question.images
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
{
question: 'What is the name of the game Chandler made up when he wanted to give joey money?',
answers: [
{ text: 'Foosball', correct: false },
{ text: 'Cups', correct: true },
{ text: 'Flip a Coin', correct: false },
{ text: 'Bamboozle', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What is the name of the girl who gave birth to Monica and Chandler's twins?",
answers: [
{ text: 'Mona', correct: false },
{ text: 'Erika', correct: true },
{ text: 'Enika', correct: false },
{ text: 'Angelina', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What is Joey's favorite food?",
answers: [
{ text: 'Pizza', correct: false },
{ text: 'Macaroni', correct: false },
{ text: 'Sandwiches', correct: true },
{ text: 'Potatoes', correct: false }
],
images: "../images/Q1.png"
},
{
question: "Where does Phoebe's real mother live?",
answers: [
{ text: 'Upstate New York', correct: false },
{ text: 'New York City', correct: true },
{ text: 'Montauk', correct: false },
{ text: 'Pennsylvania', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What does Rachel get a tattoo of?",
answers: [
{ text: 'Whole World', correct: false },
{ text: 'A Guitar', correct: false },
{ text: 'A Heart', correct: true },
{ text: 'A Ring', correct: false }
],
images: "../images/Q1.png"
},
{
question: "Janice's ex-husband sells what thing?",
answers: [
{ text: 'Mattresses', correct: true },
{ text: 'Cars', correct: false },
{ text: 'Children Toys', correct: false },
{ text: 'Computers', correct: false }
],
images: "../images/Q1.png"
},
{
question: "Monica's old boyfriend Richard had the job of?",
answers: [
{ text: 'Podiatrist', correct: false },
{ text: 'Dentist', correct: false },
{ text: 'Gynecologist', correct: false },
{ text: 'Ophthamologist', correct: true }
],
images: "../images/Q1.png"
},
{
question: 'Chandler had a crazy roommate, what is his name?',
answers: [
{ text: 'Marcus', correct: false },
{ text: 'Steve', correct: false },
{ text: 'Eddie', correct: true },
{ text: 'Teddie', correct: false }
],
images: "../images/Q1.png"
},
{
question: 'What is the name of the song that made Emma laugh?',
answers: [
{ text: 'Where everybody knows your name', correct: false },
{ text: 'Baby got Back', correct: true },
{ text: "Stacy's Mom", correct: false },
{ text: 'Anaconda', correct: false }
],
images: "../images/Q1.png"
},
{
question: 'Which of the following Friends character introduced Phoebe and Mike?',
answers: [
{ text: 'Chandler', correct: false },
{ text: 'Gunther', correct: false },
{ text: 'Joey', correct: true },
{ text: 'Monica', correct: false }
],
images: "../images/Q1.png"
},
{
question: "In season one, what did Ross buy for Rachel's birthday gift?",
answers: [
{ text: 'Brooch', correct: true },
{ text: 'Earrings', correct: false },
{ text: 'Sweater', correct: false },
{ text: 'Necklace', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What is the name of Ross's monkey pet?",
answers: [
{ text: 'Marcelo', correct: false },
{ text: 'Marcel', correct: true },
{ text: 'Arcel', correct: false },
{ text: 'Marcus', correct: false }
],
images: "../images/Q1.png"
},
{
question: 'What is the name of the show Joey and Chandler loved watching?',
answers: [
{ text: 'Wheel of Fortune', correct: false },
{ text: 'Days of our Lives', correct: false },
{ text: 'Baywatch', correct: true },
{ text: 'Jeopardy', correct: false }
],
images: "../images/Q1.png"
},
{
question: 'In which city does Friends take place?',
answers: [
{ text: 'Chicago', correct: false },
{ text: 'New York City', correct: true },
{ text: 'Brooklyn', correct: false },
{ text: 'Los Angeles', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What is Joey's catchphrase to girls?",
answers: [
{ text: 'How are you doing?', correct: false },
{ text: "What's up", correct: false },
{ text: 'How you doin', correct: true },
{ text: 'How ya doing', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What are the names of Phoebe's triplets?",
answers: [
{ text: 'Frank jr.jr-Molly-Chandler', correct: false },
{ text: 'Frank jr.jr-Leslie jr-Chandler', correct: true },
{ text: 'Frank jr-Jasmine-Joey', correct: false },
{ text: 'Fret jr.jr-Jessica-Joey', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What is Phoebe's surname?",
answers: [
{ text: 'Buffay', correct: true },
{ text: 'Buffe', correct: false },
{ text: 'Bufay', correct: false },
{ text: 'Buffey', correct: false }
],
images: "../images/Q1.png"
},
{
question: "What was the name of Joey's brown chair?",
answers: [
{ text: 'Sundee', correct: false },
{ text: 'Rosita', correct: true },
{ text: 'Roselita', correct: false },
{ text: 'Elsa', correct: false }
],
images: "../images/Q1.png"
},
{
question: 'How many types of towels does Monica have?',
answers: [
{ text: '10', correct: false },
{ text: '9', correct: false },
{ text: '11', correct: true },
{ text: '12', correct: false }
],
images: "../images/Q1.png"
},
{
question: 'What kind of plastic surgery does Rachel have when she was a teenager?',
answers: [
{ text: 'Nose Job', correct: true },
{ text: 'Butt Lift', correct: false },
{ text: 'Tummy Tuck', correct: false },
{ text: 'Breast Implants', correct: false }
],
images: "../images/Q1.png"
},
]