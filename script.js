// Funções botões trabalho
function increaseWork() {
    var workValue = document.getElementById('data-work').value
    if (workValue < 999) {
        document.getElementById('data-work').value = parseInt(workValue) + 1
    }
}
function decreaseWork() {
    var workValue = document.getElementById('data-work').value
    if (workValue > 1) {
        document.getElementById('data-work').value = parseInt(workValue) - 1
    }
}

// Funções botões pausa
function increaseRest() {
    var restValue = document.getElementById('data-rest').value
    if (restValue < 999) {
        document.getElementById('data-rest').value = parseInt(restValue) + 1
    }
}
function decreaseRest() {
    var restValue = document.getElementById('data-rest').value
    if (restValue > 1) {
        document.getElementById('data-rest').value = parseInt(restValue) - 1
    }
}

// Funções botões sessão
function increaseSession() {
    var sessionValue = document.getElementById('data-session').value
    if (sessionValue < 999) {
        document.getElementById('data-session').value = parseInt(sessionValue) + 1
    }
}
function decreaseSession() {
    var sessionValue = document.getElementById('data-session').value
    if (sessionValue > 1) {
        document.getElementById('data-session').value = parseInt(sessionValue) - 1
    }
} 

function startCount() {
    let minutos = parseInt(document.querySelector('[data-minutes]').innerHTML)
    let segundos = parseInt(document.querySelector('[data-seconds]').innerHTML)
    setInterval(() => {
        while (minutos > 0) {
            if (segundos == 0) {

            }
        } 
    }, 1000);
}

// setInterval(() => {
//     i++;
//     console.log(i)
// }, 1000);