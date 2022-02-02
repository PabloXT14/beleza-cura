
const balls = document.querySelector('.balls');
const quant = document.querySelectorAll('.slides .image');
let atual = 0;
const imagem = document.querySelector('#atual');
const next = document.querySelector('#next');
const back = document.querySelector('#back');

// Criar balls
for (let i = 0; i < quant.length; i++) {
    let div = document.createElement('div');
    div.id = i;
    balls.appendChild(div);
}

balls.getElementById('0').classList.add('img_atual');

//Verificando posição de imagem no carrosel
let pos = document.querySelectorAll('.balls div');

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id;
        slide();
    })
}

back.addEventListener('click', () => {
    atual--;
    slide();
})
next.addEventListener('click', () => {
    atual++;
    slide();
})

// Função de realizar slide
function slide() {
    if (atual >= quant.length) {
        atual = 0;
    } else if (atual < 0) {
        atual = quant.length - 1;
    }
    document.querySelector('.img_atual').classList.remove('img_atual');
    imagem.style.marginLeft = 11.6 * atual + 'rem';
    document.querySelector('#atual').classList.add('img_atual');
}
slide();


