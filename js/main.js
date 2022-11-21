document.addEventListener('DOMContentLoaded', ()=> {
    answerDisplay();
});


function answerDisplay() {
    let questions = document.querySelectorAll(".questions__content__block");
    questions.forEach(question => {
        question.addEventListener('click', () => {
            let answer = question.childNodes[3];
            answer.classList.toggle('hide');
        });
    });
}
