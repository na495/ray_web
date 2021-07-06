var Box = document.querySelector('.boxBt')

var M1 = document.querySelector('.M1')
var M2 = document.querySelector('.M2')
var M4 = document.querySelector('.M4')

var num = 0

window.onload = function() {
    num = 0
    a()
}

M1.onclick = function() {
    Box.style.backgroundColor = "#d6c2e4"
    num = 0
    a()
}
M2.onclick = function() {
    Box.style.backgroundColor = "#c4e2d5"
    num = 1
    color = '${TP.color}'
    a()
}
M4.onclick = function() {
    Box.style.backgroundColor = "#e8bfd5"
    num = 2
    a()
}

function a() {
    var TP = Teamproject[num];
    document.querySelector('.con_').innerHTML =
        `
    <h3>${TP.title}</h3>
    <br><br>
    <div class="why">
        <p style="color:${TP.color};">WHY</p><br>
        <p class="why_ title">${TP.why}</p>
    </div>
    <br><br>
    <div class="how">
        <p style="color:${TP.color};">HOW</p><br>
        <p class="how_ title">${TP.how}</p>
    </div>
    <br><br>
    <div class="what">
        <p style="color:${TP.color};">WHAT</p><br>
        <p class="what_ title">${TP.what}</p>
    </div>
    <br><br>
    <div class="me">
        <p style="color:${TP.color};">느낀 점</p><br>
        <p class="me_ title">${TP.text}</p>
    </div>
    ${TP.content}
    <div class="url">
        <div class="notion" onclick="window.open('${TP.url1}')">
            <img src="./project/project_img/notion.jpg">
            <p>NOTION</p>
        </div>
        <div class="google" onclick="window.open('${TP.url2}')">
            <img src="./project/project_img/google.png">
            <p>GOOGLE DRIVE</p>
        </div>
    </div>`
}