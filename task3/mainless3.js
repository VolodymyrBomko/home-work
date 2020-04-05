//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
/*let Ira={
    name:"Ira",
    age:21,
    job:false
}

let dog={
    color:"black",
    sex:"male",
    breed:"pitbull"
}

let ball={
    typeOfBall:"football",
    size:5,
    weight:0.320
}

let car={
    brand:"wolcwagen",
    model:"PassatB6",
    motor:2.0
}

let house={
    windows:20,
    doors:7,
    floor:8
}*/



//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
/*let Ira={
    name:"Ira",
    age:21,
    job:false,
    lang:['ua','en','rus','pol'],
    sister:{name:"Kristina",age: 23}
}

let dog={
    color:"black",
    sex:"male",
    skills:['courteous', 'quiet'],
    breed:"pitbull",
    food:{name:'Pedigree',price:15}
}

let ball={
    typeOfBall:"football",
    size:5,
    weight:0.320,
    colors:['black','white','brown','silver'],
    owner:{name:'ivan',age:12,weight: 45}
}

let car={
    brand:"wolcwagen",
    model:"PassatB6",
    colors:['black','white','brown','silver'],
    motor:2.0,
    disku:{size:15,material:'tutan'}
}

let house={
    windows:20,
    doors:7,
    floor:8,
    porches:['first','second','third'],
    adress:{city:'Lviv',st:'Bohdana Hmelnutcskoho/23'}
}*/

//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
/*let Ira={
    name:"Ira",
    age:21,
    job:false,
    lang:['ua','en','rus','pol'],
    sister:{name:"Kristina",age: 23}
}
for (const iraKey in Ira) {
    console.log(iraKey);
}




let dog={
    color:"black",
    sex:"male",
    skills:['courteous', 'quiet'],
    breed:"pitbull",
    food:{name:'Pedigree',price:15}
}
for (const dogKey in dog) {
    console.log(dogKey);
}



let ball={
    typeOfBall:"football",
    size:5,
    weight:0.320,
    colors:['black','white','brown','silver'],
    owner:{name:'ivan',age:12,weight: 45}
}
for (const ballKey in ball) {
    console.log(ballKey);
}


let car={
    brand:"wolcwagen",
    model:"PassatB6",
    colors:['black','white','brown','silver'],
    motor:2.0,
    disku:{size:15,material:'tutan'}
}
for (const carKey in car) {
    console.log(carKey);
}



let house={
    windows:20,
    doors:7,
    floor:8,
    porches:['first','second','third'],
    adress:{city:'Lviv',st:'Bohdana Hmelnutcskoho/23'}
}
for (const houseKey in house) {
    console.log(houseKey);
}*/

//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
/*let Ira={
    name:"Ira",
    age:21,
    job:false,
    lang:['ua','en','rus','pol'],
    sister:{name:"Kristina",age: 23}
}
console.log(Object.keys(Ira));

let dog={
    color:"black",
    sex:"male",
    skills:['courteous', 'quiet'],
    breed:"pitbull",
    food:{name:'Pedigree',price:15}
}
console.log(Object.keys(dog));

let ball={
    typeOfBall:"football",
    size:5,
    weight:0.320,
    colors:['black','white','brown','silver'],
    owner:{name:'ivan',age:12,weight: 45}
}
console.log(Object.keys(ball));

let car={
    brand:"wolcwagen",
    model:"PassatB6",
    colors:['black','white','brown','silver'],
    motor:2.0,
    disku:{size:15,material:'tutan'}
}
console.log(Object.keys(car));

let house={
    windows:20,
    doors:7,
    floor:8,
    porches:['first','second','third'],
    adress:{city:'Lviv',st:'Bohdana Hmelnutcskoho/23'}
}
console.log(Object.keys(house));*/

