/*
console.log(5645454);
console.log("lalala");

//console.log(5+2);
//console.log(5*2);
//console.log(5/2);



//변수(Variables) 
const a=5;  //const(상수) : 생성 후 값이 바뀔 수 없다.
const b=2;
let myName="hayoung";  //let : 생성 후 값을 바꿀 수 있다. 재선언 X

console.log(a+b);
console.log(a*b);
console.log(a/b);

myName = "ha0";
console.log("my name is "+myName);

const amIFat=true;
console.log(amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";



//배열(Arrays)
//const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

//5번째 요일은 무엇인가? (인덱스는 0부터 시작!)
console.log(daysOfWeek[4]);

//배열에 요소 추가하기
daysOfWeek.push("sun");



//객체(Objects)
const playerName = "hy";
const playerPoints = 121212;
const playerFat = false;

//player.name
//player.points
//player.fat

//const player = ["hy", 121212, false];

const player = {
    //특성
    name : "hy",
    points : 20,
    fat:false,
};

console.log(player);
console.log(player.name);
player.name;



//함수(function)
//console.log("Hello my name is hy");
//console.log("Hello my name is mg");
//console.log("Hello my name is dy");
//console.log("Hello my name is mh");

function sayHello(nameOfPerson, age){
    console.log("Hello! My name is "+ nameOfPerson + "I'm "+age);
}

sayHello("hy", 27);
sayHello("mg", 26);
sayHello("dy", 14);
sayHello("mh", 35);

function plus(a, b){
    console.log(a + b);
}

plus(2,6);

function divide(a, b){
    console.log(a / b);
}

divide(80,20);

const player2 = {
    name : "Ryan",
    sayHello : function(otherPersonName){
        console.log("hello! " + otherPersonName + ", Nice to meet you~");
    }
};

player2.sayHello("hy");
player2.sayHello("mg");



///함수 계산기 실습
const calculator = {
    add: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    divide: function(a, b){
        return a/b;
    },
    multi: function(a, b){
        return a*b;
    },
    power: function(a, b){
        return a**b;
    }
}

calculator.add(56, 42);
calculator.minus(23-8);
calculator.divide(64,4);
calculator.multi(5,9);
calculator.power(2,6);

const plusResult = calculator.add(4, 8);
const minusResult = calculator.minus(plusResult,10);



//returns
//const age = 96;
//function calculateKrAge(ageOfForeigner){
//    ageOfForeigner + 2;
//}

//const krAge = calculateKrAge(age);



//Conditions
const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number.");
}else if(age < 18){
    console.log("You are too young.");
}else if(age >= 18 && age <= 50){
    console.log("You can drink.");
}else if(age > 50 && age <= 80){
    console.log("You should exercise.");
}else if(age === 100){
    console.log("Wow. you are wise.");
}else if(age > 80){
    console.log("You can do whatever you want.");
}



//자바스크립트로 HTML을 가져오는 방법

//const title = document.getElementById("title");
//title.innerText = "Got you!";

//const title = document.getElementsByTagName("h1");

const h1 = document.querySelector(".hello h1");
//const title = document.querySelectorAll(".hello h1");

console.log(h1);
h1.innerText = "Hello!";
*/

//Events
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    
    if(h1.className === clickedClass){
        h1.className = "";
    }else{
        h1.className = clickedClass;
    }
}

/*
function handleMouseEnter(){  
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){  
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!!");
}
function handelWindowOffline(){
    alert("SOS no WIFI");
}
function handelWindowOnline(){
    alert("ALL GOOOOD");   
}
*/

h1.addEventListener("click", handleTitleClick);

/*
//h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("online", handelWindowOnline);
*/