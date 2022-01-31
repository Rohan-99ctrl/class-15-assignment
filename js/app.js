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



// calculator




