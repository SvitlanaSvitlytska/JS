// let users = [
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
// console.log(users.length);
// // цикли( for of)
// for (let user of users) {
//     document.write(`
//     <div class="user-box">
//         <h3>${user.name} </h3>
//         <p>${user.age} ${user.status}</p>
//     </div>
//                   `);
// }

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     }]
// for (const simpson of simpsons) {
//     document.write(
//         `
//             <div>
//                 <h2>Персонаж - ${simpson.name}, Вік -  ${simpson.age}</h2>
//                 <img src="${simpson.photo}" alt="${simpson.surname}">
//             </div>
//         `
//     )
// }

// let users = [
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
// console.log(users.length);
// // цикли( for of), !user.status - status false
// for (let user of users) {
//     if (user.status){
//         document.write(`
//         <div class="user-box">
//                 <h3>${user.name} </h3>
//                 <p>${user.age} ${user.status}</p>
//         </div>
//                   `);
//     }
// }

// інші різновиди циклів
//інкримент / декримент

// let x = 0;
// x= x+1 //0+1
// console.log(x);
// x+=1; //0+1
// console.log(x);
// x++; // тільки збільшують або тільки зменшують на 1
// console.log(x);

// let x = 0;
// x++;
// console.log(x);//1
// x--;//0
// console.log(x);
// ++x;
// console.log(x);// 1
// --x;
// console.log(x); //0
// // різниця між постфіксним( ві починає діяти тільки після того, як всі дії з цією змінною
// // закінчились) і префіксним( нічого зі змінною не зможуть зробити, поки він її не збільшить)
// console.log(x++);//
// console.log(++x);//

// let users = [ // lenght =11
//    /*0index*/ {name: 'vasya', age: 31, status: false},
//     /*1*/ {name: 'petya', age: 30, status: true},
//     /*2*/ {name: 'kolya', age: 29, status: true},
//     /*3*/ {name: 'olya', age: 28, status: false},
//     /*4*/ {name: 'max', age: 30, status: true},
//     /*5*/{name: 'anya', age: 31, status: false},
//     /*6*/{name: 'oleg', age: 28, status: false},
//     /*7*/ {name: 'andrey', age: 29, status: true},
//     /*8*/{name: 'masha', age: 30, status: true},
//     /*9*/{name: 'olya', age: 31, status: false},
//     /*10*/{name: 'max', age: 31, status: true}
// ];
// for  of може бігати від початку до кінця, може оголосити початкову позицію( з якого індексу можна
// починати) і до якого етапу може йти
//debugger;
// for (let i =0; i<users.length; i++){
//     console.log(users[i]);
// }//itar
//iter - for of
//itar - for -  classic
// const user ='asd';
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
// console.log(user);
// }

// const obj ={};//@#$%
// //@#$%.a
// obj.a ='asd';
// //!@#$% - заборонено
// obj = {};
// вивести рaхуючи з певного об'єкту до якогось іншого, а не кінця ( і +=2 - вивести кожного
// другого)

// for (let i = 3; i < users.length-2; i++) {
//     const user = users[i];
// console.log(user);
// }

// //якщо хочемо іти від половини масив і до кінця:
// for (let i = Math.round(users.length/2); i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
// }

// зробити цикл в зворотньому напрямку
//ritar
// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);
// }

// let u = {name: 'olya', age: 31, status: false};
// //цикл, який ітерує обєкти, а не масиви
// //itin(for in)
// for (const field in u) {
//     console.log(field, u[field]);
// }

// //вивести окремо значення і ключ
// let users = [ // lenght =11
//     /*0index*/ {name: 'vasya', age: 31, status: false},
//     /*1*/ {name: 'petya', age: 30, status: true},
//     /*2*/ {name: 'kolya', age: 29, status: true},
//     /*3*/ {name: 'olya', age: 28, status: false},
//     /*4*/ {name: 'max', age: 30, status: true},
//     /*5*/{name: 'anya', age: 31, status: false},
//     /*6*/{name: 'oleg', age: 28, status: false},
//     /*7*/ {name: 'andrey', age: 29, status: true},
//     /*8*/{name: 'masha', age: 30, status: true},
//     /*9*/{name: 'olya', age: 31, status: false},
//     /*10*/{name: 'max', age: 31, status: true}
// ];
// for (const user of users) {
//
//     for (const prop in user) {
//         console.log(prop, user[prop]);
//     }
// console.log('________')
//
// }

//while відрізняється від фор тільки тим, що початкове значенння вносимо в глобальні змінні
// let users = [
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
// let i= 0;
// while (i < users.length){
//     let user = users[i];
//     if (user.status){
//         console.log(user);
//     }
//     i++;
// }

// //do while
// do {
//     console.log('bhfyebujc')
// }while(false)

