//Part-1 BASIC CONSOLE LOG AND WINDOW ALERT:
    //console.log(`Hello`);
    //console.log(`I like pizza!`);
    //window.alert(`This is an alert`);
    //window.alert(`I like pizza`);
    // This is a comment
    //document.getElementById("myH1").textContent = `Hello`;
    //document.getElementById("myP").textContent = `I like pizza!`;

//Part-2  VARIABLES AND DATATYPES:
    //1. declaration    let x;
    //2. assignment     x = 100;

    //let age = 25;
    //let price = 10.99;
    //let gpa = 2.1;
    //let firstName = "Pratheek";
    //let favFood = "Ice-cream";
    //let online = false;

    //console.log(typeof online);
    //console.log(`First Name is ${firstName}`);
    //console.log(`You like ${favFood}`);
    //console.log(`Bro is online: ${online}`);
    //let fullName = "Pratheek Reddy"
    //document.getElementById("p1").textContent = `Your name is ${fullName}`;
    //document.getElementById("p2").textContent = `You are ${age} years old`;
    //document.getElementById("p3").textContent = favFood;

//Part-3: Arithmetic (+ - * /)
    //let students = 31;
    //students **= 2; 900
    //students = students%3;
    //console.log(students);

//PART-4: USER INPUT
//let username = window.prompt("Whats your username?");
//let username;
//document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

//PART-5: type conversion
//let age = window.prompt("How old are you");
//age = Number(age);
//age += 1;

//let x = "";
//let y = "";
//let z = "";

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);


//PART 6: constants
// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt('Enter radius of a circle');
// radius = Number(radius);

// circumference = 2*pi*radius;

// console.log(circumference);


//Part-7: Counter program
// const decreaseBtn = document.getElementById("decreaseBtn");
// const reserBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let cnt = 0;

// increaseBtn.onclick = function(){
//     cnt++;
//     countLabel.textContent = cnt;
// }

// decreaseBtn.onclick = function(){
//     cnt--;
//     countLabel.textContent = cnt;
// }

// resetBtn.onclick = function(){
//     cnt = 0;
//     countLabel.textContent = cnt;
// }


//Part-8 MATH:
//let min = 10;
//let max = 50;
//x = Math.floor(Math.random() * (max - min)) + min;
//console.log(x);

//PART-9: Conditionals
// let age = 61;
// if(age >= 18){ 
//     console.log(`You are eligible :)`);
// }
// else{
//     console.log(`You are not eligible :(`);
// }

//PART-10: check state

const visaBtn = document.getElementById("pay1");
const mcBtn = document.getElementById("pay2");
const rupayBtn = document.getElementById("pay3");
const submitBtn = document.getElementById("mySubmit");
const paymentRes = document.getElementById("payResult");

submitBtn.onclick = function(){
    if(visaBtn.checked){
        paymentRes.textContent = "You are paying through Visa";
    }
    if(mcBtn.checked){
        paymentRes.textContent = "You are paying through Mastercard";
    }
    if(rupayBtn.checked){
        paymentRes.textContent = "You are paying through Rupay";
    }
}