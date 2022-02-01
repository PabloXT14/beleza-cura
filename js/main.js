const question_list = document.querySelector(".question_list");
const result_btn = document.querySelector(".result_btn");
const result_box = document.querySelector(".result_box");

const allStyles = [
    {
        id: 1,
        name: 'Esportivo',
        descript: {
            palavras_chave: 'lorem',
            mensagem: 'lorem',
            profissao: 'lorem',
            design: 'lorem',
            cores: 'lorem',
            maquiagem: 'lorem',
            cabelo: 'lorem',
            acessorios: 'lorem'
        },
        exemplos: [
            './assets/images/esportivo_1.png',
        ]
    },
    {
        id: 2,
        name: 'Clásico',
        descript: {
            palavras_chave: 'lorem',
            mensagem: 'lorem',
            profissao: 'lorem',
            design: 'lorem',
            cores: 'lorem',
            maquiagem: 'lorem',
            cabelo: 'lorem',
            acessorios: 'lorem'
        },
        exemplos: [
            './assets/images/classico_1 - Kate Midletown.png'
        ]
    },
    {
        id: 7,
        name: 'Criativo',
        descript: {
            palavras_chave: 'lorem',
            mensagem: 'lorem',
            profissao: 'lorem',
            design: 'lorem',
            cores: 'lorem',
            maquiagem: 'lorem',
            cabelo: 'lorem',
            acessorios: 'lorem'
        },
        exemplos: [
            './assets/images/criativo_1 - lele burnier.png'
        ]
    }
]

let answers = [];
let mainStyles = {
    style1: null,
    style2: null,
    style3: null,
};

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

    // Check selected option
    const option = question_list.querySelectorAll(".option input")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

function loadOptions(arrayOptions, idQuestion) {
    let options = '';
    arrayOptions.forEach((option, index) => {

        options += `
        <label for="question_${idQuestion}-option_${index + 1}" class="option">
            <input type="radio" 
                id="question_${idQuestion}-option_${index + 1}" 
                name="question-${idQuestion}" 
                value=${index + 1}
            >
            ${option}
        </label>
        `;

    })
    return options;
}

function optionSelected(optionElement) {

    // Removendo Checked das outras opções
    const option = optionElement.parentElement;
    const options = option.parentElement.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    }

    //Adicionando style na opção selecionada
    optionElement.parentElement.classList.add('selected');

    //Checando se já respondeu todas as perguntas
    checkAllQuestions();
}

function checkAllQuestions() {
    const optionsChecked = question_list.querySelectorAll(".selected");
    const inputsChecked = question_list.querySelectorAll(".selected input");

    // console.log(optionsChecked);
    if (optionsChecked.length === questions.length) {
        result_btn.classList.add('show');

        // Anotando todas as respostas
        answers = [];
        inputsChecked.forEach((input) => {
            answers.push(Number(input.value));
        });

        console.log(answers);
        console.log(checkingMainStyles(answers));

    }
}

// funcao para checar os principais estilos
function checkingMainStyles(arrAnswers) {
    const countStyles = Object.create(null);

    // Contanto a quantidade que cada opção apareceu
    for (const element of arrAnswers) {
        // Basicamente, estamos dizendo: atribua à `countMap[element]` o valor
        // atual (ou zero, caso não existir) somado ao número 1.
        countStyles[element] = (countStyles[element] || 0) + 1;
    }

    console.log(countStyles);

    // Definindo os 3 principais estilos  
    mainStyles = {
        style1: null,
        style2: null,
        style3: null,
    };
    let qntStyle1 = 0;
    let qntStyle2 = 0;
    let qntStyle3 = 0;

    for (const style in countStyles) {
        if (countStyles[style] >= qntStyle1) {
            qntStyle3 = qntStyle2;
            qntStyle2 = qntStyle1;
            qntStyle1 = countStyles[style];

            mainStyles.style3 = mainStyles.style2;
            mainStyles.style2 = mainStyles.style1;
            mainStyles.style1 = style;

        } else if (countStyles[style] >= qntStyle2) {
            qntStyle3 = qntStyle2;
            qntStyle2 = countStyles[style];

            mainStyles.style3 = mainStyles.style2;
            mainStyles.style2 = style;

        } else if (countStyles[style] > qntStyle3) {
            qntStyle3 = countStyles[style];

            mainStyles.style3 = style;
        }
    }

    return mainStyles;

}


//função seta a descrição estilos mais votados 
function setDescriptionMainStyles() {
    let tagContentsStyles = '';

    for (const style of allStyles) {
        if (style.id === Number(mainStyles.style1) ||
            style.id === Number(mainStyles.style2) ||
            style.id === Number(mainStyles.style3)) {
            tagContentsStyles += `
                <div class="style_box">
                    <h4>${style.name}</h4>
                    <div class="description_result">
                        <div>
                            <strong>Palavras Chave: </strong>
                            <span>${style.descript.palavras_chave}</span>
                        </div>
                        <div>
                            <strong>Mensagem: </strong>
                            <span>${style.descript.mensagem}</span>
                        </div>
                        <div>
                            <strong>Profissão: </strong>
                            <span>${style.descript.profissao}</span>
                        </div>
                        <div>
                            <strong>Design: </strong>
                            <span>${style.descript.design}</span>
                        </div>
                        <div>
                            <strong>Cores: </strong>
                            <span>${style.descript.cores}</span>
                        </div>
                        <div>
                            <strong>Maquiagem: </strong>
                            <span>${style.descript.maquiagem}</span>
                        </div>
                        <div>
                            <strong>Cabelo: </strong>
                            <span>${style.descript.cabelo}</span>
                        </div>
                        <div>
                            <strong>Acessórios: </strong>
                            <span>${style.descript.acessorios}</span>
                        </div>
                    </div>
                    <div class="images_result">
                        ${loadImagesStyle(style.exemplos, style.name)}
                    </div>
                </div>
            `;
        }
    }

    return tagContentsStyles;
}

// função para carregar imagens dos estilos mais votados
function loadImagesStyle(arrImages, nameStyle) {
    let imagens = '';
    arrImages.forEach((image) => {
        imagens += `
        <img src="${image}" alt="imagem do estilo ${nameStyle}">
        `;

    });

    return imagens;
}


/* ===== Settings Modal ===== */

result_btn.addEventListener('click', (event) => {
    result_box.querySelector('.container .contents').innerHTML = setDescriptionMainStyles();
    result_box.classList.add('show');
});


result_box.addEventListener('click', (event) => {
    let modal = result_box.querySelector('.container');

    if (!modal.contains(event.target)) {
        result_box.classList.remove('show');
    }
});

