// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr =['hello', 1005000, 3.14, 'name', [10,20,25],'user', '%', [1,2,3,4],205,'1'];
//console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[4][2]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[7][3]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book={
    title:'Кульбабове вино',
    pageCount:300,
    genre:'фентезі'
};
console.log(book);

let book1={
    title:'Колекціонер',
    pageCount:300,
    genre:'роман'
}
console.log(book1);

let book2={
    title:'Квіти для Елджернона',
    pageCount:300,
    genre:'науково-фантастичний твір-розповідь'
}
console.log(book2);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let books={
    title:'Кульбабове вино',
    pageCount:300,
    genre:'фентезі',
    autors:[
        {
            name: 'Рей Бредбері',
            age: 80
        }
    ]
};
console.log(books);

let books1={
    title:'Колекціонер',
    pageCount:300,
    genre:'роман',
    autors:[
        {
            name: 'Джон Фаулз',
            age: 80
        }
    ]
}
console.log(books1);

let books2={
    title:'Квіти для Елджернона',
    pageCount:300,
    genre:'науково-фантастичний твір-розповідь',
    autors:[
        {
            name: 'Деніел Кіз',
            age: 80
        }
    ]
}
console.log(books2);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user1 = {name:'ana', username:'AnA', password1: 1234567};
let user2= {name:'sofa', username:'ewf', password2:1234567};
let user3 = {name:'olya', username:'guhg', password3: 1234567};
let user4 = {name:'mary', username:'vjkengtik', password4: 1234567};
let user5 = {name:'kate', username:'gvbgyh', password5: 1234567};
let user6 = {name:'daria', username:'rgvefh', password6: 1234567};
let user7 = {name:'eva', username:'bhryhb', password7: 1234567};
let user8 = {name:'dima', username:'vrtb', password8: 1234567};
let user9 = {name:'ron', username:'gbrgyb', password9: 1234567};
let user10 = {name:'sam', username:'rvgrthvghb', password10: 1234567};

console.log(user1.password1);
console.log(user2.password2);
console.log(user3.password3);
console.log(user4.password4);
console.log(user5.password5);
console.log(user6.password6);
console.log(user7.password7);
console.log(user8.password8);
console.log(user9.password9);
console.log(user10.password10);