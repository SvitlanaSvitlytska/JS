// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x =5;
// if(x !==0 ){
//     console.log('Вірно');
// }else {
//     console.log('Невірно')
// }

// let a = 1;
// if(a !==0 ){
//     console.log('Вірно');
// }else {
//     console.log('Невірно')
// }
// let a = 0;
// if(a !==0 ){
//     console.log('Вірно');
// }else if (a>=0 && a<=0){
//     console.log('Невірно')
// }
//
// let A = -3;
// if(A !==0 ){
//     console.log('Вірно');
// }else if (A>=0 && A<=0){
//     console.log('Невірно');
// }else if (A===0){
//     console.log('Невірно');
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('What time is it');
//  if(time ===0  ){
// document.write('<h1>first</h1>');
// }else if (time<=15){
//      document.write('<h1>перша</h1>');
//  }else if (time >=16 && time <= 30){
//      document.write('<h1>друга</h1>');
//  }else if (time >=31 && time <= 45){
//      document.write('<h1>третя</h1>');
//  }else if (time >=46 && time <= 59){
//      document.write('<h1>четверта</h1>');
//  }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Day');
// if(day ===1  ){
//     document.write('<h1>перша</h1>');
// }else if (day<=6){
//     document.write('<h1>перша</h1>');
// }else if (day >=7 && day <= 14){
//     document.write('<h1>друга</h1>');
// }else if (day >=15 && day <= 31){
//     document.write('<h1>третя</h1>');
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
// на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let number = prompt();
// switch (number){
//     case'1':
//          document.write('<h1>Monday</h1>');
//         break;
//     case '2':
//         document.write('<h1>Tuesday</h1>');
//         break;
//     case'3':
//         document.write('<h1>Wednesday</h1>');
//         break;
//     case'4':
//         document.write('<h1>Tuesday</h1>');
//         break;
//     case'5':
//         document.write('<h1>Friday</h1>');
//         break;
//     case'6':
//         document.write('<h1>Saturday</h1>');
//         break;
//     case'7':
//         document.write('<h1>Sunday</h1>');
//         break;
//     default:
//         document.write('<h1>holiday</h1>');
// }
//     - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.
//
let b = 54;
let c = 30;
if(b>c){
    console.log(b);
}else if(b<c){
    console.log(c);
}else if(b ===c){
    console.log('рівні');
}else{
    console.log('помилка')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let f = prompt() || 'default value';
 console.log(f);