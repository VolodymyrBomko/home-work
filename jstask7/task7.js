// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let parag=document.getElementById('text');
// let btn=document.getElementById('btn');
// console.log(parag);
// console.log(btn);
//
// btn.onclick=()=>{
//     parag.style.display='none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn=document.getElementById('btn');
// btn.onclick=()=> {
//     btn.style.display='none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let sub=document.getElementById('submit')
// let age=document.getElementById('age')
// sub.onclick=()=> {
//     if (age.value>=18){
//         alert('age is ok');
//     }else{
//         alert('to small')
//     }
// }

// // - Создайте меню, которое раскрывается/сворачивается при клике
// let ul=document.getElementsByClassName('ul');
// let li=document.getElementsByClassName('li');
// let flag=false;
// ul[0].onclick=()=>{
//     if (flag){
//     li[2].style.display='block';
//     li[1].style.display='block';
//     li[0].style.display='block';
//     flag=false;
//     }else {
//         li[2].style.display='none';
//         li[1].style.display='none';
//         li[0].style.display='none';
//         flag=true;
//     }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments = [
//     {title: 'lorem1', body: 'lorem1 ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem2 ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem3 ipsum dolo sit ameti'}];
//
// coments.forEach(coment => {
//     let divka = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//
//     let btn = document.createElement('button');
//     btn.innerText = 'remove';
//
//     h2.innerText = coment.title;
//     p.innerText = coment.body;
//
//     divka.appendChild(h2);
//     divka.appendChild(p);
//     divka.appendChild(btn);
//
//     btn.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     }
//     document.body.appendChild(divka);
// })
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let text1=document.getElementsByName('text1');
// let text2=document.getElementsByName('text2');
// let number1=document.getElementsByName('number1');
// let number2=document.getElementsByName('number2');
//
// let forms1=document.forms.formsFirst;
// let forms2=document.forms.formsSecond;
//
// let text1Inp=forms1.text1;
// let text2Inp=forms2.text2;
// let number1Inp=forms1.number1;
// let number2Inp=forms2.number2;
//
// let btn=document.getElementsByName('button')
// console.log(btn);
//
// btn[0].onclick=()=>{
//     console.log(`${text1Inp.value},${text2Inp.value},${number1Inp.value},${number2Inp.value}`)
// }

//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// table = (rows, cols, tag) => {
//     let table = document.createElement(tag);
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             td.innerText = i.toString() + j.toString();
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
//     document.body.appendChild(table);
// }
// table(103, 5, 'table');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let one=document.forms.myForm.one;
// let two=document.forms.myForm.two;
// let text=document.forms.myForm.text;
// let btn=document.getElementsByName('button');
//
// btn[0].onclick = () => {
//     let table = document.createElement("table");
//     for (let i = 0; i < one.value; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 0; j < two.value; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = text.value;
//         }
//     }
//     document.body.appendChild(table);
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let words = ['xxx', 'zzz', 'qqq', 'sss'];
// let text = document.forms.myForm.text;
// let btn = document.getElementsByName('button');
// console.log(text);
// console.log(btn[0]);
//
//
// btn[0].onclick = () => {
//     words.forEach(value => {
//         if (text.value === value) {
//             alert('nononnono')
//         }
//     })
// }

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let words=['xxx','zzz','qqq','sss'];
// let text=document.forms.myForm.text;
// let btn=document.getElementsByName('button');
// console.log(text);
// console.log(btn[0]);
//
//
// btn[0].onclick=()=>{
//     words.forEach(value => {
//         if (text.value.includes(value)){
//             alert('nononnono')
//         }
//     })
// }
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// let arrayH2=document.getElementsByTagName('h2');
// let content=document.getElementById('content');
// let wrap=document.getElementById('wrap');
// let ul=document.createElement('ul');
// for (let i = 0; i < arrayH2.length; i++) {
//     let li=document.createElement('li');
//     let a=document.createElement('a');
//     let yakor='yakor'+i;
//     a.href='#'+yakor;
//     arrayH2[i].setAttribute('id',yakor);
//     a.innerHTML=arrayH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
//
// }
// content.appendChild(ul);
// content.style.width='30%';
// wrap.style.width='70%';
// content.style.float='left';
// wrap.style.float='left';

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let myArr = JSON.stringify(usersWithAddress);

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const content = document.getElementById('content');
const userDiv = document.createElement('div');
userDiv.appendChild(renderContent(usersWithAddress));

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');

const label1 = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');

const button = document.createElement('button');

label1.innerText = 'статусом false';
label2.innerText = 'старше 29 лет ';
label3.innerText = 'город киев';

button.innerText = 'filter';

input1.type = 'checkbox';
input2.type = 'checkbox';
input3.type = 'checkbox';

content.appendChild(userDiv);

content.appendChild(label1);
content.appendChild(input1);
content.appendChild(label2);
content.appendChild(input2);
content.appendChild(label3);
content.appendChild(input3);
content.appendChild(button);

button.onclick=()=>{
    let myArray=JSON.parse(JSON.stringify(usersWithAddress));

    if (input1.checked) myArray=myArray.filter(value =>!value.status);
    if (input2.checked) myArray=myArray.filter(value =>value.age>=29);
    if (input3.checked) myArray=myArray.filter(value =>value.address.city==='Kyiv');

    userDiv.innerHTML='';
    userDiv.appendChild(renderContent(myArray));
}


function renderContent(array) {
    const main = document.createElement('div');
    array.forEach(item => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');

        div.innerHTML = JSON.stringify(item);

        main.appendChild(div);

    })
    return main;

}

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
