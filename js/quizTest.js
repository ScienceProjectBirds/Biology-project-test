
let underline =document.querySelector('.temp_class')


underline.classList.add('teextt')


document.addEventListener('DOMContentLoaded', () => {
    let storedBackgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
    console.log(storedBackgroundColor); // Check if the color is retrieved correctly


        let quizzz = document.querySelector('.quiz');
        quizzz.style.background = `linear-gradient(${storedBackgroundColor}, black)`


});


let questions  = [

    {
        question: 'Зачем тропическим птицам <span class="Beak" style="color: white">Клюв</span>?',

       answers: [
           {text: 'Для копирования человеческой речи', correct: false},
           {text: 'Терморегуляция', correct: true},
           {text: 'Для увеличения скорости полета', correct: false},
           {text: 'Для того, чтобы лучше слышать звуки', correct: false},

       ]
    },
    {
        question: 'Зачем  птицам <span class="Beak" style="color: white">Клюв</span>?',

        answers: [
            {text: '5asgas', correct: false},
            {text: '6asgas', correct: false},
            {text: '7asgas', correct: false},
            {text: '8asgas', correct: true},

        ]
    },
    {
        question: 'lorem30asggasagsasga',

        answers: [
            {text: '9asgas', correct: false},
            {text: '10asgas', correct: true},
            {text: '11asgas', correct: false},
            {text: '12asgas', correct: false},

        ]
    },
    {
        question: 'lorem40asggasagsasga',

        answers: [
            {text: '13asgas', correct: true},
            {text: '14asgas', correct: false},
            {text: '15asgas', correct: false},
            {text: '16asgas', correct: false},

        ]
    },
]
let quizzz = document.querySelector('.quiz')
quizzz.style.backgroundColor
let questionsElement = document.getElementById('question')
let answersButtons = document.getElementById('answer-buttons')
let nextBtn = document.getElementById('next-btn')


let currentQuestionIndex = 0 // будет понимать на каком мы вопросе по номеру вопроса поможет для вставление нужных вопросов
let score = 0 // добавляем баллы


function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextBtn.style.display = 'block'
    nextBtn.innerHTML = 'Следующий вопрос'

    showQuizQuestions()
}


function showQuizQuestions() {
resetQuest() // функция для ресета прошлого вопроса
    let currentQuestion = questions[currentQuestionIndex] // for determine which question
    let questionNo = currentQuestionIndex + 1 // определяем номер вопроса
    questionsElement.innerHTML = questionNo + '. ' + currentQuestion.question // вставляем в поле с вопросом номер вопроса и сам вопрос

    currentQuestion.answers.forEach((answer, ) => {
        let button = document.createElement('button') // каждые раз при показываинии вопросов мы создаем кнопку
        button.classList.add('btn') /// присваеваем класс бтн
        button.innerHTML = answer.text // добавляем каждый текст из объекта
        answersButtons.appendChild(button) // добавляем на страницу за место бэссик кнопок

        if (answer.correct === true) {
            button.dataset.correct =answer.correct

        }
        button.addEventListener( 'click', selectedBtn ) // добавляе функцию как кликаем на кнопку при которой проверяется ответ верно или нет
        })


}

function resetQuest() {
    nextBtn.style.display = 'none' // пока не дадим ответ кнопки нет
    while (answersButtons.firstChild) { // удаляем кнопки
        answersButtons.removeChild(answersButtons.firstChild) // ЧТО БЫ ИХ ПОМЕНЯТЬ НА СЛЕД ВОПРОС
    }
}
function selectedBtn(event)  {

    let isCor =     event.target
    let isRight = isCor.dataset.correct === 'true' // проверяем если прототип коррект в елементе объекта есди да то значит мы ответили верно
    if (isRight) {
    isCor.classList.add('correct') // ставим класс для правильного ответа
        score++
    } else  {
        isCor.classList.add('wrong') // ставим класс для НЕправильного ответа
    }
Array.from(answersButtons.children).forEach((button) => { // из всех подклассов баатонсов
    // мы с каждым проверяем верные датасет который мы установили
    if (button.dataset.correct === true) {
        button.classList.add('correct') // append the clas
        score++
    }

    button.disabled = true // после нажатия вырубаем все чтоюы было нельзя нажать
    button.style.cursor = 'no-drop'

})
    nextBtn.style.display = 'block' // показваем кнопку для след вопроса

}

nextBtn.addEventListener('click',() => { // ЕСЛИ КОГДА КЛИКАЕМ ДЛЯ СЛЕД ВОПРОСА
    if (currentQuestionIndex < questions.length) { // ИНДЕКС ИЛИ НОМЕР ВОПРОС МЕНЬШИ ЧЕМ ВСЕГО ВОПРОСОВ ТОГДА ЗНАЧИТ ОНИ ЕЩЕ ЕСТЬ
        NextQuestionDisplay() // ДЕЛАЕМ функцию для перекидывания на новый СЛЕД ВОПРОС
    } else { // ЕСЛИ ЭТО БЫЛ ПОСЛЕДНИЙ ТОГДА НАЧИНАЕМ ЗАНОВО
        startQuiz()
    }
})

function NextQuestionDisplay() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) { // ИНДЕКС ИЛИ НОМЕР ВОПРОС МЕНЬШИ ЧЕМ ВСЕГО ВОПРОСОВ ТОГДА ЗНАЧИТ ОНИ ЕЩЕ ЕСТЬ
        showQuizQuestions() // тогда новый вопрос
    } else {
        showScorik() // показать очки
    }
}


function showScorik() {
    resetQuest()
    questionsElement.innerHTML = `У тебя ${score} баллов из ${questions.length}`
    let prep =  document.querySelector('.pooo')
    if (score < 3 && score > 0) {

    prep.style.display  = 'block'
        questionsElement.innerHTML = `У тебя ${score} баллов из ${questions.length} 😐 `
    } else if (score === 3  ) {
        questionsElement.innerHTML = `У тебя ${score} баллов из ${questions.length} 😉😉😉 `
    }

    else  if (score === 4) {
        questionsElement.innerHTML = `У тебя ${score} баллов из ${questions.length} 🧨🧨🧨🧨`
    } else if (score === 0) {
        questionsElement.innerHTML = `У тебя ${score} баллов из ${questions.length} Очень плохо...`
    }
   let againButton  = document.getElementById('again-btn')
    let DasHome = document.querySelector('.DasHouse')
    DasHome.style.display = 'block'
    againButton.style.display = 'block'
    againButton.innerHTML = 'Пройти снова?'
    againButton.addEventListener( 'click',() => {
        startQuiz()
        prep.style.display  = 'none'
        againButton.style.display = 'none'
        DasHome.style.display = 'none'
    })

}



startQuiz()