let section = document.querySelector('.section');
var text = document.querySelector('.text');
var span = document.querySelector('span');
var title_div = document.querySelector('.title_div');
var title_img = document.querySelector('.title_img');

var container = document.querySelector('.container');



//스크롤을 내릴 때 발생하는 이벤트
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center center)";
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

    if (scrollLocation > 55) {
        title_div.style.visibility = "hidden"
        text.style.display = "none"

        if (scrollLocation > 786) {
            section.style.display = "none"
            container.style.visibility = "visible"


        } else {
            section.style.display = "block"
            container.style.visibility = "hidden"
        }
    } else {
        title_div.style.visibility = "visible"
        text.style.display = "block"
    }
})

// 이름 호버

var myname = document.querySelector('.name')
myname.addEventListener('mouseover', function() {
    myname.innerText = "레이"
})
myname.addEventListener('mouseout', function() {
    myname.innerText = "김나연"
})

// 모바일로 봤을 때
function Mobile() {
    var error_ = document.querySelector('.Error')
    var body = document.querySelector(".none")
    body.classList.toggle('view')
    error_.classList.toggle('hidden')
}