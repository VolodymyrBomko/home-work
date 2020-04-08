// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// function FTag(titleOfTag,action,attrs) {
// this.titleOfTag=titleOfTag;
// this.action=action;
// this.attrs=attrs;
// }
//
// let a=new FTag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',[{titleOfAttr: 'accesskey',actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr: 'coords',actionOfAttr:'Устанавливает координаты активной области.'}, {titleOfAttr: 'download',actionOfAttr:'Предлагает скачать указанный по ссылке файл.'}]);
// console.log(a);
//
// let div=new FTag('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{titleOfAttr: 'align',actionOfAttr:'Задает выравнивание содержимого тега '},{titleOfAttr: 'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
//
// let h1=new FTag('<h1>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{titleOfAttr: 'align',actionOfAttr:'Задает выравнивание содержимого тега '},{titleOfAttr: 'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(h1);
//
// let span=new FTag('<span>','Тег <span> предназначен для определения строчных элементов документа',[]);
// console.log(span);
//
// let iput=new FTag('<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',[{titleOfAttr: 'accept',actionOfAttr:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},{titleOfAttr: 'accesskey',actionOfAttr:'Переход к элементу с помощью комбинации клавиш.'},{titleOfAttr: 'align',actionOfAttr:'Определяет выравнивание изображения.'}]);
// console.log(iput);
//
// let form=new FTag('<form>','Тег <form> устанавливает форму на веб-странице',[{titleOfAttr: 'accept-charset',actionOfAttr:'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},{titleOfAttr: 'action',actionOfAttr:'Адрес программы или документа, который обрабатывает данные формы.'}]);
// console.log(form);
//
// let option=new FTag('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',[{titleOfAttr: 'disabled',actionOfAttr:'Заблокировать для доступа элемент списка.'},{titleOfAttr: 'label',actionOfAttr:'Указание метки пункта списка.'}]);
// console.log(option);
//
// let select=new FTag('<select> ','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',[{titleOfAttr: 'accesskey',actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},{titleOfAttr: 'autofocus',actionOfAttr:'Устанавливает, что список получает фокус после загрузки страницы.'}]);
// console.log(select);
// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
//
// class Tag {
//     constructor(titleOfTag,action,attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs =attrs;
//     }
// }
// let a=new Tag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',[{titleOfAttr: 'accesskey',actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr: 'coords',actionOfAttr:'Устанавливает координаты активной области.'}, {titleOfAttr: 'download',actionOfAttr:'Предлагает скачать указанный по ссылке файл.'}]);;
// console.log(a);
//
// let div=new Tag('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{titleOfAttr: 'align',actionOfAttr:'Задает выравнивание содержимого тега '},{titleOfAttr: 'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
//
// let h1=new Tag('<h1>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{titleOfAttr: 'align',actionOfAttr:'Задает выравнивание содержимого тега '},{titleOfAttr: 'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(h1);
//
// let span=new Tag('<span>','Тег <span> предназначен для определения строчных элементов документа',[]);
// console.log(span);
//
// let iput=new Tag('<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',[{titleOfAttr: 'accept',actionOfAttr:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},{titleOfAttr: 'accesskey',actionOfAttr:'Переход к элементу с помощью комбинации клавиш.'},{titleOfAttr: 'align',actionOfAttr:'Определяет выравнивание изображения.'}]);
// console.log(iput);
//
// let form=new Tag('<form>','Тег <form> устанавливает форму на веб-странице',[{titleOfAttr: 'accept-charset',actionOfAttr:'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},{titleOfAttr: 'action',actionOfAttr:'Адрес программы или документа, который обрабатывает данные формы.'}]);
// console.log(form);
//
// let option=new Tag('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',[{titleOfAttr: 'disabled',actionOfAttr:'Заблокировать для доступа элемент списка.'},{titleOfAttr: 'label',actionOfAttr:'Указание метки пункта списка.'}]);
// console.log(option);
//
// let select=new Tag('<select> ','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',[{titleOfAttr: 'accesskey',actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},{titleOfAttr: 'autofocus',actionOfAttr:'Устанавливает, что список получает фокус после загрузки страницы.'}]);
// console.log(select);


