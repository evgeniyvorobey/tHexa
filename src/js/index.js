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