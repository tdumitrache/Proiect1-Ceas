let date = new Date();
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const h1 = document.querySelector('.h1');
const h2 = document.querySelector('.h2');

function loadDefaultSettings() {
    if(date.getHours() < 10) {
        hours.innerHTML = '0' + date.getHours();
    }
    else {
        hours.innerHTML = date.getHours();
    }
    if(date.getMinutes() < 10) {
        minutes.innerHTML = '0' + date.getMinutes();
    }
    else {
        minutes.innerHTML = date.getMinutes();
    }
    if(date.getSeconds() < 10) {
        seconds.innerHTML = '0' + date.getSeconds();
    }
    else {
        seconds.innerHTML = date.getSeconds();
    }
}

function countSeconds() {
    date = new Date();
    if(date.getHours() < 10) {
        hours.innerHTML = '0' + date.getHours();
    }
    else {
        hours.innerHTML = date.getHours();
    }
    if(date.getMinutes() < 10) {
        minutes.innerHTML = '0' + date.getMinutes();
    }
    else {
        minutes.innerHTML = date.getMinutes();
    }
    if(date.getSeconds() < 10) {
        seconds.innerHTML = '0' + date.getSeconds();
    }
    else {
        seconds.innerHTML = date.getSeconds();
    }
}

function visiblePoints() {
    h1.innerHTML = ':';
    h2.innerHTML = ':';
}

function unVisiblePoints() {
    h1.innerHTML = '';
    h2.innerHTML = '';
}

loadDefaultSettings();
setInterval(countSeconds, 1000);
setInterval(visiblePoints, 1000);
setInterval(unVisiblePoints, 2000);