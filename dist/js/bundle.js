!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e){var n=document.querySelector(".shadow");hamburger=document.querySelector(".hamburger"),navbar=document.querySelector(".navbar"),dropDownList=document.querySelector(".drop-down-list");var r=function(){return n.classList.remove("shadow-active")},o=function(){return dropDownList.classList.remove("active")};n.addEventListener("click",function(){r(),o(),navbar.classList.remove("active")}),hamburger.addEventListener("click",function(){navbar.classList.contains("active")?(r(),o(),navbar.classList.remove("active")):(navbar.classList.add("active"),dropDownList.classList.add("active"),n.classList.add("shadow-active"))}),window.onload=function(){var t=document.querySelectorAll("#wrap span"),e=document.querySelector("#wrap"),n=t.length,r=e.offsetWidth/2+30,o=e.offsetWidth/2+30;for(i=0;i<n;i++){var a=2/n*i*Math.PI,c=360/n,s=90-i*c+"deg",u=180+i*c,l=r+o*Math.sin(a)+"px",d=r+o*Math.cos(a)+"px";t[i].style="left:".concat(l,"; \n                            top:").concat(d,";\n                            transform: translate(-45px, -35px) rotate(").concat(s,");"),t[i].setAttribute("rotate",u)}var f,v=function(){return t.forEach(function(t){return t.classList.remove("active")})},m=function(){setTimeout(function(){var t=document.querySelector(".active"),e=document.querySelector(".gradient-text");document.querySelector(".description").innerHTML=t.getAttribute("description"),e.innerHTML=t.innerHTML},1e3)};t.forEach(function(t){t.addEventListener("click",function(){v();var n=t.getAttribute("rotate");e.style.transform="translateX(-50%) rotate(".concat(n,"deg)");setTimeout(function(){t.classList.add("active"),m()},500)})}),(f=document.querySelector(".roll")).addEventListener("mouseover",function(n){window.onscroll=function(){var t=window.scrollX,e=window.scrollY;window.onscroll=function(){window.scrollTo(t,e)}},f.addEventListener("wheel",function(n){var r=n.deltaY,o=e.style.transform.split("rotate(")[1],i=function(){return e.style.transform="translateX(-50%) rotate(".concat(next,"deg)")},a=function(){return e.style.transform="translateX(-50%) rotate(".concat(next,"deg)")},s=document.querySelector(".active"),u=function(){s.previousElementSibling?(v(),s.previousElementSibling.classList.add("active")):(v(),t[t.length-1].classList.add("active"))},l=function(){s.nextElementSibling?(v(),s.nextElementSibling.classList.add("active")):(v(),t[0].classList.add("active"))};if(r>10)o?(u(),m(),o.toString().split("deg")[0],next=parseInt(o)-c,i()):(u(),m(),next=180-c,i());else{if(!(r<-10))return;o?(l(),m(),o.toString().split("deg")[0],next=parseInt(o)+c,e.style.transform="translateX(-50%) rotate(".concat(next,"deg)"),a()):(l(),m(),next=180+c,a())}})}),(f=document.querySelector(".roll")).addEventListener("mouseout",function(t){window.onscroll=function(){}})}},function(t,e,n){}]);
//# sourceMappingURL=bundle.js.map