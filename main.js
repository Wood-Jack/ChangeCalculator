// Write your JavaScript here




//takes in user input


//calculates change


function calculateChange(moneyOwed,moneyGiven){
    
    let dollar= 1.00;
    let quarter= .25;
    let dime= .10;
    let nickel = .05;
    let penny = .01;
    

    let moneyBack = moneyOwed - moneyGiven;
    let dollarsBack = moneyBack / dollar;
    let quartersBack = moneyBack / quarter;
    let dimeBack = moneyBack / dime;
    let nickelBack = moneyBack / nickel;
    let pennyBack = moneyBack / penny;


    console.log("Here is the money owed back: " + moneyBack);
    document.getElementById('dollars-output').innerText = dollarsBack;
    document.getElementById('quarters-output').innerText = quartersBack;
    document.getElementById('dimes-output').innerText = dimeBack;
    document.getElementById('nickels-output').innerText = nickelBack;
    document.getElementById('pennies-output').innerText =  pennyBack;


}


// function handleClickEvent(e){

//     var moneyOwed = document.getElementById('amount-due').value;
//     var moneyGiven = document.getElementById('amount-received').value;
//     var result = calculateChange(moneyOwed, moneyGiven);
//     document.getElementById('dollars-output').innerText = 'Dollars: ' + result;

//  }
 