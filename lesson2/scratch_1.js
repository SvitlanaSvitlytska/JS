let arr= [101,true,'hi', [11,22,54]];
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


