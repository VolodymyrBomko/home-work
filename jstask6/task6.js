// - создать массив с 20 числами.
// -- при помощи метода sort отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//const numbers=[12,333,4412,54546,33,2344,5555,-334,34322,11133,6675,778,56566,77774,6565,13,545,66,23,20];

// let sort=numbers.sort((a, b) => {
//     return b-a;
// })
// console.log(sort);

// let newNumbers=numbers.filter((value) => {
//     if (value%3===0){
//         return value;
//     }
// });
// console.log(newNumbers);

// let newNumbers=numbers.filter((value) => {
//         return value%10===0;
// });
// console.log(newNumbers);

// numbers.forEach(value => {
//     console.log(value);
// })

// let mapNumbers=numbers.map(value => {
//     return value*3;
// })
// console.log(mapNumbers);

//
// - создать массив со словами на 15-20 элементов.
//let names=['ira','vika','victor','ivan','andriy','slavik','dimka','stiepka','mia','yasha','nadia','olga','misha','kristina','max'];
// -- отсортировать его по алфавиту в восходящем порядке.
// names.sort((a, b) => {
//     if (a<b){
//         return -1
//     }else{
//         return 1
//     }
// });
// console.log(names);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// names.sort((a, b) => {
//     if (a>b){
//         return -1
//     }else{
//         return 1
//     }
// });
// console.log(names);
// -- отфильтровать слова длиной менее 4х символов
// let filterNames=names.filter(value => {
//     return value.length<4;
// })
// console.log(filterNames);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mapNames=names.map(value => {
//     value+='!'
//     return value
// })
// console.log(mapNames);
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//    let users = [
//        {name: 'vasya', age: 31, status: false},
//        {name: 'petya', age: 30, status: true},
//        {name: 'kolya', age: 29, status: true},
//        {name: 'olya', age: 28, status: false},
//        {name: 'max', age: 30, status: true},
//        {name: 'anya', age: 31, status: false},
//        {name: 'oleg', age: 28, status: false},
//        {name: 'andrey', age: 29, status: true},
//        {name: 'masha', age: 30, status: true},
//        {name: 'olya', age: 31, status: false},
//        {name: 'max', age: 31, status: true}
//        ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsers=users.sort((a, b) => {
//     return a.age-b.age;
// })
// console.log(sortUsers);
//
// let sortUsers=users.sort((a, b) => {
//     return b.age-a.age;
// })
// console.log(sortUsers);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortUsers=users.sort((a, b) => {
//         return b.name.length-a.name.length;
// })
// console.log(sortUsers);

