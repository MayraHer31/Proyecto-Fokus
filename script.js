const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')


botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
/* 
Anterior: 
html.setAttribute('data-contexto','descanso-corto');
banner.setAttribute('src','./imagenes/descanso-corto.png') 
*/
});

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
});

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo')
});

function cambiarContexto(contexto){
    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src',`./imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
    }
}


