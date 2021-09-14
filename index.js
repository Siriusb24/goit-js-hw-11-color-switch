const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const bodyOfSite = document.querySelector('body');
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

function changeColor(color){
    bodyOfSite.style.backgroundColor = color;
}

let randomInterval = undefined;

function start(){
    randomInterval = setInterval(randomNumber =>{
        randomNumber = randomIntegerFromInterval(0, 6);
        changeColor(colors[randomNumber]);
    }, 1000);
    startButton.setAttribute('disabled', true);
    stopButton.removeAttribute('disabled');
}

function stop(){
    clearInterval(randomInterval);
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', true);
    changeColor('white')
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



