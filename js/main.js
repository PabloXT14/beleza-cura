const question_list = document.querySelector(".question_list");



showQuestions();

function showQuestions() {
    let que_tags = ``;

    questions.forEach((currentQuestion, index) => {
        que_tags += `
        <div class="question" id=${currentQuestion.id}>
            <span class="question_description">
                ${currentQuestion.id}. ${currentQuestion.question}
            </span>
            <div class="options">
                ${loadOptions(currentQuestion.options, currentQuestion.id)}
            </div>

        </div>
        `;
    });

    question_list.innerHTML = que_tags;
}

function loadOptions(arrayOptions, idQuestion) {
    let options = '';
    arrayOptions.forEach((option, index) => {
        options += `
        <div class="option">
            <input type="radio" 
                id="que_${idQuestion}-option_${index}" 
                name="question-${idQuestion}" 
                value=${index}
            >
            <label for="que_${idQuestion}-option_${index}">${option}</label>
        </div>
        `;

    })
    return options;
}