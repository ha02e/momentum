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