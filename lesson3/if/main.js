// let answer = confirm('hello');
// //console.log(answer);
//
// if (answer) {
//     document.write('<h1>yes</h1>');
// }else{
//     document.write('<h1>no</h1>');
// }

// && - and

// let age= +prompt( 'how old are you'); // +в промті конвертує стрінгу в число
// if(age<18){
//     document.write('<h1>no</h1>');//менше 18
// }else if(age>= 18 && age< 90) {
//     document.write('<h1>yes</h1>');//18 або більше 18 і менше 89, то проходить
// } else if (age >= 90){
//     document.write('<h1>casablanca</h1>');// more than 90
// }else{
//     document.write('<h1>???</h1>');// не числове значення
// }

// логічне або(or) - || - не жорстка умова, треба хоч одне тру і воно все дозволить

// let color = prompt('enter color that you see');
// let roadStatus = confirm('road is clear');
//
// // //             false    true = true
// // if(color === 'green' || roadStatus){
// //        console.log('you can go');
//
// if(color === 'green'){
//     if (roadStatus){
//         console.log('you can go');
//     }
// } else if(color === 'yellow'){
//     console.log('wait');
//
// } else if (color === 'red'){
//     console.log('stop');
// }
//
// // if(color === 'green' && roadStatus){
// //         console.log('you can go');

// let x;
// if (true){
//     x =100;
// }else {
//     x = -100;
//    }
// console.log(x);

// let y = confirm('what?')? 100 : -100;
// console.log(y);

//нюанси
//false: console.log(!!''); console.log(!!0);  console.log(!!);  console.log(NaN);
// console.log(!!undefined);  console.log(!!null);
// if ('rhrhbb'){
//     console.log('good');// true
// }else {
//     console.log('bad');// false
// }
// let arr = [
//
// ];
// if (arr.length){
//     console.log('array not empty');
// }else{
//     console.log('array is empty');
// }

// якщо перевірка на тру або фолс: іф з елсом, якщо множинна перевірка, то - світч
switch (''){
    case 'green':
        console.log('go');
        break;// зупинка, без нього юзають якщо на два варіанти була одна і та сама дія
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('??????');
}
// let xxx = prompt() || 'default value'; // якщо людина нічого не вписала(тобто прирівнюється до
// // фолз), то ту штуку треба замінити на якесь значення
// console.log(xxx);


