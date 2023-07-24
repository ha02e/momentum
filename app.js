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
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    multi: function(a, b){
        console.log(a*b);
    }
}

calculator.add(56, 42);
calculator.minus(23-8);
calculator.divide(64,4);
calculator.multi(5,9);