window.onload = function() {
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());
    var num = params.index;
    var category = params.category;
    var con = project[num];
    var con2 = project2[num];

    if (category == -1) {
        document.querySelector('.toptitle').innerText += con.title
        document.querySelector('.con__').innerHTML +=
            `<br>
        <div class="why">
            <p class="text">WHY</p><br>
            <p class="why_ title">${con.why}</p>
        </div>
        <br><br>
        <div class="how">
            <p class="text">HOW</p><br>
            <p class="how_ title">${con.how}</p>
        </div>
        <br><br>
        <div class="what">
            <p class="text">WHAT</p><br>
            <p class="what_ title">${con.what}</p>
        </div>
        <br><br>
        <div class="me">
            <p class="text">느낀 점</p><br>
            <p class="me_ title">${con.text}</p>
        </div>`

        document.querySelector('.file').innerHTML +=
            `
            <div class="con">
                ${con.content}
            </div>
            <div class="url">
                <div class="notion" onclick="window.open('${con.url1}')">
                    <img src="./project_img/notion.jpg">
                    <p>NOTION</p>
                </div>
                <div class="google" onclick="window.open('${con.url2}')">
                    <img src="./project_img/google.png">
                    <p>GOOGLE DRIVE</p>
                </div>
            </div>`
    } else if (category == 1) {
        document.querySelector('.toptitle').innerText += con2.title
        document.querySelector('.con__').innerHTML +=
            `<br>
        <div class="why">
            <p class="text">WHY</p><br>
            <p class="why_ title">${con2.why}</p>
        </div>
        <br><br>
        <div class="how">
            <p class="text">HOW</p><br>
            <p class="how_ title">${con2.how}</p>
        </div>
        <br><br>
        <div class="what">
            <p class="text">WHAT</p><br>
            <p class="what_ title">${con2.what}</p>
        </div>
        <br><br>
        <div class="me">
            <p class="text">느낀 점</p><br>
            <p class="me_ title">${con2.text}</p>
        </div>`

        document.querySelector('.file').innerHTML +=
            `
            <div class="con">
                ${con2.content}
            </div>
            <div class="url">
                <div class="notion" onclick="window.open('${con2.url1}')">
                    <img src="./project_img/notion.jpg">
                    <p>NOTION</p>
                </div>
                <div class="google" onclick="window.open('${con2.url2}')">
                    <img src="./project_img/google.png">
                    <p>GOOGLE DRIVE</p>
                </div>
            </div>`
    }
}