//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black'
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown'
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate'
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black'
    },
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'zaz',
        model:'zapor',
        year:1988,
        motor:1.0,
        color:'white'
    },
    {
        name:'mitsubishi',
        model:'lancer',
        year:2009,
        motor:2.4,
        color:'silver'
    },
    {
        name:'toyota',
        model:'avensis',
        year:2018,
        motor:1.4,
        color:'red'
    },
    {
        name:'mazda',
        model:'6',
        year:2019,
        motor:2.0,
        color:'green'
    }

];
console.log(Object.keys(cars));*/


//- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
/*let cities=[
    {
        name:'Lviv',
        population:1000000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'New York',
        population:10000000,
        country:'Usa',
        region:'New York region'
    },
    {
        name:'Kamyanka-Buzka',
        population:12000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'Streptiv',
        population:3000,
        country:'Ukraine',
        region:'Kamyanka-Buzka region'
    },
    {
        name:'Warshawa',
        population:3000000,
        country:'Poland',
        region:'Warshawa region'
    }

];*/

//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white',
        driver:{
            name:'ivan',
            age:22,
            sex:'male',
            experience:2
        }

    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black',
        driver:{
            name:'petro',
            age:26,
            sex:'male',
            experience:4
        }
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown',
        driver:{
            name:'kolya',
            age:28,
            sex:'male',
            experience:8
        }
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate',
        driver:{
            name:'vika',
            age:21,
            sex:'female',
            experience:2
        }
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black',
        driver:{
            name:'igor',
            age:55,
            sex:'male',
            experience:25
        }
    }
];*/

//- проитерировать каждый массив из задания 5,6,7 при помощи while.
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black'
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown'
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate'
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black'
    },
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'zaz',
        model:'zapor',
        year:1988,
        motor:1.0,
        color:'white'
    },
    {
        name:'mitsubishi',
        model:'lancer',
        year:2009,
        motor:2.4,
        color:'silver'
    },
    {
        name:'toyota',
        model:'avensis',
        year:2018,
        motor:1.4,
        color:'red'
    },
    {
        name:'mazda',
        model:'6',
        year:2019,
        motor:2.0,
        color:'green'
    }

];
let carsKeys=0;
while (carsKeys<cars.length){
    console.log(cars[carsKeys]);
    carsKeys++;
}*/



/*let cities=[
    {
        name:'Lviv',
        population:1000000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'New York',
        population:10000000,
        country:'Usa',
        region:'New York region'
    },
    {
        name:'Kamyanka-Buzka',
        population:12000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'Streptiv',
        population:3000,
        country:'Ukraine',
        region:'Kamyanka-Buzka region'
    },
    {
        name:'Warshawa',
        population:3000000,
        country:'Poland',
        region:'Warshawa region'
    }

];
let citiesKeys=0;
while (citiesKeys<cities.length){
    console.log(cities[citiesKeys]);
    citiesKeys++;
}*/


/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white',
        driver:{
            name:'ivan',
            age:22,
            sex:'male',
            experience:2
        }

    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black',
        driver:{
            name:'petro',
            age:26,
            sex:'male',
            experience:4
        }
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown',
        driver:{
            name:'kolya',
            age:28,
            sex:'male',
            experience:8
        }
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate',
        driver:{
            name:'vika',
            age:21,
            sex:'female',
            experience:2
        }
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black',
        driver:{
            name:'igor',
            age:55,
            sex:'male',
            experience:25
        }
    }
];
let carsKeys=0;
while (carsKeys<cars.length){
    console.log(cars[carsKeys]);
    carsKeys++;
}*/

//- проитерировать каждый массив из задания 5,6,7 при помощи for .
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black'
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown'
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate'
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black'
    },
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'zaz',
        model:'zapor',
        year:1988,
        motor:1.0,
        color:'white'
    },
    {
        name:'mitsubishi',
        model:'lancer',
        year:2009,
        motor:2.4,
        color:'silver'
    },
    {
        name:'toyota',
        model:'avensis',
        year:2018,
        motor:1.4,
        color:'red'
    },
    {
        name:'mazda',
        model:'6',
        year:2019,
        motor:2.0,
        color:'green'
    }

];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}*/

