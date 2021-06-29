// 배열 표시

console.log(project)
for (var i in project) {
    var PJ = project[i];
    document.querySelector('.num1').innerHTML +=
        `<div class="swiper-slide ${PJ.class}" style="background-image: url('${PJ.img}');" onClick="location.href='./project/project_text.html?index=${i}&category=-1'">
            <p class="slide_title">${PJ.day}</p>
            <div class="text_Box">
                <p>${PJ.title}</p>
            </div>
         </div>`;
}
for (var i in project2) {
    var PJ2 = project2[i];
    document.querySelector('.num2').innerHTML +=
        `<div class="swiper-slide ${PJ2.class}" style="background-image: url('${PJ2.img}');" onClick="category=-1;location.href='./project/project_text.html?index=${i}&category=1'">
            <p class="slide_title">${PJ2.day}</p>
            <div class="text_Box">
                <p>${PJ2.title}</p>
            </div>
         </div>`;
}


// 슬라이더

const swiper = new Swiper('.swiper-container', {
    //기본 셋팅
    //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
    direction: 'horizontal',
    //한번에 보여지는 페이지 숫자
    slidesPerView: 3,
    //페이지와 페이지 사이의 간격
    spaceBetween: 30,
    //드레그 기능 true 사용가능 false 사용불가
    debugger: true,
    //마우스 휠기능 true 사용가능 false 사용불가
    mousewheel: false,
    //반복 기능 true 사용가능 false 사용불가
    loop: true,
    //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
    centeredSlides: true,
    // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
    // effect: 'fade',


    //자동 스크를링
    autoplay: {
        //시간 1000 이 1초
        delay: 2500,
        disableOnInteraction: false,
    },

    //페이징
    pagination: {
        //페이지 기능
        el: '.swiper-pagination',
        //클릭 가능여부
        clickable: true,
    },

    //방향표
    navigation: {
        //다음페이지 설정
        nextEl: '.swiper-button-next',
        //이전페이지 설정
        prevEl: '.swiper-button-prev',
    },

});