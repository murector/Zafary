const Juan = document.querySelector('#Jose');
const Perico = document.querySelector('#Marcelo');
const Miranda = document.querySelector('#Matias');
const Paola = document.querySelector('#Milovan');
const Miriam = document.querySelector('#Victor');

const TexDinamico = document.querySelector('#texto-dinamico');
const contDinamicoMenu = document.querySelector('#contenido-dinamico-menu');



document.getElementById('contenido-dinamico-menu').src += '';
Jose.addEventListener('click', irJose);
Marcelo.addEventListener('click', irMarcelo);
Matias.addEventListener('click', irMatias);
Milovan.addEventListener('click', irMilovan);
Victor.addEventListener('click', irVictor);


function irJuan() {


    contDinamicoMenu.setAttribute('src', "https://static.t13.cl/images/sizes/1090x613/1417723764_joseluissierra.jpg");
    TexDinamico.innerHTML = 'Jose Luis Sierra';
    console.log("Prueba");
}

function irPerico() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/marcelo_salas.jpg");
    TexDinamico.innerHTML = 'Marcelo Salas';
}

function irMiranda() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/mati_fernandez.jpg");
    TexDinamico.innerHTML = 'Matias Fernandez';
}

function irPaola() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/milo_mirosevic.jpg");
    TexDinamico.innerHTML = 'Milovan Mirosevic';
}

function irMiriam() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/victor_cancino.jpg");
    TexDinamico.innerHTML = 'Victor Cancino';
}