/*let cities=[
    {
        name:'Lviv',
        population:1000000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'New York',
        population:10000000,
        country:'Usa',
        region:'New York region'
    },
    {
        name:'Kamyanka-Buzka',
        population:12000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'Streptiv',
        population:3000,
        country:'Ukraine',
        region:'Kamyanka-Buzka region'
    },
    {
        name:'Warshawa',
        population:3000000,
        country:'Poland',
        region:'Warshawa region'
    }

];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}*/

/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white',
        driver:{
            name:'ivan',
            age:22,
            sex:'male',
            experience:2
        }

    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black',
        driver:{
            name:'petro',
            age:26,
            sex:'male',
            experience:4
        }
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown',
        driver:{
            name:'kolya',
            age:28,
            sex:'male',
            experience:8
        }
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate',
        driver:{
            name:'vika',
            age:21,
            sex:'female',
            experience:2
        }
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black',
        driver:{
            name:'igor',
            age:55,
            sex:'male',
            experience:25
        }
    }
];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}*/

//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black'
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown'
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate'
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black'
    },
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'zaz',
        model:'zapor',
        year:1988,
        motor:1.0,
        color:'white'
    },
    {
        name:'mitsubishi',
        model:'lancer',
        year:2009,
        motor:2.4,
        color:'silver'
    },
    {
        name:'toyota',
        model:'avensis',
        year:2018,
        motor:1.4,
        color:'red'
    },
    {
        name:'mazda',
        model:'6',
        year:2019,
        motor:2.0,
        color:'green'
    }

];
for (const car of cars) {
    console.log(car);

}*/

/*let cities=[
    {
        name:'Lviv',
        population:1000000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'New York',
        population:10000000,
        country:'Usa',
        region:'New York region'
    },
    {
        name:'Kamyanka-Buzka',
        population:12000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'Streptiv',
        population:3000,
        country:'Ukraine',
        region:'Kamyanka-Buzka region'
    },
    {
        name:'Warshawa',
        population:3000000,
        country:'Poland',
        region:'Warshawa region'
    }

];
for (const city of cities) {
    console.log(city);
}*/


/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white',
        driver:{
            name:'ivan',
            age:22,
            sex:'male',
            experience:2
        }

    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black',
        driver:{
            name:'petro',
            age:26,
            sex:'male',
            experience:4
        }
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown',
        driver:{
            name:'kolya',
            age:28,
            sex:'male',
            experience:8
        }
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate',
        driver:{
            name:'vika',
            age:21,
            sex:'female',
            experience:2
        }
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black',
        driver:{
            name:'igor',
            age:55,
            sex:'male',
            experience:25
        }
    }
];
for (const car of cars) {
    console.log(car);
}*/

//- взять объекты из задания 1 и превратить каждый в json.
/*let Ira={
    name:"Ira",
    age:21,
    job:false
}
let iraJson=JSON.stringify(Ira);
console.log(iraJson);


let dog={
    color:"black",
    sex:"male",
    breed:"pitbull"
}
let dogJson=JSON.stringify(dog);
console.log(dogJson);


let ball={
    typeOfBall:"football",
    size:5,
    weight:0.320
}
let ballJson=JSON.stringify(ball);
console.log(ballJson);

let car={
    brand:"wolcwagen",
    model:"PassatB6",
    motor:2.0
}
let carJson=JSON.stringify(car);
console.log(carJson);


let house={
    windows:20,
    doors:7,
    floor:8
}
let houseJson=JSON.stringify(ball);
console.log(houseJson);*/



