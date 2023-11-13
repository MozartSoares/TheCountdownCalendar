
AOS.init();
//setando as datas
const myBirthday = new Date("May 13, 2024 00:00:00");
const lolisBirthday = new Date("Jan 06, 2024 00:00:00");
const dadBirthday = new Date("Dec 05, 2023 00:00:00");
const momBirthday = new Date("Nov 14, 2023 00:00:00");
const weddingAnniversary = new Date("Dec 27, 2023 00:00:00");
const firstKiss = new Date("Oct 19, 2024 00:00:00");

//pegando tempo restante em ms até a data
const timeStampMeu = myBirthday.getTime();
const timeStampLolis = lolisBirthday.getTime();
const timeStampDad = dadBirthday.getTime();
const timeStampMom = momBirthday.getTime();
const timeStampWedding = weddingAnniversary.getTime();
const timeStampKiss = firstKiss.getTime();

const contaMeu = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaMeu = timeStampMeu - timeStampAtual;

    const diasMeu = Math.floor(distanciaMeu / (1000 * 60 * 60 * 24));
    const horasMeu = Math.floor((distanciaMeu % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosMeu = Math.floor((distanciaMeu % (1000 * 60 * 60)) / (1000 * 60))
    const segundosMeu = Math.floor((distanciaMeu % (1000 * 60)) / 1000)

    document.getElementById('contadorMeu').innerHTML = `${diasMeu} dias ${horasMeu} horas ${minutosMeu} min ${segundosMeu} seg`
    if (distanciaMeu < 0 ) {
        clearInterval(contaMeu);
        document.getElementById('contadorMeu').innerHTML = 'O Evento já passou';
    }
    console.log(segundosMeu)
}, 1000) 

const contaLolis = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaLolis = timeStampLolis - timeStampAtual;

    const diasLolis = Math.floor(distanciaLolis / (1000 * 60 * 60 * 24));
    const horasLolis = Math.floor((distanciaLolis % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosLolis = Math.floor((distanciaLolis % (1000 * 60 * 60)) / (1000 * 60))
    const segundosLolis = Math.floor((distanciaLolis % (1000 * 60)) / 1000)

    document.getElementById('contadorLolis').innerHTML = `${diasLolis} dias ${horasLolis} horas ${minutosLolis} min ${segundosLolis} seg`
    if (distanciaLolis < 0 ) {
        clearInterval(contaLolis);
        document.getElementById('contadorLolis').innerHTML = 'O Evento já passou';
    }
}, 1000)

const contaDad = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaDad = timeStampDad - timeStampAtual;

    const diasDad = Math.floor(distanciaDad / (1000 * 60 * 60 * 24));
    const horasDad = Math.floor((distanciaDad % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosDad = Math.floor((distanciaDad % (1000 * 60 * 60)) / (1000 * 60))
    const segundosDad = Math.floor((distanciaDad % (1000 * 60)) / 1000)

    document.getElementById('contadorDad').innerHTML = `${diasDad} dias ${horasDad} horas ${minutosDad} min ${segundosDad} seg`
    if (distanciaDad < 0 ) {
        clearInterval(contaDad);
        document.getElementById('contadorDad').innerHTML = 'O Evento já passou';
    }
}, 1000)

const contaMom = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaMom = timeStampMom - timeStampAtual;

    const diasMom  = Math.floor(distanciaMom  / (1000 * 60 * 60 * 24));
    const horasMom  = Math.floor((distanciaMom  % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosMom  = Math.floor((distanciaMom  % (1000 * 60 * 60)) / (1000 * 60))
    const segundosMom  = Math.floor((distanciaMom  % (1000 * 60)) / 1000)

    document.getElementById('contadorMom').innerHTML = `${diasMom} dias ${horasMom} horas ${minutosMom} min ${segundosMom} seg`
    if (distanciaMom < 0 ) {
        clearInterval(contaMom);
        document.getElementById('contadorMom').innerHTML = 'O Evento já passou';
    }
}, 1000)

const contaWedding = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaWedding = timeStampWedding - timeStampAtual;

    const diasWedding = Math.floor(distanciaWedding / (1000 * 60 * 60 * 24));
    const horasWedding = Math.floor((distanciaWedding % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosWedding = Math.floor((distanciaWedding % (1000 * 60 * 60)) / (1000 * 60))
    const segundosWedding = Math.floor((distanciaWedding % (1000 * 60)) / 1000)

    document.getElementById('contadorWedding').innerHTML = `${diasWedding} dias ${horasWedding} horas ${minutosWedding} min ${segundosWedding} seg`
    if (distanciaWedding < 0 ) {
        clearInterval(contaWedding);
        document.getElementById('contadorWedding').innerHTML = 'O Evento já passou';
    }
}, 1000)

const contaKiss= setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaKiss = timeStampKiss - timeStampAtual;

    const diasKiss = Math.floor(distanciaKiss / (1000 * 60 * 60 * 24));
    const horasKiss = Math.floor((distanciaKiss % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosKiss = Math.floor((distanciaKiss % (1000 * 60 * 60)) / (1000 * 60))
    const segundosKiss = Math.floor((distanciaKiss % (1000 * 60)) / 1000)

    document.getElementById('contadorKiss').innerHTML = `${diasKiss} dias ${horasKiss} horas ${minutosKiss} min ${segundosKiss} seg`
    if (distanciaKiss < 0 ) {
        clearInterval(contaKiss);
        document.getElementById('contadorKiss').innerHTML = 'O Evento já passou';
    }
}, 1000)
