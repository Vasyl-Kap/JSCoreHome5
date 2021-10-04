let backgroundColor = +prompt("Введіть цифру, яка відповідає бажаному фону для сторінки з наведених далі: 1=синій, 2=жовтий, 3=зелений чи 4=градієнт!");
let background = document.querySelector('body');
if (backgroundColor === 1) {
    background.style.backgroundColor = 'blue';
}
else if (backgroundColor === 2) {
    background.style.backgroundColor = 'yellow';
}
else if (backgroundColor === 3) {
    background.style.backgroundColor = 'green';
}
else if (backgroundColor === 4) {
    let gradient = "background-image:linear-gradient(to left, #1f4037, #99f2c8)";
    background.style.cssText = gradient;
}
else {
    background.style.backgroundColor = 'white';
}
console.log(background)

let textStyle = +prompt("Введіть цифру, яка відповідає типу бажаного шрифта на сайті з наведених далі: 1=Arial, 2=Lucida, 3=Microsoft чи 4=Comic");
let text = document.querySelectorAll('h1, h2, p, a, li');
for (const elements of text) {
    if (textStyle === 1) {
        elements.style.fontFamily = 'Arial, Helvetica, sans-serif';
    }
    else if (textStyle === 2) {
        elements.style.fontFamily = 'Lucida Sans Unicode, Lucida Grande, sans-serif';
    }
    else if (textStyle === 3) {
        elements.style.fontFamily = "'MS Sans Serif', Geneva, sans-serif";
    }
    else if (textStyle === 4) {
        elements.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
    }
    else {
        elements.style.fontFamily = 'Times New Roman, Times, serif';
    }
}
console.log(text)

let textAlign = +prompt("Введіть цифру, яка відповідає бажаному вирівнюванню для заголовку з наведених далі: 1=зліва, 2=по центру, 3=зправа");
let align = document.querySelector('h1');
if (textAlign === 1) {
    align.style.textAlign = 'left';
}
else if (textAlign === 2) {
    align.style.textAlign = 'center';
}
else if (textAlign === 3) {
    align.style.textAlign = 'right';
}
else {
    align.style.textAlign = 'start';
}
console.log(align)

let pFon = +prompt("Введіть цифру, яка відповідає бажаному фону для параграфу з посилланями із наведених далі: 1=голубий, 2=фіолетовий, 3=коричневий чи 4=градієнт!");
let fon = document.querySelector('p');
if (pFon === 1) {
    fon.style.backgroundColor = 'lightblue';
}
else if (pFon === 2) {
    fon.style.backgroundColor = 'violet';
}
else if (pFon === 3) {
    fon.style.backgroundColor = 'brown';
}
else if (pFon === 4) {
    let pGradient = "background-image:linear-gradient(to right, #bdc3c7, #2c3e50)";
    fon.style.cssText = pGradient;
}
else {
    fon.style.backgroundColor = 'white';
}
console.log(fon)

let pText = +prompt("Введіть цифру, яка відповідає бажаному кольру тексту для параграфу з посилланями із наведених далі: 1=сірий, 2=білий, 3=темно-синій чи 4=салатовий");
let textPar = document.querySelector('p');
if (pText === 1) {
    textPar.style.color = 'grey';
}
else if (pText === 2) {
    textPar.style.color = 'white';
}
else if (pText === 3) {
    textPar.style.color = "darkblue";
}
else if (pText === 4) {
    textPar.style.color = "lightgreen";
}
else {
    textPar.style.color = 'black';
}

let linkColor = +prompt("Введіть цифру, яка відповідає бажаному кольру посилань для параграфу з посилланями із наведених далі: 1=червоний, 2=синій, 3=жовтий");
let link = document.getElementsByTagName('a');
for (let i = 0; i < link.length; i++) {
    console.log(link[i]);
    if (linkColor === 1) {
        link[i].style.color = 'red';
    }
    else if (linkColor === 2) {
        link[i].style.color = 'blue';
    }
    else if (linkColor === 3) {
        link[i].style.color = "yellow";
    }
    else {
        link[i].style.color = 'black';
    }
}

let divColor = prompt("Введіть, будь ласка, латиницею бажаний колір для тексту в блоці зі списком (приклад: blue, yelow або т.п.)");
let divSize = prompt("Введіть, будь ласка, розмір тексту в блоці зі списком (приклад: 24px)");
let divWeight = +prompt("Введіть, будь ласка, товщину тексту в блоці зі списком (приклад: 400, 700 і т.п.)");
let div = document.querySelectorAll('h2, li');
console.log(div)
for (const elem of div) {
    elem.style.color = `${divColor}`;
    elem.style.fontSize = `${divSize}`;
    elem.style.fontWeight = `${divWeight}`;
}

let ulMarker = +prompt("Введіть цифру, яка відповідає бажаному типу маркера у списку: 1=roman, 2=circle, 3=square");
let liMark = document.querySelector('ul');
if (ulMarker === 1) {
    liMark.style.listStyleType = 'upper-roman';
}
else if (ulMarker === 2) {
    liMark.style.listStyleType = 'circle';
}
else if (ulMarker === 3) {
    liMark.style.listStyleType = "square";
}
else {
    liMark.style.listStyleType = '';
}
console.log(liMark)
