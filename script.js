// Funções botões trabalho
function increaseWork() {
    var workValue = document.getElementById('data-work').value
    document.getElementById('data-work').value = parseInt(workValue)+1
} 
function decreaseWork() {
    var workValue = document.getElementById('data-work').value
    document.getElementById('data-work').value = parseInt(workValue)-1
} 

// Funções botões pausa
function increaseRest() {
    var restValue = document.getElementById('data-rest').value
    document.getElementById('data-rest').value = parseInt(restValue)+1
} 
function decreaseRest() {
    var restValue = document.getElementById('data-rest').value
    document.getElementById('data-rest').value = parseInt(restValue)-1
} 

// Funções botões sessão
function increaseSession() {
    var sessionValue = document.getElementById('data-session').value
    document.getElementById('data-session').value = parseInt(sessionValue)+1
} 
function decreaseSession() {
    var sessionValue = document.getElementById('data-session').value
    document.getElementById('data-session').value = parseInt(sessionValue)-1
} 


// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify({
//     name: "Deska",
//     email: "deska@gmail.com",
//     phone: "342234553"
//  }));
// xhr.onload = function() {
//     var data = JSON.parse(this.responseText);
//     console.log(data);
// };