// Drawing cats
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
};
drawCats(10); // Here changing variable

// Seconds i've lived

var secondsInAMinute = 60;
var minutesInAHour = 60;
var secondsInAHour = secondsInAMinute * minutesInAHour;
secondsInAHour;
3600

var hoursInADay = 24;
var secondsInADay = secondsInAHour * hoursInADay;
secondsInADay;
86400

var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
secondsInAYear;
31536000

var age = 25;
age * secondsInAYear;
788400000

// length of string

var streetName = "Altayskaya";
streetName.length;

10
var street = "street";
street.length;
6
var address = street + streetName;
address.length;
16

// slice string

var longString = "Карл у Клары украл кораллы";
longString.slice(4, 5);
" "
longString.slice(5, 6);
"у"
longString.slice(13);
"украл кораллы"

var string = "перестань кричать";
string.toUpperCase();
"ПЕРЕСТАНЬ КРИЧАТЬ"

var string = "Я НЕ КРИЧУ";
string.toLowerCase();
"я не кричу"

// boolean; can you go to a film

var age = 11;
var accompanion = true;
var canPass = age >= 12 || accompanion;
canPass;
true

var age = 12;
var accompanion = true;
var canPass = age >= 12 || accompanion;
canPass;
true

var age = 11;
var accompanion = false;
var canPass = age >= 12 || accompanion;
canPass;
false

// arrays

// creating an array
var dinosaurs = [ 
    "Тираннозавр", 
    "Велоцираптор", 
    "Стегозавр", 
    "Трицератопс", 
    "Брахиозавр", 
    "Птеранодон", 
    "Апатозавр", 
    "Диплодок", 
    "Компсогнат"
    ];
dinosaur[0];

// call for an element
dinosaurs[0];
"Тираннозавр"

dinosaurs[8];
"Компсогнат"

// reassign an element
dinosaurs[0] = "Тираннозавр рекс";
"Тираннозавр рекс"

// show array
dinosaurs;
["Тираннозавр рекс", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"]

// set a random index to an element
dinosaurs[33] = "Филосораптор";
"Филосораптор"

dinosaurs
["Тираннозавр рекс", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат", empty × 24, "Филосораптор"]0: "Тираннозавр рекс"1: "Велоцираптор"2: "Стегозавр"3: "Трицератопс"4: "Брахиозавр"5: "Птеранодон"6: "Апатозавр"7: "Диплодок"8: "Компсогнат"33: "Филосораптор"length: 34__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
dinosaurs[32]
undefined

// array with different types of elements

var dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];

dinosaursAndNumbers[2]; 
["трицератопс", "стегозавр", 3627.5]

dinosaursAndNumbers[2][0]; // find an element in array inside array
"трицератопс"


var maniacs = ["Якко", "Вакко", "Дот"]; 
maniacs[0];
"Якко"
maniacs[1];
"Вакко" 
maniacs[2]; 
"Дот"

maniacs.length;  // how many elements inside of an array 'length'
3

// show the last element
maniacs[maniacs.length - 1];
"Дот"

// add elements to an array using 'push'
var animals = [];
animals.push("Кот");
1
animals.push("Лама");
2
animals.push("Медведь");
3
animals
(3) ["Кот", "Лама", "Медведь"]
animals.length;
3

// add an element to the beginning of an array using 'unshift'

animals.unshift("Конь");
4
animals;
(4) ["Конь", "Кот", "Лама", "Медведь"]

animals
(5) ["Свинья", "Пантера", "Конь", "Кот", "Лама"]

animals.pop(); // delete the last element of an array
lastAnimal;

var lastAnimal = animals.pop(); // delete and save as an variable
lastAnimal;
"Кот"

animals
(3) ["Свинья", "Пантера", "Конь"]
animals.unshift(lastAnimal); // add back saved element
4

animals
(4) ["Кот", "Свинья", "Пантера", "Конь"]

var firstAnimal = animals.shift(); // deletes first element
firstAnimal;
"Кот"

animals
(3) ["Свинья", "Пантера", "Конь"]

// 'concat' unites arrays in one
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"]; 
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
(5) ["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла"]
furryAnimals;
(3) ["Альпака", "Кольцехвостый лемур", "Йети"]
scalyAnimals;
(2) ["Удав", "Годзилла"]

var featheredAnimals = ["Ара", "Додо"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals); // more than two arrays unites ussing comma
furryAndScalyAnimals;
(7) ["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла", "Ара", "Додо"]

// find an index of an element

var colors = ["серый", "красный", "синий"];
colors.indexOf("синий");
2
colors.indexOf("серый");
0
colors.indexOf("зелёный");
-1

// create a string from an array using 'join()'

var boringAnimals = ["Жираф", "Слон", "Змея", "Попугай"];
boringAnimals.join();
"Жираф,Слон,Змея,Попугай"

boringAnimals.join("*"); // set a separator
"Жираф*Слон*Змея*Попугай"

boringAnimals.join(";");
"Жираф;Слон;Змея;Попугай"

boringAnimals.join("-");
"Жираф-Слон-Змея-Попугай"

boringAnimals.join(" ");
"Жираф Слон Змея Попугай"

// show a random element

Math.random();
0.02063409485283052

Math.floor(0.02063409485283052); // round up
0

Math.floor(Math.random() * 4);
3

var randomWords = ["Книга", "Стол", "Градусник", "Жизнь"];
var randomIndex = Math.floor(Math.random() * 4);

randomWords[randomIndex];
"Градусник"

randomWords[Math.floor(Math.random() * 4)];
"Градусник"

// generate random phrases
var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать", 
    "Не думаю, что это хорошая идея", 
    "Может, не сегодня?",
    "Компьютер говорит нет"
    ];

