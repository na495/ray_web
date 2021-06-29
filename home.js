let section = document.querySelector('.section');
var text = document.querySelector('.text');
var span = document.querySelector('span');
var title_div = document.querySelector('.title_div');
var title_img = document.querySelector('.title_img');
var body = document.querySelector('body');



//스크롤을 내릴 때 발생하는 이벤트
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center center)";
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

    if (scrollLocation > 55) {
        title_div.style.visibility = "hidden"
        text.style.display = "none"
        if (scrollLocation > 945) {
            Fadein()
        }
        if (scrollLocation > 1724) {
            section.style.display = "none"
        } else {
            section.style.display = "block"
        }
    } else {
        title_div.style.visibility = "visible"
        text.style.display = "block"
    }
})

// 모바일로 봤을 때
function Mobile() {
    var error_ = document.querySelector('.Error')
    var body = document.querySelector(".none")
    body.classList.toggle('view')
    error_.classList.toggle('hidden')
}


// 1섹션 왼쪽 페이지 보이기
var container_box = document.querySelector('.container_box')
var PFtext = document.querySelector('.Profile_')
var PJtext = document.querySelector('.Project_')
var Ttext = document.querySelector('.Team_')


function Profile() {
    container_box.classList.remove('hidden')
    PFtext.classList.toggle('hidden')

    PJtext.classList.add('hidden')
    Ttext.classList.add('hidden')
}

function Project() {
    container_box.classList.remove('hidden')
    PJtext.classList.toggle('hidden')

    PFtext.classList.add('hidden')
    Ttext.classList.add('hidden')
}

function Team() {
    container_box.classList.remove('hidden')
    Ttext.classList.toggle('hidden')

    PJtext.classList.add('hidden')
    PFtext.classList.add('hidden')
}

function esc() {
    container_box.classList.add('hidden')
    PJtext.classList.add('hidden')
    PFtext.classList.add('hidden')
    Ttext.classList.add('hidden')
}