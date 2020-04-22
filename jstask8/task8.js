// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let txtInpt=document.getElementById('text');
// let txtLocalText=localStorage.getItem('txtInpt');

//
// if (txtLocalText){
//     txtInpt.value=txtLocalText;
// }
//
// txtInpt.oninput=() => {
//     localStorage.setItem('txtInpt',txtInpt.value);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let testForms = document.getElementById('testForm');
//
//
// for (let i = 0; i < testForms.length; i++) {
//     if (testForms[i].type === 'radio') {
//         let radioValue = localStorage.getItem(`radio${testForms[i].name}`);
//         if (radioValue === testForms[i].value) {
//             testForms[i].checked = true;
//
//         }
//
//     } else {
//
//
//         let oldValue = localStorage.getItem(`index${i}`);
//
//         if (oldValue) {
//
//             if (testForms[i].type === 'checkbox') {
//                 testForms[i].checked = oldValue;
//             } else {
//                 testForms[i].value = oldValue;
//             }
//         }
//     }
//
//
//     testForms[i].onchange = () => {
//         if (testForms[i].type === 'radio') {
//             if (testForms[i].checked)
//                 localStorage.setItem(`radio${testForms[i].name}`, testForms[i].value);
//         } else if (testForms[i].type === 'checkbox') {
//             localStorage.setItem(`index${i}`, testForms[i].checked);
//         } else {
//             localStorage.setItem(`index${i}`, testForms[i].value);
//         }
//
//     }
//
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки,
// с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let txtInpt = document.getElementById('text');
let btn = document.getElementById('btn');
let textLs = localStorage.getItem('txtInpt');

if (textLs) {
    txtInpt.value = textLs;
}

let i = 0;
btn.onclick = () => {
    localStorage.setItem(`txtInpt${i}`, txtInpt.value);
    i++;
}


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
