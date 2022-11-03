//масив    0    1     2         3
let arr = [101,true,'hi', [11,22,54]];
console.log(arr);

console.log(arr[0]);// звертатись до певних елементів  з масиву
//додати елемент до існуючого маиву:
arr[4] = 'hello';
console.log(arr);
//змінити вже існуючий елемент(перевизначити):
arr[0]= 100600;
console.log(arr);
console.log(arr.length);
arr[arr.length] = 'hell';
console.log(arr);

//let innerArray = arr[3];
console.log(arr[3]);
console.log(arr[3][1]);

// objects

let user = {
    id:1,
    name:'sveta',
    age:20,
    surname:'efnrif',
    husband:{
        name:'eehf',
        age:25,
        surname:'dwhe'
    }
}
console.log(user);
console.log(user.id);
console.log(user['id']);//string
console.log(user.husband)
console.log(user.husband.name);
//додати поле об'єкту
user['gwiuewioefj'] = 'hjrgjieriufile';
let x = 'html';
user.skils = ['js',x,'css'];
console.log(user);

console.log(user.skils[1]);

// array of objects
let friend1 ={name:'ana', age: 20};
let friend2 ={name:'sofa', age: 21};
let friend3 ={name:'olya', age: 20};
let friend4 ={name:'mary', age: 21, skils :['js', 'css']};

let party = [
    friend1,
    friend2,
    friend3,
    friend4
];
console.log(party);
console.log(party[2].age);
console.log(party[3].name);
console.log(party[3].skils[1]);

//referens

let i = 0;
let y =i;
console.log(y);
console.log(i);
y=100;
console.log(y);
console.log(i)

let user1 = {id:1, name: "kate"};
console.log(user1);

let customer= user1;
console.log(customer);

customer.age = 31;
console.log(customer);

console.log(user1);

user1.id = 100;
console.log(user1);
console.log(customer);

console.log(typeof {});
console.log(typeof []);
//console.log(Array.isArray(arg:[]));//true
//console.log(Array.isArray(arg:{}));// false
