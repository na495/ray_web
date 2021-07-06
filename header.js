document.querySelector('#header').innerHTML =
    `
        <div class="header_tab ">
            <!-- 헤더 탭 시작 -->
            <button type="button " class="header_tab_botton HOME " onClick="location.href='./index.html'">
                <span>HOME</span>
            </button>
            <hr class="header_tab_hr ">
            <button type="button " class="header_tab_botton PROJECT " onClick="location.href='./project.html'">
                <span>PROJECT</span>
            </button>
            <hr class="header_tab_hr ">
            <button type="button " class="header_tab_botton TEAMPROJECT " onClick="location.href='./team.html'">
                <span>TEAM
                    PROJECT</span>
            </button>
        </div>
        `;