// Мне выпить еще молочного коктейля?
phrases[Math.floor(Math.random() * 5)];
"Да, это определенно надо сделать"
// Пора прогуляться?
phrases[Math.floor(Math.random() * 5)];
"Не думаю, что это хорошая идея"

// objects

var avocado = {
    color: "green",
    bone: 1,
    dishes: ["toast", "salad", "guacamole"]
};

Object.keys(avocado); // showing keys
(3) ["color", "bone", "dishes"]

avocado.bone; // key value
1
avocado["dishes"];
(3) ["toast", "salad", "guacamole"]

var salad = {}; // adding elements to an object, also can add using ["key_name"]
salad.dressing = "olive oil";
salad.ingredients = ["tomato", "pumpkin", "greens", "avocado"];
salad.temp = "warm";

// objects array
var dinner = [
    { dish: "salad", name: "potato salad" },
    { dish: "soup", name: "pumpkin soup" }
];
dinner[0];
{dish: "salad", name: "potato salad"}
dinner[0]["name"];
"potato salad";

var owedMoney = {};

owedMoney["Jimmy"] = 5;
owedMoney["Alice"] = 10;
10
owedMoney.Alice;
10
owedMoney["Jimmy"] += 3;
8
owedMoney;
{Jimmy: 8, Alice: 10}

// arrays has order, objects hasn't, they're not numbered


// functions
var ourFirstFunction = function () {
    console.log("Hello, world");
};
ourFirstFunction(); //call a function

var sayHelloTo = function (name) { 
    console.log("Привет, " + name + "!");
};
    sayHelloTo("Janice"); // we're using "argument" for changing function. here "name" is an argument

// you can have multiple arguments in function
function (argument1, argument2) { 
    console.log("Первый аргумент: " + argument1); 
    console.log("Второй аргумент: " + argument2);
}

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(5, "0__o");

// returning value for using it after
var double = function (number) {
    return number * 2;
};
double(5);
10

double(4) + double(10);
28

// choosing a random word
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
pickRandomWord(randomWords);
"Червяк"
pickRandomWord(randomWords);
"Цветок"
pickRandomWord(["Чарли", "Радж", "Николь", "Кейт", "Сэнди"]);
"Сэнди"
pickRandomWord(["Чарли", "Радж", "Николь", "Кейт", "Сэнди"]);
"Кейт"

// upgrading insult maker using function upward
var generateRandomInsult = function () {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
    return randomString;
};
// calling function 
generateRandomInsult();

// exit function if arguments has incorrect values
var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    };
return "Fifth letter of your name is " + name[4] + ".";
};
// if you call fifthLetter("Janice")
// computer answers "Fifth letter of your name is c."
// if you call fifthLetter("Dick")
// computer answers "undefined"

//short variant of typing function
function medalForScore(score) {
    if (score < 3) {
        return "Bronse";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold";
};
medalForScore(10);
"Gold"

// you don't set variable here


// count number 36325 * 9824 + 777
function add(number1, number2) {
    return number1 + number2;
};
function multiply(number3, number4) {
    return number3 * number4;
};
add(multiply(3625, 9824), 777);

35612777

36325 * 9824 + 777
  multiply  add 
number1 + number3
nember1 = number3 * number4
add(multiply(3625, 9824), 777);

// compare arrays
function areArraysSame(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    };
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        };
    };
    return true;
};
areArraysSame([1, 2], [1, 3]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [4, 5, 6]);
false


