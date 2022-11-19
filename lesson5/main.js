// //функції
//
// function per(a,b) {
//     let result = (a+b)*2;
//     return result;// щоб щось залишилось після відпрацювання фунцкції для викорисатння в
//     // подальшому( не ставимо, якщо більше не треба)
//
// }
// let x = per(24,39);
// console.log(x);
//
// // //або
// // function per(a,b) {
// //      return (a+b)*2;
// //
// // let x = per(24,39);
// // console.log(x);
//
// // function calculator(n,m,action) {
// //     let result = NaN;
// //     if (action ==='+'){
// //        result = a+b;
// //     }else if (action ==='-'){
// //         result = a-b;
// //     }
// //     return result;
// // }
// // let data = calculator(15,8, '*');
// // console.log(data);
//
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

let user = {
    imya:'anna',
    greeting: function (){
        console.log(`hello my name is ${this.imya}`);
        console.log(this)
    }
}
user.greeting();