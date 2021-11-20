var imported = document.createElement('script');
imported.src = './_imgs.js';
document.head.appendChild(imported); 

window.onload = function() {
    const t = 2000
    $(".controls").hide().slideDown(t)
    $(".decorationIcon").hide().fadeTo(3000, 1)
    $(".resultFinal").hide()
}

const container = document.getElementById('container')
const typewriter = document.getElementById('typewriter')
const startButton = document.getElementById('start-btn')
const scoreboard = document.getElementById('scoreboard-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const imgElement = document.getElementById('imgQuestion')
const answerButtonElement = document.getElementById('answer-buttons')
const resultFinal = document.getElementById('resultFinal')

// Embaralhar perguntas
let shuffledQuestions, currentQuestionIndex
let correctQuestion, wrongQuestion

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

$("#start-btn").click(function () {
    setTimeout  
    $("#question-container").hide().show(500)
})

$("#next-btn").click(function () {
    $("#question-container").hide().show(500)
})

function startGame() {
    startButton.classList.add('hide')
    typewriter.classList.add('hide')
    scoreboard.classList.add('hide')
    container.classList.add('background')
    question.classList.remove('d-none')
    $(".resultFinal").hide(200)
    $(".question-correct").show()

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 1;
    correctQuestion = 0;
    wrongQuestion = 0;

    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    // document.querySelector('#question-counter').innerHTML = `Questão ${currentQuestionIndex}`
    document.querySelector('.question-correct').innerHTML = `<div class="divCorrectQuestion">
                                                                <div class="counterQuestion">${currentQuestionIndex}</div>
                                                                <p class="labelCounterQuestion">Questão</p>

                                                                <div class="scoreCorrectQuestion">${correctQuestion}</div>
                                                                <p class="labelCorrectQuestion">Acertos</p> 
                                                            </div> `
    // document.querySelector('#question-wrong').innerHTML = `Erros ${wrongQuestion}`
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1 && currentQuestionIndex <= 9) {
        nextButton.classList.remove('hide')

        if (correct) {
            correctQuestion++
        } else {
            wrongQuestion++
        }

    } else {
        setResultFinal();
    }
}

function setResultFinal(e) {
    startButton.innerText = 'Recomeçar'
        question.classList.add('d-none')
        $(".question-correct").hide()
        $(".resultFinal").slideDown(200)
        if (correctQuestion >= 2) {
            resultFinal.innerHTML = `Você acertou ${correctQuestion + 1} questões.`
        } else if (correctQuestion == 1) {
            resultFinal.innerHTML = `Você acertou ${correctQuestion} questão.`
        } else {
            
            lottieResultFinal.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                                            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_pyiyoyxf.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>`
            titleResultFinal.innerHTML = ''
            resultFinal.innerHTML = `Você não acertou nenhuma questão.`
        }

        startButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        element.classList.add('desabilitaEventos')
    } else {
        element.classList.add('wrong')
        element.classList.add('desabilitaEventos')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const imgQuestionA = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraA.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionB = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraB.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionC = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraC.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionD = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraD.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionE = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraE.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionF = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraF.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionG = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraG.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionH = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraH.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionI = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraI.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionJ = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraJ.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionK = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraK.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionL = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraL.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
const imgQuestionM = document.querySelector('#question').innerHTML = `<div class="imgQuestion mt-4"> <img src="img/letraM.png"/> <p class="mt-5">Escolha a letra que corresponde o sinal da imagem acima.</p> </div>`
// CONTINUAR 

const questions = [
    {
        question: imgQuestionA,
        answers: [
            { text: 'B', correct: false },
            { text: 'A', correct: true },
            { text: 'G', correct: false },
            { text: 'H', correct: false },
        ]
    },
    { 
        question: imgQuestionB,
        answers: [
            { text: 'J', correct: false },
            { text: 'M', correct: false },
            { text: 'N', correct: false },
            { text: 'B', correct: true },
        ]
    },
    { 
        question: imgQuestionC,
        answers: [
            { text: 'U', correct: false },
            { text: 'C', correct: true },
            { text: 'E', correct: false },
            { text: 'S', correct: false },
        ]
    },
    { 
        question: imgQuestionD,
        answers: [
            { text: 'D', correct: true },
            { text: 'I', correct: false },
            { text: 'L', correct: false },
            { text: 'T', correct: false },
        ]
    },
    { 
        question: imgQuestionE,
        answers: [
            { text: 'D', correct: false },
            { text: 'M', correct: false },
            { text: 'E', correct: true },
            { text: 'B', correct: false },
        ]
    },
    { 
        question: imgQuestionF,
        answers: [
            { text: 'V', correct: false },
            { text: 'L', correct: false },
            { text: 'R', correct: false },
            { text: 'F', correct: true },
        ]
    },
    { 
        question: imgQuestionG,
        answers: [
            { text: 'H', correct: false },
            { text: 'L', correct: false },
            { text: 'G', correct: true },
            { text: 'P', correct: false },
        ]
    },
    { 
        question: imgQuestionH,
        answers: [
            { text: 'N', correct: false },
            { text: 'W', correct: false },
            { text: 'V', correct: false },
            { text: 'H', correct: true },
        ]
    },
    { 
        question: imgQuestionI,
        answers: [
            { text: 'T', correct: false },
            { text: 'I', correct: true },
            { text: 'Y', correct: false },
            { text: 'Z', correct: false },
        ]
    },
    { 
        question: imgQuestionJ,
        answers: [
            { text: 'S', correct: false },
            { text: 'A', correct: false },
            { text: 'K', correct: false },
            { text: 'J', correct: true },
        ]
    },
    { 
        question: imgQuestionK,
        answers: [
            { text: 'K', correct: true },
            { text: 'V', correct: false },
            { text: 'D', correct: false },
            { text: 'R', correct: false },
        ]
    },
    { 
        question: imgQuestionL,
        answers: [
            { text: 'L', correct: true },
            { text: 'P', correct: false },
            { text: 'G', correct: false },
            { text: 'I', correct: false },
        ]
    },
    { 
        question: imgQuestionM,
        answers: [
            { text: 'N', correct: false },
            { text: 'T', correct: false },
            { text: 'S', correct: false },
            { text: 'M', correct: true },
        ]
    } // CONTINUAR
]

var i = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 150;

function typeWriter() {
    if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
    i++;
    setTimeout(typeWriter, speed);
    }
}

typeWriter();