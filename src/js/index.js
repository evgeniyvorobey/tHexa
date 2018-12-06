console.log('-----------Тестовое задание сделал Евгений Воробей')


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



var allSpan = document.querySelectorAll('#wrap span');
var container = document.querySelector('#wrap');
var num = allSpan.length; // Колличество span
var wrap = (container.offsetWidth / 2) + 30; // Размер "холста" для расположения картинок
var radius = (container.offsetWidth / 2) + 30; // Радиус нашего круга
var rotateDeg = 360 / num; // Шаг поворота

for (i = 0; i < num; i++) {
    var f = 2 / num * i * Math.PI;  // Угол елемента в радианах
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
    item.addEventListener('click', function (e) {

        if (document.body.clientWidth >= 768){
            clearAllActivClass();

            var rotate = item.getAttribute('rotate');
            container.style.transform = `translateX(-50%) rotate(${rotate}deg)`;

            var click = () => {
                item.classList.add('active')
                setInfo();
            }
            setTimeout(click,500);
        }

    })
})



// var activeElement = document.querySelector('.active');
var nextFunc = () => {
    var activeElement = document.querySelector('.active');

    if (activeElement.previousElementSibling){
        clearAllActivClass();
        activeElement.previousElementSibling.classList.add('active');
    } else {
        clearAllActivClass();
        allSpan[allSpan.length-1].classList.add('active');
    }
}

var prevFunc = () => {
    var activeElement = document.querySelector('.active');

    if (activeElement.nextElementSibling){
        clearAllActivClass();
        activeElement.nextElementSibling.classList.add('active');
    } else {
        clearAllActivClass();
        allSpan[0].classList.add('active');
    }
}

var nextEl = () => {
    var style = container.style.transform.split('rotate(')[1];
    if ( style ) {
        style.toString().split('deg')[0];
        next = parseInt(style) - rotateDeg;
    } else {
        next = 180 - rotateDeg;
    }
    document.querySelector('#wrap').style.transform = `translateX(-50%) rotate(${next}deg)`;

}
var prevEl = () => {
    var style = container.style.transform.split('rotate(')[1];
    if(style) {
        style.toString().split('deg')[0];
        next = parseInt(style) + rotateDeg;
    } else {
        next = 180 + rotateDeg;
    }
    document.querySelector('#wrap').style.transform = `translateX(-50%) rotate(${next}deg)`;
}

//wheel listener
var scrollContainer = document.querySelector('.roll');

scrollContainer.addEventListener('mouseover', e => {

    if (document.body.clientWidth >= 1366) {
        window.onscroll = function (e) {
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = () => window.scrollTo(x, y);
        };

        scrollContainer.addEventListener('wheel', e => {
            var wheel = e.deltaY;
            // var style = container.style.transform.split('rotate(')[1];

            var activeElement = document.querySelector('.active');
            if ( wheel > 5) {
                    nextFunc();
                    setInfo();
                    nextEl();
            } else if (wheel < -5) {
                    prevFunc();
                    setInfo();
                    prevEl();
            } else {
                return
            }
        })
    }
})

scrollContainer.addEventListener('mouseout', e => {
    window.onscroll=function(){};
})





//---------------------touch listener
var startX,
    startY,
    left = -100,
    right = 100,
    dist,
    startTime

function handleSwipe(dist) {
    var activeElement = document.querySelector('.active');
    var style = container.style.transform.split('rotate(')[1];
    setInfo();
    if (dist > right){
        nextFunc();
        nextEl();
    } else if (dist < left) {
        prevFunc();
        prevEl();
    } else {
    return}
}

scrollContainer.addEventListener('touchstart', e => {
    var touchobj = e.changedTouches[0]
    startX = touchobj.pageX
    startY = touchobj.pageY
    e.preventDefault()
})

scrollContainer.addEventListener('touchmove', e => {
    e.preventDefault()
})

scrollContainer.addEventListener('touchend', e => {
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX
    handleSwipe(dist)
    e.preventDefault()
})



















