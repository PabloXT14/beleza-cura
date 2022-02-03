const question_list = document.querySelector(".question_list");
const result_btn = document.querySelector(".result_btn");
const result_box = document.querySelector(".result_box");

const allStyles = [
    {
        id: 1,
        name: 'Esportivo',
        icon: '<i class="fas fa-futbol"></i>',
        descript: {
            palavras_chave: ' Conforto, praticidade.',
            mensagem: 'Amigável, jovem despretensiosa, alegre, econômica.',
            profissao: 'Paisagismo, engenharia, fotografia, vendas, professora. ',
            design: 'Linhas simples, camadas, roupas folgadas e confortáveis, fácil manutenção.',
            cores: 'Marinho, khaki, tons terra, cores primárias, look com 3 ou 4 cores.',
            maquiagem: ' Natural.',
            cabelo: ': Cortes mensais, cortes que não necessitam arrumar.',
            acessorios: 'Poucos e simples em madeira, couro, cordas.'
        },
        exemplos: [
            './assets/images/esportivo_1.png',
            './assets/images/esportivo_2 - Alessandra Ambrosio.png'
        ]
    },
    {
        id: 2,
        name: 'Clásico',
        icon: '<i class="far fa-clock"></i>',
        descript: {
            palavras_chave: 'Funcionalidade, discrição.',
            mensagem: 'Conservadora, autoridade, reservada, respeito.',
            profissao: ': Financeiro, educação, governo, advogados.',
            design: 'Roupas fechadas, linhas estruturadas, roupas funcionais, peças atemporais.',
            cores: ' Marinho, cinza e bege, vinho, azul, verde escuro, 2 e 3 cores num look.',
            maquiagem: 'Usa a mesma rotina, não experimenta novidades.',
            cabelo: 'Mantém o mesmo corte de cabelo.',
            acessorios: 'Usa joias tradicionais e adora lenços.'
        },
        exemplos: [
            './assets/images/classico_1 - Kate Midletown.png',
            './assets/images/classico_2 - Mary Orton.png'
        ]
    },
    {
        id: 3,
        name: 'Contemporâneo',
        icon: '<i class="fas fa-glass-cheers"></i>',
        descript: {
            palavras_chave: 'Urbana, chique.',
            mensagem: 'Refinamento e bem-sucedida, segura e culta.',
            profissao: 'Diplomata, telejornalista, digital influencer.',
            design: 'Linhas simples, coordenáveis que permitem acessórios, impecável, médio estruturado, formal, linhas simples, segue tendências que não são as da moda.',
            cores: ' Creme, bege, cinza, preto, marinho, charuto, usa tom sobre tom (monocromáticos). ',
            maquiagem: 'Usa maquiagem suave e perfeita, a noite carrega mais nos olhos.',
            cabelo: 'São bem cuidados e cortados regularmente, tem aspecto natural. ',
            acessorios: 'Peças com design, bolsas e sapatos de alta qualidade.'
        },
        exemplos: [
            './assets/images/contemporaneo_1 - olivia palermo.png',
            './assets/images/contemporaneo_2 - Pamela Barja.png'
        ]
    },
    {
        id: 4,
        name: 'Romântico',
        icon: '<i class="far fa-grin-hearts"></i>',
        descript: {
            palavras_chave: 'Enfeitar-se.',
            mensagem: 'Leve e romântica, compreensiva, doce, gentil e graciosa. ',
            profissao: 'Conselheira, trabalho com crianças, terapêutica, gastronomia. ',
            design: 'Suave, linhas curvas, levemente acinturado, detalhes.',
            cores: 'Pastéis, combinação monocromáticas e analógicas.',
            maquiagem: 'Sempre usa maquiagem.',
            cabelo: 'Normalmente longos, com reflexos e acessórios.',
            acessorios: ' Sempre de saltos, adora flor e bolsas com detalhes, lacinho.'
        },
        exemplos: [
            './assets/images/romantico_1 - mary orton.png',
            './assets/images/romantico_2 - julia berolzheiemer.png'
        ]
    },
    {
        id: 5,
        name: 'Sexy',
        icon: '<i class="fas fa-pepper-hot"></i>',
        descript: {
            palavras_chave: 'Mostrar o corpo',
            mensagem: 'Sexy, glamourosa, desejável, cultua o corpo.',
            profissao: ' Dançarina, hostess, professora de ginástica, representante de maquiagem, modelo, cantora.',
            design: 'Marcando ou mostrando o corpo (decote, fenda, transparência).',
            cores: 'Preto, branco, rosa forte, turquesa, dourado, verde esmeralda, vermelho.',
            maquiagem: 'Sempre usa a mesma maquiagem, adorno com brilho.',
            cabelo: 'Em camadas, comprimento médio para longo.',
            acessorios: 'Com balanço e barulho.'
        },
        exemplos: [
            './assets/images/sexy_1 - Tassia Neves.png',
            './assets/images/sexy_2 - Naty Vozza.png'
        ]
    },
    {
        id: 6,
        name: 'Moderno',
        icon: '<i class="fas fa-user-tie"></i>',
        descript: {
            palavras_chave: 'Chamar a atenção, impactar.',
            mensagem: 'Fashionista, ultramoderna, sofisticada, poderosa, centro das atenções.',
            profissao: 'Propaganda, cosmetologia, marketing, moda, decoradora, consultora de imagem.',
            design: 'Liso, não clássico, angular, muito estruturado, metalizado, ponta, tecido tecnológico.',
            cores: ' Preto, branco, vermelho, magenta, roxo, safira, amarelo, 1 ou 2 cores no look.', maquiagem: 'Contrastante com a pele, baton vermelho, olhos com lápis e muito rímel.',
            cabelo: 'Cortes angulares.',
            acessorios: 'Geométricos, supergrandes e sofisticados, última moda.'
        },
        exemplos: [
            './assets/images/dramatico urbano_1 - vitoria beckham.png'
        ]
    },
    {
        id: 7,
        name: 'Criativo',
        icon: '<i class="far fa-lightbulb"></i>',
        descript: {
            palavras_chave: 'Original.',
            mensagem: 'Originalidade, independência, liberdade.',
            profissao: 'Atriz, arquiteta, dançarina, produtora de moda, consultora de imagem, artista plástica.',
            design: 'Mistura de clássico e não clássico, feminino e masculina, gosta de guardar coisas para futuras produções.',
            cores: 'Escuras, khaky, olivas, ferrugens, mostarda Maquiagem: Nos olhos ou boca uma cor diferente.',
            maquiagem: 'Nos olhos ou boca uma cor diferente.',
            cabelo: 'Cortes assimétricos, cores diferentes.',
            acessorios: 'Étnicos e vintage.'
        },
        exemplos: [
            './assets/images/criativo_1 - lele burnier.png',
            './assets/images/criativo_2 - blair eadiebee.png'
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
            <span>${option}</span>
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
                    <h4>
                        ${style.icon}
                        ${style.name}
                    </h4>
                    <div class="style_content">
                        <div class="description_result">
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Palavras Chave: </strong>
                                <span>${style.descript.palavras_chave}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Mensagem: </strong>
                                <span>${style.descript.mensagem}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Profissão: </strong>
                                <span>${style.descript.profissao}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Design: </strong>
                                <span>${style.descript.design}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Cores: </strong>
                                <span>${style.descript.cores}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Maquiagem: </strong>
                                <span>${style.descript.maquiagem}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Cabelo: </strong>
                                <span>${style.descript.cabelo}</span>
                            </div>
                            <div>
                                <i class="fas fa-fan"></i>
                                <strong>Acessórios: </strong>
                                <span>${style.descript.acessorios}</span>
                            </div>
                        </div>
                        <div class="swiper mySwiper carrosel">
                            <div class="swiper-wrapper content">
                                ${loadImagesStyle(style.exemplos, style.name)}
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
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
    arrImages.forEach((image, index) => {
        imagens += `
        <div class="swiper-slide card">
            <div class="card-content">
                <div class="image">
                    <img src="${image}" alt="imagem do estilo ${nameStyle}">
                </div>
            </div>
        </div>
        `;

    });

    return imagens;
}


/* ===== Settings Modal ===== */

result_btn.addEventListener('click', (event) => {
    result_box.querySelector('.container .contents').innerHTML = setDescriptionMainStyles();
    result_box.classList.add('show');

    //Carregando carrolsel
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});


result_box.addEventListener('click', (event) => {
    let modal = result_box.querySelector('.container');

    if (!modal.contains(event.target)) {
        result_box.classList.remove('show');
    }
});

