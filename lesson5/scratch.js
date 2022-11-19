//функції

// function per(a,b) {
//     let result = (a+b)*2;
//     return result;// щоб щось залишилось після відпрацювання фунцкції для викорисатння в
//     // подальшому( не ставимо, якщо більше не треба)
//
// }
// let x = per(24,39);
// console.log(x);

// //або
// function per(a,b) {
//      return (a+b)*2;
//
// let x = per(24,39);
// console.log(x);

// function calculator(n,m,action) {
//     let result = NaN;
//     if (action ==='+'){
//        result = a+b;
//     }else if (action ==='-'){
//         result = a-b;
//     }
//     return result;
// }
// let data = calculator(15,8, '*');
// console.log(data);

// function arrayPrinter(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// arrayPrinter([11,58,101]);
// let users=[
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// arrayPrinter(users);

//arguments
// function asd() {
//     console.log(arguments);
// }
// asd(258,45,'hello');

//  //якщо різна кількість аргументів у функції
// //2+
// //3-
// function calc() {
//     if (arguments.length ===2){
//         return arguments[0] + arguments[1]
//     } else if (arguments.length === 3) {
//     return arguments[0] - arguments[1] - arguments[2];
// }
//     return 0;
// }
// console.log(calc(10,20));
// console.log(calc(20,30,40));

// // існ що введеш тут(...ххх) буде сприйматись як масив(ставиться останнім рестаргументом)
// function asd(y, ...xxx) {
//     console.log(xxx);
// }
// asd(15,25,8,4);

// //змінення структури в html
//
// function addHTML(tag, text) {
//     document.write(`<${tag}>${text}</${tag}`);
// }
// addHTML('h1', 'hello');
// addHTML('h3', 'hi');

// // викликати ф-цію до того як вона оголошена
//
// let asd = function () {
//    console.log(arguments)
// }
// asd();


// let arr=[];
// function addToArr(data) {
//     arr[arr.length] = data;
// }
// addToArr(10);
// addToArr(30);
// console.log(arr);

// //funcion expression - дозволяють зробити стрілочну ф-цію
//
// // let calculator = function (a,b) {
// //     return a+b;
// // }
//
// // let calculator = (a,b) => {
// //     return a+ b;
// // }
//
// //let calculator= (a,b) => a+b;
// let calculator = (a,b) => {
//     let result = a+b;
//     console.log(result);
//     return result;
// }

//ф-ції в об'єкті

let user = {
    imya:'anna',
    greeting: function (){
        console.log(`hello my name is ${this.imya}`);
        console.log(this)
    },
    friend:{
        imya:'kate',
        pruvit: function () {
            console.log(this);// your object
            return`hi my name is ${this.imya}`;
        },
        hi: () =>{
            console.log(this);// Window
            return `hi my name is ${this.imya}`;
        }
    }
}
user.greeting();
console.log(user.friend.hi());