// let sortUsers=users.sort((a, b) => {
//     return a.name.length-b.name.length;
// })
// console.log(sortUsers);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let newUsers=JSON.parse(JSON.stringify(users));
// newUsers.forEach(value => {
//     value.id=parseInt(Math.random()*20);
//     return value;
// })
// console.log(newUsers);
// console.log(users);
//
// // - відсортувати його за індентифікатором
// newUsers.sort((a, b) => {
//     return a.id-b.id;
// })
// console.log(newUsers);
//

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calk(a,b,callback) {
//     console.log(callback(a, b));
// }
// calk(12, 23,function (a,b) {
// return a+b
// })
// calk(12,23,function (a,b) {
// return a-b
// })

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculyator(a,b,c,callback) {
//     console.log(callback(a, b, c));
// }
// calculyator(10,2,3,function (a,b,c) {
//     return (a+b)*c
// })
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//     ];
// Відфільтрувати масив за наступними крітеріями :
    //- двигун більше 3х літрів

// let filterCars=cars.filter(value => {
//     return value.volume>3
// })
//  console.log(filterCars);

// - двигун = 2л

// let filterCars=cars.filter(value => {
//     if(value.volume!=2){
//         return
//     }else {
//         return value;
//     }
// })
// console.log(filterCars);

// - виробник мерс

// let filterCars=cars.filter(value => {
//     if(value.producer!="mercedes"){
//         return
//     }else {
//         return value;
//     }
// })
// console.log(filterCars);

// - двигун більше 3х літрів + виробник мерседес
// let filterCars=cars.filter(value => {
//     if (value.volume>3&&value.producer==='mersedes'){
//         return value
//     }else {
//         console.log("a nema takoi tachku")
//     }
// })

// console.log(filterCars);

// - двигун більше 3х літрів + виробник субару
// let filterCars=cars.filter(value => {
//     if (value.volume>3&&value.producer==='subaru'){
//         return value
//     }else {
//         console.log("a nema takoi tachku")
//     }
// })
// console.log(filterCars);

// - сили більше ніж 300
// let filterCars=cars.filter(value => {
//     return value.power>300
// })
// console.log(filterCars);

// - сили більше ніж 300 + виробник субару
// let filterCars=cars.filter(value => {
//     return value.power>300&&value.producer==='subaru'
// })
// console.log(filterCars);

// - мотор серіі ej
// let filterCars=cars.filter(value => {
//    return value.engine.includes('ej')
// })
// console.log(filterCars);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filterCars=cars.filter(value => {
//     return value.power>300&&value.producer==='subaru'&&value.engine.includes('ej')
// })
// console.log(filterCars);

// - двигун меньше 3х літрів + виробник мерседес
// let filterCars=cars.filter(value => {
//     return value.volume<3&&value.producer==='mercedes'
// })
// console.log(filterCars);

// - двигун більше 2л + сили більше 250
// let filterCars=cars.filter(value => {
//     return value.volume>2&&value.power>250
// })

// console.log(filterCars);
//- сили більше 250  + виробник бмв
// let filterCars=cars.filter(value => {
//     return value.producer==='bmw'&&value.power>250
// })
// console.log(filterCars);
//
//
// - взять слдующий массив
//  let usersWithAddress = [
//      {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//      {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//      {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//      {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//      {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//      {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//      {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//      {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//      {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//      {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//      {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//      ];
// -- отсортировать его по id пользователей
// let sortUsers=usersWithAddress.sort((a, b) => {
//     return a.id-b.id
// })
// console.log(sortUsers);

// -- отсортировать его по id пользователей в обратном опрядке
// let sortUsers=usersWithAddress.sort((a, b) => {
//     return b.id-a.id
// })
// console.log(sortUsers);

// -- отсортировать его по возрасту пользователей
// let sortUsers=usersWithAddress.sort((a, b) => {
//     return a.age-b.age
// })
// console.log(sortUsers);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortUsers=usersWithAddress.sort((a, b) => {
//     return b.age-a.age
// })
// console.log(sortUsers);

// -- отсортировать его по имени пользователей
// let sortUsers=usersWithAddress.sort((a, b) => {
//     if (a.name<b.name){
//         return -1
//     }else{
//         return 1
//     }
// })
// console.log(sortUsers);

// -- отсортировать его по имени пользователей в обратном порядке
// let sortUsers=usersWithAddress.sort((a, b) => {
//     if (a.name>b.name){
//         return -1
//     }else{
//         return 1
//     }
// })
// console.log(sortUsers);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortUsers=usersWithAddress.sort((a, b) => {
//     if (a.address.street<b.address.street){
//         return -1
//     }else{
//         return 1
//     }
// })
// console.log(sortUsers);

// -- отсортировать его по номеру дома по возрастанию
// let sortUsers=usersWithAddress.sort((a, b) => {
//     return a.address.number-b.address.number
// })
// console.log(sortUsers);

// -- отфильтровать (оставить) тех кто младше 30
// let filterUsers=usersWithAddress.filter(value => {
//     return value.age<30
// })
// console.log(filterUsers);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filterUsers=usersWithAddress.filter(value => {
//     return value.status===false
// })
// console.log(filterUsers);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filterUsers=usersWithAddress.filter(value => {
//     return value.status===false&&value.age<30
// })
// console.log(filterUsers);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filterUsers=usersWithAddress.filter(value => {
//     return value.address.number%2===0
// })
// console.log(filterUsers);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// class Car {
// constructor(model,power, owner, price,year) {
//     this.model=model;
//     this.power=power;
//     this.owner=owner;
//     this.price=price;
//     this.year=year;
//     }
// }
// let car1=new Car('lada',200,{name:'ivan',age:23,expiriense:2},400,1994);
// let car2=new Car('lexus',450,{name:'sergiy',age:34,expiriense:7},15000,2017);
// let car3=new Car('bmw',240,{name:'petro',age:53,expiriense:23},3400,2003);
// let car4=new Car('luaz',80,{name:'dido',age:80,expiriense:60},100,1894);
// let car5=new Car('zaz',120,{name:'stepan',age:53,expiriense:43},300,1954);
// let car6=new Car('mers',280,{name:'max',age:25,expiriense:3},4300,2017);
// let car7=new Car('porshe',600,{name:'ivan petrovich',age:65,expiriense:34},44400,2020);
// let car8=new Car('porshe',550,{name:'kolyan petrovich',age:26,expiriense:4},400,2020);
//
// let carsOld=[];
// carsOld.push(car1,car2,car3,car4,car5,car6,car7,car8);
//
// let cars=[];
//
// function halfCars(array,callback) {
// callback(carsOld);
// }
//
// halfCars(carsOld,function (array){
//     for (let i = 0; i < carsOld.length; i++) {
//         if (i%2===0){
//             carsOld[i].power=carsOld[i].power*1.1;
//             cars.push(carsOld[i]);
//         }
//     }
// });
//
//я не зрозумів як переприсвоїти змінну водій то наступні завдання робив по власнику
//
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].power=cars[i].power*1.1;
//     cars[i].price=cars[i].price*1.05;
// }
// console.log(cars);
//
// let mapCars=cars.map((value, index) => {
//     if (value.owner.expiriense<5&&value.owner.age<25){
//         value.owner.expiriense+=1;
//     }
//     return value
// })
// console.log(mapCars);
//
// let babki=cars.reduce((previousValue, currentValue) => {
//     return previousValue+currentValue.price;
// },0);
// console.log(babki);
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
let numbers = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function f(array,key) {
    let min=null;
    let max=null;
    for (let i = 0; i < array.length; i++) {
        if (array[i]===key){
            max=i;
            if (min===null){
                min=i;
            }
        }

    }
    if (min===null){
        return -1;
    }
return 'Answer: MinIndex = '+min+', MaxIndex = '+max;
}
console.log(f(numbers,5))