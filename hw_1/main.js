// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let name ='hello owu com ua';
console.log(name);

let arr = [1, 10, -999, 123,  16]
console.log(arr);

let numb = 2.7;
console.log(numb);

const NUMBER =3.14;
console.log(NUMBER);

let f = 10 > 20;
console.log(f); //false

let m = 4<5;
console.log(m)//true

//     Вивести кожну змінну за допомогою: console.log
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName='Kate';
let middleName='Next';
let lastName='Gap';
let person = firstName +' ' + middleName + ' '+ lastName;
console.log(person)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a =100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