//- взять json из задания 11 и превратить их обратно в объекты.
/*let Ira={
    name:"Ira",
    age:21,
    job:false
}
let iraJson=JSON.stringify(Ira);
console.log(iraJson);
let iraObject=JSON.parse(iraJson);
console.log(iraObject);


let dog={
    color:"black",
    sex:"male",
    breed:"pitbull"
}
let dogJson=JSON.stringify(dog);
console.log(dogJson);
let dogObject=JSON.parse(dogJson);
console.log(dogObject);

let ball={
    typeOfBall:"football",
    size:5,
    weight:0.320
}
let ballJson=JSON.stringify(ball);
console.log(ballJson);
let ballObject=JSON.parse(ballJson);
console.log(ballObject);

let car={
    brand:"wolcwagen",
    model:"PassatB6",
    motor:2.0
}
let carJson=JSON.stringify(car);
console.log(carJson);
let carObject=JSON.parse(carJson);
console.log(carObject);

let house={
    windows:20,
    doors:7,
    floor:8
}
let houseJson=JSON.stringify(house);
console.log(houseJson);
let houseObject=JSON.parse(houseJson);
console.log(houseObject);*/

//- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black'
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown'
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate'
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black'
    },
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white'
    },
    {
        name:'zaz',
        model:'zapor',
        year:1988,
        motor:1.0,
        color:'white'
    },
    {
        name:'mitsubishi',
        model:'lancer',
        year:2009,
        motor:2.4,
        color:'silver'
    },
    {
        name:'toyota',
        model:'avensis',
        year:2018,
        motor:1.4,
        color:'red'
    },
    {
        name:'mazda',
        model:'6',
        year:2019,
        motor:2.0,
        color:'green'
    }

];
for (let i = 0; i < cars.length; i++) {
    let carsJson=JSON.stringify(cars);
    console.log(carsJson);

}*/

//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
/*let cities=[
    {
        name:'Lviv',
        population:1000000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'New York',
        population:10000000,
        country:'Usa',
        region:'New York region'
    },
    {
        name:'Kamyanka-Buzka',
        population:12000,
        country:'Ukraine',
        region:'Lviv region'
    },
    {
        name:'Streptiv',
        population:3000,
        country:'Ukraine',
        region:'Kamyanka-Buzka region'
    },
    {
        name:'Warshawa',
        population:3000000,
        country:'Poland',
        region:'Warshawa region'
    }

];
for (let i = 0; i < cities.length; i++) {
    let citiesJson=JSON.stringify(cities);
    console.log(citiesJson);
}*/

//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
/*let cars=[
    {
        name:'bmw',
        model:'530',
        year:1999,
        motor:3.0,
        color:'white',
        driver:{
            name:'ivan',
            age:22,
            sex:'male',
            experience:2
        }

    },
    {
        name:'mers',
        model:'s600',
        year:2008,
        motor:2.0,
        color:'black',
        driver:{
            name:'petro',
            age:26,
            sex:'male',
            experience:4
        }
    },
    {
        name:'wolsw',
        model:'passat',
        year:2008,
        motor:2.0,
        color:'brown',
        driver:{
            name:'kolya',
            age:28,
            sex:'male',
            experience:8
        }
    },
    {
        name:'lada',
        model:'9890',
        year:1997,
        motor:1.5,
        color:'chocolate',
        driver:{
            name:'vika',
            age:21,
            sex:'female',
            experience:2
        }
    },
    {
        name:'lexus',
        model:'x300',
        year:2015,
        motor:3.0,
        color:'black',
        driver:{
            name:'igor',
            age:55,
            sex:'male',
            experience:25
        }
    }
];

for (let i = 0; i < cars.length; i++) {
    let carsJson=JSON.stringify(cars[i]);
    let newCars=[];
    newCars=JSON.parse(carsJson);
    console.log(newCars);
}*/

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
/*let users=[
    {
        name:'vova',
        age:26,
        weight:77,
        skills:['driver','footbool']
    },
    {
        name:'petya',
        age:45,
        weight:90,
        skills:['musicant','singer','teacher']
    },
    {
        name:'kolya',
        age:29,
        weight:86,
        skills:['programer','footbool','driver']
    }
];
let allSkills=[];
for (const user of users) {
    //console.log(user);
    for (const skill of user.skills){

        allSkills.push(skill);
    }

}
console.log(allSkills);*/