// ==============================================
//
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(name,model,producer,year,maxSpeed,engine) {
//             this.name=name;
//             this.model=model;
//             this.producer=producer;
//             this.year=year;
//             this.maxSpeed=maxSpeed;
//             this.engine=engine;
//
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed=this.maxSpeed+newSpeed;
//     }
//     changeYear (newValue){
//         this.year=newValue;
//     }
//     addDriver (driver){
//         this.driver=driver;
//     }
// }
// let bmw=new Car('bmw','322','ger',2003,230,3.2);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(20);
// bmw.drive();
// bmw.changeYear(2020);
// bmw.info();
// bmw.addDriver({name:'ivan',age:27,status:'drunk policmen'});
// bmw.info();


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(name,model,producer,year,maxSpeed,engine) {
//     this.name=name;
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//
//     this.drive=function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info=function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed=function(newSpeed){
//         this.maxSpeed=this.maxSpeed+newSpeed;
//     }
//     this.changeYear=function (newValue) {
//         this.year=newValue;
//     }
//     this.driver=function (driver) {
//         this.driver=driver;
//     }
// }
//
// const lexus=new Car('lexus','s500','Usa',2009,300,3.5)
// lexus.drive();
// lexus.info();
// lexus.increaseMaxSpeed(50);
// lexus.drive();
// lexus.changeYear(2020);
// lexus.info();
// lexus.driver({name:'ivan',age:'27'});
// lexus.info();
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//class Car {
//     constructor(name,model,producer,year,maxSpeed,engine) {
//             this.name=name;
//             this.model=model;
//             this.producer=producer;
//             this.year=year;
//             this.maxSpeed=maxSpeed;
//             this.engine=engine;
//
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed=this.maxSpeed+newSpeed;
//     }
//     changeYear (newValue){
//         this.year=newValue;
//     }
//     addDriver (driver){
//         this.driver=driver;
//     }
// }
// let bmw=new Car('bmw','322','ger',2003,230,3.2);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(20);
// bmw.drive();
// bmw.changeYear(2020);
// bmw.info();
// bmw.addDriver({name:'ivan',age:27,status:'drunk policmen'});
// bmw.info();
// //



// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class  Popeluska {
//     constructor(name,age,footSize) {
//         this.name=name;
//         this.age=age;
//         this.footSize=footSize;
//     }
//
// }
//
//
//
// class  Prinz {
//     constructor(name,age,sizeOfShoes) {
//         this.name=name;
//         this.age=age;
//         this.sizeOfShoes=sizeOfShoes;
//     }
//
//
//     findPopeluska(array){
//        let find=null;
//         for (const item of array) {
//             if (item.footSize===this.sizeOfShoes){
//                 find=item.name;
//             }
//         }
//         if (find){
//             console.log(`my popeluska name is ${find}`);
//         }else {
//             console.log('i am not find my popeluska')
//         }
//     }
//
// }
//
// let popeluska1=new Popeluska('ira',17,35);
// let popeluska2=new Popeluska('sveta',16,35.5);
// let popeluska3=new Popeluska('kris',18,36);
// let popeluska4=new Popeluska('maria',20,36.5);
// let popeluska5=new Popeluska('lida',28,37);
// let popeluska6=new Popeluska('vika',21,38);
// let popeluska7=new Popeluska('kira',32,38.5);
// let popeluska8=new Popeluska('sasha',12,39);
// let popeluska9=new Popeluska('karina',23,39.5);
// let popeluska10=new Popeluska('vira',33,40);
//
// let arrPopeluskas=[popeluska1,popeluska2,popeluska3,popeluska4,popeluska5,popeluska6,popeluska7,popeluska8,popeluska9,popeluska10];
//
// let prinz=new Prinz('ivan',27,36);
// prinz.findPopeluska(arrPopeluskas);


//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function  Popeluska(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
}

function  Prinz(name,age,sizeOfShoes) {
        this.name=name;
        this.age=age;
        this.sizeOfShoes=sizeOfShoes;

    this.findPopeluska=function (array){
       let find=null;
        for (const item of array) {
            if (item.footSize===this.sizeOfShoes){
                find=item.name;
            }
        }
        if (find){
            console.log(`my popeluska name is ${find}`);
        }else {
            console.log('i am not find my popeluska')
        }
    }

}

let popeluska1=new Popeluska('ira',17,35);
let popeluska2=new Popeluska('sveta',16,35.5);
let popeluska3=new Popeluska('kris',18,36);
let popeluska4=new Popeluska('maria',20,36.5);
let popeluska5=new Popeluska('lida',28,37);
let popeluska6=new Popeluska('vika',21,38);
let popeluska7=new Popeluska('kira',32,38.5);
let popeluska8=new Popeluska('sasha',12,39);
let popeluska9=new Popeluska('karina',23,39.5);
let popeluska10=new Popeluska('vira',33,40);

let arrPopeluskas=[popeluska1,popeluska2,popeluska3,popeluska4,popeluska5,popeluska6,popeluska7,popeluska8,popeluska9,popeluska10];

let prinz=new Prinz('ivan',27,39);
prinz.findPopeluska(arrPopeluskas);