// DOM helps JS interact with web-pages
// method getElementById helps find an HTML element by Id
// var canvas = document.getElementById("canvas"); here finds an element with Id "canvas" and saves it in var "canvas"
// jQuery library is a set of elements (functions) that makes interaction with DOM easier
// to use jQuery you have to download it <script src="https://code.jquery.com/jquery-2.1.0.js"></script>
// you can change elements (text) or create new (append) using jQuery
// jQuery can also be used for animations, for e.g. fadeOut / fadeIn
// chaining in jQuery helps to call methods one by one: $("h1").text("Этот текст скоро исчезнет").fadeOut(3000); 
// this example first changes text and then creates animation
// this is chained animation $("h1").fadeOut(3000).fadeIn(2000);

// Interactive programming. With it your code can be started not immediately or with intervals
// setTimeout helps delay start of JS
var doHomeworkAlarm = function () { 
    alert("Эй! Пора делать домашку!");
};
var timeoutId = setTimeout(doHomeworkAlarm, 60000);
// timeout sets setTimeout(func, timeout)
// clearTimeout(timeoutId); stops timeout

// you also can set intervals by using setInterval(func, interval)
var counter = 5;
var printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек");   
    counter += 5;
};
var intervalId = setInterval(printMessage, 5000); 

clearInterval(intervalId);

// using setInterval we can animate objects
// $("#heading").offset({ left: leftOffset }); 
// offset makes object move using property "left" or "top"

// by JS we can create some feedback for user
// JS can react on some events such as click, scroll, hover etc.
// use event handlers to follow events: "If this event happens, do that"
// If user click on heading, send coordinates
var clickHandler = function(event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);


// #2,3

var leftOffset = 0;
var topOffset = 0;
var currentDirection = "toRight"; // toBottom, toLeft, toTop
var animationState = "off";
var intervalId;

var moveHeading = function () {
    if (currentDirection === "toRight") {
        leftOffset++;
        if (leftOffset === 200) {
            currentDirection = "toBottom";
        };
    };

    if (currentDirection === "toBottom") {
        topOffset++;
        if (topOffset === 200) {
            currentDirection = "toLeft";
        };
    };

    if (currentDirection === "toLeft") {
        leftOffset--;
        if (leftOffset === 0) {
            currentDirection = "toTop";
        };
    };

    if (currentDirection === "toTop") {
        topOffset--;
        if (topOffset === 0) {
            currentDirection = "toRight";
        };
    };


    $("#heading").offset({ left: leftOffset, top: topOffset });
};

$("html").click(function() {
    if (animationState === "off") {
        intervalId = setInterval(moveHeading, 10);
        animationState = "on";
    }
    else {
        clearInterval(intervalId);
        animationState = "off";

    };
    console.log(intervalId, animationState);
});

// object-oriented programming

// except numbers, rows and boolleans you can add functions to objects
// these functions become "methods"

// we create object
var dog = {
    name: "Оладушек", 
    legs: 4, 
    isAwesome: true
};

dog.age = 6; // adding new property

// adding method "bark"
dog.bark = function () { 
    console.log("Гав-гав! Меня зовут " + this.name + "!");
};

// "this" used in method helps to contact with object
// it helps to reuse this method in other objects without creating new

var speak = function () {
    console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var cat = {
    sound: "Мяу", 
    name: "Варежка",
    speak: speak 
};

cat.speak();
// console
Мяу! Меня зовут Варежка!

// reusing

var pig = { 
    sound: "Хрю", 
    name: "Чарли", 
    speak: speak
};
var horse = {
    sound: "И-го-го", 
    name: "Мэри", 
    speak: speak
};
horse.speak();
// console
И-го-го! Меня зовут Мэри!
    

pig.speak();
// console
Хрю! Меня зовут Чарли!


// JS object constructor
var car = new Car(100, 200)
// car - new object; Car - constructor name; (100, 200) - arguments
// constructors named via capital letter to define ot from functions

// canvas

// to use canvas you have to add it to your html <canvas id="canvas" width="200" height="200"></canvas>
// var ctx = canvas.getContext("2d"); creates context of drawing by method "getContext"
// here we use "2d", what means that our image will be two-dimentional