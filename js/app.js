// check-box

let skills = document.querySelectorAll('.skill');
let uploadItems = document.querySelector('.uploadItems')


skills.forEach((skill) => {

    skill.addEventListener('change', function(){
        
        let allData = document.querySelectorAll('.skill:checked');
        let skillArray = [];

        allData.forEach((data) => {
            skillArray.push(data.value);
        });
        
        let list = '';
        skillArray.map((data) => {
            list += `<li class="list-group-item">${data}</li>`;
        });
        uploadItems.innerHTML = list;

    });

});



// analog clock


const hours = document.querySelector('.hours');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');


setInterval(function(){

    let time = new Date();
    let currentHour = time.getHours();
    let currentMin = time.getMinutes();
    let currentSec = time.getSeconds();

    hours.style.transform = `rotate(${clockCal(currentHour, 12)}deg)`;
    minute.style.transform = `rotate(${clockCal(currentMin, 60)}deg)`;
    second.style.transform = `rotate(${clockCal(currentSec, 60)}deg)`;

}, 1000);


// ================================


const hours2 = document.querySelector('.hours2');
const minute2 = document.querySelector('.minute2');
const second2 = document.querySelector('.second2');


setInterval(function(){

    let time2 = new Date();
    let currentHour2 = time2.getHours();
    let currentMin2 = time2.getMinutes();
    let currentSec2 = time2.getSeconds();

    hours2.style.transform = `rotate(${clockCal(currentHour2, 12)}deg)`;
    minute2.style.transform = `rotate(${clockCal(currentMin2, 60)}deg)`;
    second2.style.transform = `rotate(${clockCal(currentSec2, 60)}deg)`;

}, 1000);



// calculator


const topScreen = document.querySelector('.topScreen');
const bottomScreen = document.querySelector('.bottomScreen');
let calculatorData = [];



