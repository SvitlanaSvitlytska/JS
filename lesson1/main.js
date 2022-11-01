// console.log('111') //допомагає вивести щось у консол
"use strict";
// //оголошуэмо змінну і даємо їй назву для виводу в косоль
// let name = 'okten';// sting -'fkrgg' "5"; 5 - число
// console.log(name);
// name = 'hello';
// console.log(name);
//
// //number
// let num = 123;
// console.log(num);
// num = 100500;
//
// // const PI = 3.14;
// // console.log(PI);
//
// name = num;
// console.log(name);
//
// //boolean - true/false
// let b = 5>6;
// console.log(b);
// // let b2 = 100!==200;
// // console.log(b2);
// // let b3 = 5 ===5;
// // console.log(b3);
//
// //ASCII
// // let bool =5=='5';// 53==5
// // let bool =5==='5';// 5==='5'
// // console.log(bool);// false

let s1 ='hello';
let s2 = 'okten';
// console.log(s1,s2);
console.log(s1 + ' ' + s2);//зєднання( конкатенація)
// let sentence = s1 + ' ' + s2;
// console.log(sentence);
console.log(`${s1} ${s2}`)// займаэ быльше памяті

// let n1 =100;
// let n2 = 200;
// let result = n1/n2;
// console.log(result);

// console.log(5%2);//показує неділиму остачу - 1

//конвертація типів(число до стрінги)
// let foo = 100;
// console.log(typeof foo); //перевірка типу даних
let num = 1000;
console.log(typeof (num + ''));
console.log(100+200+'!');
console.log('!'+ 100 + 200);//'!'+100-> '!100'

//конвертація типів(стрінги до числа)
let strNum = '123';
console.log(+strNum);

//дивні поведінки
console.log(true + '');
console.log(100 + true); // 101, true - 1, false -0

//число або стрiнга до булевого значення
console.log(!!1000);
console.log(!!0);//-false
console.log(!!'');//- false

//обєкти
let user ={
    id:1,
    name:'Anna',
    age:29,
    status:true
};
//user = null;
console.log(user);
console.log(!!user);// always true

let arr; //undefined
arr=[1,2,3,4,5];
console.log(arr);
console.log(!!arr);// always true

console.log(!!null);//false
console.log(!!undefined);//false
console.log(!!NaN);//false
console.log(!!0);//false
console.log(!!'');//false
