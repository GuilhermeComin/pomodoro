// Funções botões trabalho
function increaseWork() {
    let workValue = document.getElementById('data-work').value
    if (workValue < 999) {
        document.getElementById('data-work').value = parseInt(workValue) + 1
    }
}
function decreaseWork() {
    let workValue = document.getElementById('data-work').value
    if (workValue > 1) {
        document.getElementById('data-work').value = parseInt(workValue) - 1
    }
}

// Funções botões pausa
function increaseRest() {
    let restValue = document.getElementById('data-rest').value
    if (restValue < 999) {
        document.getElementById('data-rest').value = parseInt(restValue) + 1
    }
}
function decreaseRest() {
    let restValue = document.getElementById('data-rest').value
    if (restValue > 1) {
        document.getElementById('data-rest').value = parseInt(restValue) - 1
    }
}

// Funções botões sessão
function increaseSession() {
    let sessionValue = document.getElementById('data-session').value
    if (sessionValue < 999) {
        document.getElementById('data-session').value = parseInt(sessionValue) + 1
    }
}
function decreaseSession() {
    let sessionValue = document.getElementById('data-session').value
    if (sessionValue > 1) {
        document.getElementById('data-session').value = parseInt(sessionValue) - 1
    }
}

function checkValue(valor, id){
    if (valor < 0) {
        document.getElementById(`${id}`).value = 1 
    }
    if (valor > 999) {
        document.getElementById(`${id}`).value = 999 
    }
}

let minutosInicio = 0
let pausaInicio = 0
let sessoesInicio = 0
let tempo = 0

function setValues() {
    let workValue = document.getElementById('data-work').value
    let restValue = document.getElementById('data-rest').value
    let sessionValue = document.getElementById('data-session').value

    document.querySelector('[data-minutes]').innerHTML = workValue + ':00'
    document.querySelector('[data-pausa]').innerHTML = restValue
    document.querySelector('[data-sessoes]').innerHTML = sessionValue
    minutosInicio = parseInt(document.querySelector('[data-minutes]').innerText)
    console.log("~ minutosInicio", minutosInicio)
    pausaInicio = parseInt(document.querySelector('[data-pausa]').innerText)
    console.log("~ pausaInicio", pausaInicio)
    sessoesInicio = parseInt(document.querySelector('[data-sessoes]').innerText)
    console.log("~ sessoesInicio", sessoesInicio)
    tempo = minutosInicio * 60
}

setValues();

// CONTADOR

const tempoPausa = pausaInicio
const quantidadeSessoes = sessoesInicio * 2

const contador = document.querySelector('[data-minutes]')
const botaoPause = document.getElementById('stop-button')
const botaoInicia = document.getElementById('play-button')
const status = document.querySelector('[data-info]')
const borda = document.querySelector('[data-contador]')
const audio = new Audio("C:/webpages/pomodoro/assests/som.mp3");

const count = () => {
    let minutos = Math.floor(tempo / 60)
    let segundos = tempo % 60

    if (segundos == 0 || segundos < 10) {
        segundos = '0' + segundos
    }

    contador.innerHTML = `${minutos}:${segundos}`

    if (tempo > 0) {
        tempo--
    } else {
        if (status.innerText.toLowerCase() == 'trabalho') {
            status.innerText = 'Pausa'
            status.classList.add('yellow')
            borda.classList.add('border-yellow')
            audio.play();
            tempo = tempoPausa * 60;
            minutos = Math.floor(tempo / 60)
            segundos = tempo % 60
            if (segundos == 0 || segundos < 10) {
                segundos = '0' + segundos
            }
            contador.innerHTML = `${minutos}:${segundos}`
            clearInterval(contagem);
            botaoPause.classList.add('hide')
            botaoInicia.classList.remove('hide')
        } else {
            status.innerText = 'Trabalho'
            status.classList.remove('yellow')
            borda.classList.remove('border-yellow')
            audio.play();
            tempo = minutosInicio * 60;
            minutos = Math.floor(tempo / 60)
            segundos = tempo % 60
            if (segundos == 0 || segundos < 10) {
                segundos = '0' + segundos
            }
            contador.innerHTML = `${minutos}:${segundos}`
            clearInterval(contagem);
            botaoPause.classList.add('hide')
            botaoInicia.classList.remove('hide')
        }
    }
}

let contagem

function startCount() {
    contagem = setInterval(count, 1000)
    botaoPause.classList.remove('hide')
    botaoInicia.classList.add('hide')
}

function stopCount() {
    clearInterval(contagem);
    botaoPause.classList.add('hide')
    botaoInicia.classList.remove('hide')
}