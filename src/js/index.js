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

    for (i = 0; i < num; i++) {
        var f = 2 / num * i * Math.PI;  // Угол елемента в радианах
        var rotateDeg = 360 / num; // Шаг поворота
        var deg = (90 - (i * rotateDeg)) + 'deg'; //Угол
        var toThisItemRotate = 180 + ( i * rotateDeg ); // transition: rotate до елемента
        var left = wrap + radius * Math.sin(f) + 'px';
        var top = wrap + radius * Math.cos(f) + 'px';

        allSpan[i].style = `left:${left}; 
                            top:${top};
                            transform: translate(-45px, -35px) rotate(${deg});`;

        allSpan[i].setAttribute('rotate', toThisItemRotate);
    }

    var clearAllActivClass = () => allSpan.forEach(item => item.classList.remove('active'));

    var setInfo = () => {
        setTimeout(function () {
            var active = document.querySelector('.active')
            var yearContainer = document.querySelector('.gradient-text');
            var descriptionContainer = document.querySelector('.description');
            descriptionContainer.innerHTML = active.getAttribute('description');
            yearContainer.innerHTML = active.innerHTML;
        },1000)
    }
    // click listener
    allSpan.forEach(item => {
        item.addEventListener('click', function () {

            clearAllActivClass();

            var rotate = item.getAttribute('rotate');
            container.style.transform = `translateX(-50%) rotate(${rotate}deg)`;

            var click = () => {
                item.classList.add('active')
               setInfo();
            }
            setTimeout(click,500);
        })
    })




    //wheel listener
    var scrollContainer = document.querySelector('.roll');
    scrollContainer.addEventListener('mouseover', e => {
        window.onscroll = function () {
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};
        };


        scrollContainer.addEventListener('wheel', e => {

            var wheel = e.deltaY;
            var style = container.style.transform.split('rotate(')[1];
                 // console.log(e)


            var nextEl = () => container.style.transform = `translateX(-50%) rotate(${next}deg)`;
            var prevEl = () => container.style.transform = `translateX(-50%) rotate(${next}deg)`;
            var activeElement = document.querySelector('.active');

            var nextFunc = () => {
                if (activeElement.previousElementSibling){
                    clearAllActivClass();
                    activeElement.previousElementSibling.classList.add('active');
                } else {
                    clearAllActivClass();
                    allSpan[allSpan.length-1].classList.add('active');
                }
            }
            var prevFunc = () => {
                if (activeElement.nextElementSibling){
                    clearAllActivClass();
                    activeElement.nextElementSibling.classList.add('active');
                } else {
                    clearAllActivClass();
                    allSpan[0].classList.add('active');
                }
            }

            if ( wheel > 10) {
                if (style) {
                    nextFunc();
                    setInfo();
                    style.toString().split('deg')[0];
                    next = parseInt(style) - rotateDeg;
                    nextEl();
                } else {
                    nextFunc();
                    setInfo();
                    next = 180 - rotateDeg;
                    nextEl();
                }
            } else if (wheel < -10) {
                if (style) {
                    prevFunc();
                    setInfo();
                    style.toString().split('deg')[0];
                    next = parseInt(style) + rotateDeg;
                    container.style.transform = `translateX(-50%) rotate(${next}deg)`
                    prevEl();
                } else {
                    prevFunc();
                    setInfo();
                    next = 180 + rotateDeg;
                    prevEl();
                }
            } else {
                return
            }

        })


    })
    var scrollContainer = document.querySelector('.roll');
    scrollContainer.addEventListener('mouseout', e => {
        window.onscroll=function(){};
    })



}


