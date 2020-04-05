// - створити функцію яка виводить масив
//let array=[12,33,'hello',true];
// (()=>{
// //     console.log(array);
// // })()

// function s() {
//     console.log(array);
// }
// s();
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let arr=[];
// function arrPush(a,b) {
//     for (let i = 0; i <a; i++) {
//         arr.push(Math.round(Math.random()*b))
//
//     }
//
// }
// arrPush(10,100);
// function s() {
//     console.log(arr);
// }
// s();

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// let a=prompt();
// let b=prompt();
// let c=prompt();
//
// function minNumber(a,b,c) {
//     let arr=[a,b,c];
//     let min;
//     for (const element of arr) {
//         if (!min||min>element){
//             min=element;
//
//         }
//     }
//     return min;
// }
//
// console.log(minNumber(a,b,c));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// let a=prompt();
// let b=prompt();
// let c=prompt();
//
// function maxNumber(a,b,c) {
//     let arr=[a,b,c];
//     let max;
//     for (const element of arr) {
//         if (!max||max<element){
//             max=element;
//
//         }
//     }
//     return max;
// }
//
// console.log(maxNumber(a,b,c));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function minMax(...arguments) {
//     //console.log(el);
//     let min;
//     let max;
//     for (const element of arguments) {
//         if (!min||min>element){
//              min=element;
//
//          }if (!max||max<element){
//             max=element;
//
//             }
//
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(12,333,4444,2221,1))

// - створити функцію яка виводить масив
// - створити функцію яка повертає найбільше число з масиву
// function maxNumber() {
//     let arr=[1,222,333,111,2,3334,444];
//     let max;
//     for (const element of arr) {
//         if (!max||max<element){
//             max=element;
//         }
//     }
//     return max;
// }
// console.log(maxNumber());

// - створити функцію яка повертає найменьше число з масиву

// function minNumber() {
//     let arr=[10,222,333,111,2,3334,444];
//     let min;
//     for (const element of arr) {
//         if (!min||min>element){
//             min=element;
//         }
//     }
//     return min;
// }
// console.log(minNumber());

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arr=[10,222,333,111,2,3334,444];
//
// function sumNumber(array) {
//     let sum=0;
//     for (const element of array) {
//
//         sum+=element;
//
//     }
//     return sum;
// }
// console.log(sumNumber(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr=[10,222,333,111,2,3334,444];
//
// function sumNumber(array) {
//     let sum=0;
//     for (const element of array) {
//
//         sum+=element;
//
//     }
//     return sum;
// }
//
//
//
// function averege(array2) {
//     return parseInt(sumNumber(array2)/array2.length);
// }
// averege(arr);
// console.log(averege(arr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arr=[10,222,333,111,2,3334,444];
// function numdOfLength(array) {
//     let i=0;
//     for (const arrKey in array) {
//         i++;
//     }
//     return i;
// }
// console.log(numdOfLength(arr));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let objects=[
//     {name:'vasya',
//     age:23,
//     wife:'ira'},
//
//     {name:'vasya',
//     age:23,
//     wife:'ira'},
//     {name:'vasya',
//     age:23,
//     wife:'ira'}
// ]
// // for (const element in object) {
// //     console.log(object);
// // }
//
// function numberOf(array) {
//     let i=0;
//     for (const arrKey of array) {
//         //console.log(arrKey);
//             for (const element in arrKey) {
//                 //console.log(element);
//                     i++;
//                 }
//     }
//     return i;
// }
// console.log(numberOf(objects));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

//
// function sumOfIndex() {
//     let array=[1,2,3,4];
//     let array2=[2,3,4,5];
//     let newArr=[];
//
//     for (const key in array) {
//         //console.log(key);
//         for (const key2 in array2) {
//             //console.log(key2);
//             if (key===key2){
//                 //console.log(array[key]+array2[key2]);
//                 newArr.push((array[key]+array2[key2]));
//             }
//
//         }
//
//     }
//     return newArr;
// }
// console.log(sumOfIndex());


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function zmina(array,i) {
// //     // for (let j = 0; j < array.length; j++) {
// //     //     if (j==i){
// //     //        // console.log(1);
// //     //         array[j]=array[j+1];
// //     //     }
// //     //
// //     // }
// //     if (array.length>i) {
// //         let oldValue = array[i];
// //         array[i] = array[i + 1];
// //         array[i + 1] = oldValue;
// //         return array;
// //     }else{
// //         console.log('nema')
// //     }
// // }
// //
// // console.log(zmina([10, 20, 30, 40], 1));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function zeroToEnd(array) {
//     let zeroArr = [];
//     let numArr=[];
//     let newArr=[];
//     for (const element of array) {
//         if (element === 0) {
//             zeroArr.push(element);
//
//         }else if (element!=0){
//             numArr.push(element);
//         }
//     }
//
//     //console.log(numArr);
//     //console.log(zeroArr);
//     newArr=numArr.concat(zeroArr);
//     //console.log(newArr);
//     return newArr;
// }
// console.log(zeroToEnd([12, 0, 32, 444, 0, 33]));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function cre() {
// let owu=document.createElement('div');
// owu.innerText='Hello owu';
// document.body.appendChild(owu);
// }
// cre();


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function cre(tag,text) {
//     let owu=document.createElement(tag);
//     owu.innerText=text;
//     document.body.appendChild(owu);
// }
// cre('div','hello owu');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// let cars=[
//     {
//         name:'bmw',
//         model:'530',
//         year:1999,
//         motor:3.0,
//         color:'white',
//         driver:'ivan'
//
//     },
//     {
//         name:'mers',
//         model:'s600',
//         year:2008,
//         motor:2.0,
//         color:'black',
//         driver:'petro'
//     },
//     {
//         name:'wolsw',
//         model:'passat',
//         year:2008,
//         motor:2.0,
//         color:'brown',
//         driver:'kolya'
//     },
//     {
//         name:'lada',
//         model:'9890',
//         year:1997,
//         motor:1.5,
//         color:'chocolate',
//         driver:'vika'
//     },
//     {
//         name:'lexus',
//         model:'x300',
//         year:2015,
//         motor:3.0,
//         color:'black',
//         driver:'igor'
//     }
// ];
//
// function carsFunction(array,id) {
//     let main=document.createElement("div");
//     main.id=id;
//     document.body.appendChild(main);
//
//     for (const car of array) {
//         let mashina =document.createElement("div");
//         //mashina.innerText=car.name;
//         main.appendChild(mashina);
//
//
//         for (const carElement in car) {
//             let har=document.createElement("div");
//             mashina.appendChild(har);
//             har.innerText=car[carElement];
//             //console.log(carElement);
//
//         }
//
//         mashina.appendChild(document.createElement("br"));
//     }
//
//
// }
// carsFunction(cars,'conteiner');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function id(users,cities) {
//     for (const user of usersWithId) {
//         for (const citi of citiesWithId) {
//             if (user.id===citi.user_id){
//                 user.address=citi;
//
//             }
//
//         }
//
//     }
//    return usersWithId;
// }
//
// console.log(id(usersWithId, citiesWithId));


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// function pravula(array) {
//     for (const rule of rules) {
//         let divka=document.createElement("div");
//         //divka.innerText=rule.title+'\n'+rule.body;
//         let numOfRule=document.createElement("h2");
//         let textOfRules=document.createElement("p");
//         numOfRule.innerText=rule.title;
//         textOfRules.innerText=rule.body;
//
//         divka.appendChild(numOfRule);
//         divka.appendChild(textOfRules);
//         document.body.appendChild(divka);
//     }
// return divka ;
// }
// pravula(rules);