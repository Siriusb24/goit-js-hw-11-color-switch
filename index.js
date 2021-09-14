const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const body = document.querySelector('body')
const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)

function rundomColorBody(color){
    body.style.backgroundColor = color;
}

let randomInterval = undefined

function start(){
    randomInterval = setInterval(randomNumber => {
        randomNumber = randomIntegerFromInterval(0, 6);
        rundomColorBody(colors[randomNumber])
    }, 1000)
    stopBtn.removeAttribute('disabled')
    startBtn.setAttribute('disabled', true)
}

function stop(){
    clearInterval(randomInterval)
    startBtn.removeAttribute('disabled')
    stopBtn.setAttribute('disabled', true)
    body.style.backgroundColor = "#ffffff";
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };



