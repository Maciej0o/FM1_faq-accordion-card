const questions = document.querySelector('.info-container');
const answers = document.querySelectorAll('.answer');

questions.addEventListener('click', function (e) {
    console.log(e.target)
    let clickId = e.target.closest('.box-info').getAttribute('id');
    let newAnswer = `.answer-${clickId}`;
    let newQuestion = `.question-${clickId}`;

    document.querySelector(newAnswer).classList.toggle('show');
    document.querySelector(newQuestion).classList.toggle('click-question');
    document.querySelector(`#${clickId} img`).classList.toggle('rotate');
})