//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
/*let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
for (const user of users) {
    console.log(user);
    for (const skill of user.skills) {
        console.log(skill);
    }
}*/


//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];*/


/*let newAddress=[];
for (const user of users) {
    //console.log(user);
    //console.log(user.address);
    newAddress.push(user.address);
    let divka=document.createElement("div");
    divka.innerText=user.name+'\n'+user.age+'\n'+user.status+'\n'+user.address.country+', '+user.address.city+', '+user.address.street+', '+user.address.houseNumber;
    document.getElementById('coteiner').appendChild(divka);

}
console.log(newAddress);*/
/*for (const user of users) {
    let divka=document.createElement("div");
    let divname=document.createElement("div");
    divname.innerText=user.name;
    divka.appendChild(divname);

    let divage=document.createElement("div");
    divage.innerText=user.age;
    divka.appendChild(divage);

    let divstatus=document.createElement("div");
    divstatus.innerText=user.status;
    divka.appendChild(divstatus);

    let divaddress=document.createElement("div");
    divaddress.innerText=user.address.country+', '+user.address.city+', '+user.address.street+', '+user.address.houseNumber;
    divka.appendChild(divaddress);

    document.getElementById('coteiner').appendChild(divka);

}*/


/*document.getElementById('coteiner').style.display='flex';
let divname=document.createElement("div");
divname.id='name';
let divage=document.createElement("div");
divage.id='age';
let divstatus=document.createElement("div");
divstatus.id='status';
let divaddress=document.createElement("div");
divaddress.id='address';
document.getElementById('coteiner').appendChild(divname);
document.getElementById('coteiner').appendChild(divage);
document.getElementById('coteiner').appendChild(divstatus);
document.getElementById('coteiner').appendChild(divaddress);

for (let i = 0; i < users.length; i++) {
    document.getElementById('name').innerText+=users[i].name+'\n';
    document.getElementById('age').innerText+=users[i].age+'\n';
    document.getElementById('status').innerText+=users[i].status+'\n';
    document.getElementById('address').innerText+=users[i].address.country+', '+users[i].address.city+', '+users[i].address.street+', '+users[i].address.houseNumber+'\n';

}*/

//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
   //let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    //Записати цей об'єкт в новий масив
//Частковий приклад реультату:
    //let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}

// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id===city.user_id){
//                 user.address=city;
//         }
//
//     }
// }
// console.log(usersWithId);


//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//- змінити цей текст використовуючи селектори id, class,  tag
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elementById=document.getElementById('content');
// let innerText=elementById.innerText;
// console.log(innerText);

// let elementsByClaass=document.getElementsByClassName('rules');
// for (const element of elementsByClaass) {
//     element.innerText='heloo';
//
// }

// let elementsByTagName=document.getElementsByTagName('h2');
// //console.log(elementsByTagName);
// for (const element of elementsByTagName) {
//     element.innerText='hello';
//     element.style.background='red';
//     element.style.width='100px';
//     element.style.height='100px';
//
// }

//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table=document.createElement('table');
// let tr=document.createElement('tr');
// let td=document.createElement('td');
// let td2=document.createElement('td');
// let td3=document.createElement('td');
//
// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);
//
// table.appendChild(tr);
//
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let x=prompt('number');
// let y=prompt('number');
//
// let table=document.createElement('table');
// for (let i = 0; i < x; i++) {
//    let tr=document.createElement('tr');
//         for (let j = 0; j < y; j++) {
//             let td=document.createElement('td');
//             tr.appendChild(td);
//         }
//     table.appendChild(tr);
// }
//
//
//
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt


//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//- знайти всі елементі, які мають id
//- знайти всі параграфи ,та змінити текст на hello oktenweb!
  //  - знайти всі div та змінити ім колір на червоний

let elementsByTag=document.getElementsByTagName('*');
//console.log(elementsByTag);
for (const tag of elementsByTag) {
    if (tag.getAttribute('id')){
        console.log(tag);
    }
}
