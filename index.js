const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const body = document.querySelector('body')
console.log('body')
const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };