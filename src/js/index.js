var shadow = document.querySelector('.shadow');
    hamburger = document.querySelector('.hamburger');
    navbar = document.querySelector('.navbar');
    dropDownList = document.querySelector('.drop-down-list');

var shadowOn = () => shadow.classList.add('shadow-active');
var shadowOff = () => shadow.classList.remove('shadow-active');

var dropDownListOn = () => dropDownList.classList.add('active');
var dropDownListOff = () => dropDownList.classList.remove('active');


shadow.addEventListener('click', () => {
    shadowOff();
    dropDownListOff();
    navbar.classList.remove('active')
})


hamburger.addEventListener('click', () => {
    if (navbar.classList.contains('active')){
    shadowOff();
    dropDownListOff();
    navbar.classList.remove('active')
    } else {
    navbar.classList.add('active')
    dropDownListOn();
    shadowOn();
    }
})


window.onload = function () {
    var allSpan = document.querySelectorAll('#wrap span');
    var container = document.querySelector('#wrap');
    var num = allSpan.length; // Колличество span
    var wrap = (container.offsetWidth / 2) + 30; // Размер "холста" для расположения картинок
    var radius = (container.offsetWidth / 2) + 30; // Радиус нашего круга


    for (i = 0; i < num; i++){
        var f = 2 / num * i * Math.PI;  // Рассчитываем угол каждой картинки в радианах
        var rotateDeg = 360 / num; // шаг поворота
        var deg = (90 - ( i * rotateDeg )) + 'deg';

        var left = wrap + radius * Math.sin(f) + 'px';
        var top = wrap + radius * Math.cos(f) + 'px';

        allSpan[i].style.left = left;
        allSpan[i].style.top = top;
        allSpan[i].style.transform = `translate(-48px, -40px) rotate(${deg})`;
        ;

    }
}

