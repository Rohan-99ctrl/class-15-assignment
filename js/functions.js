// analog clock function


let clockCal = (currentTime, clockCalVal) => {

    return (360 * currentTime) / clockCalVal;

}


// calculator function


let valueGet = (calData) => {

    calculatorData.push(calData);
    topScreen.innerHTML = calculatorData.join('');
    bottomScreen.innerHTML = '0';

}

let clearValue = () => {

    calculatorData.pop();
    topScreen.innerHTML = calculatorData.join('');

}

let allClear = () => {

    calculatorData = [];
    topScreen.innerHTML = '0';
    bottomScreen.innerHTML = '';

}


let finalRes = () => {

    let calString = calculatorData.join('');
    bottomScreen.innerHTML = eval(calString);

}



