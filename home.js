let section = document.querySelector('.section');
var text = document.querySelector('.text');
var span = document.querySelector('span');
var title_div = document.querySelector('.title_div');
var title_img = document.querySelector('.title_img');



//스크롤을 내릴 때 발생하는 이벤트
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center center)";
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

    if (scrollLocation > 55) {
        title_div.style.visibility = "hidden"
        text.style.display = "none"

        if (scrollLocation > 1700) {
            section.style.display = "none"

        } else {
            section.style.display = "block"
        }
    } else {
        title_div.style.visibility = "visible"
        text.style.display = "block"
    }
})

// 그림자
// let box = document.querySelector('.c1');
// let shadow = '';
// for (var i = 0; i < 100; i++) {
//     shadow += (shadow ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px 0 #e1e5ed';
// }
// box.style.boxShadow = shadow;



// 모바일로 봤을 때
function Mobile() {
    var error_ = document.querySelector('.Error')
    var body = document.querySelector(".none")
    body.classList.toggle('view')
    error_.classList.toggle('hidden')
}


// Gsap