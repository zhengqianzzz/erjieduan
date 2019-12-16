var setUser = document.querySelector("#setUser");
    loging()
    function loging() {
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            setUser.innerHTML = `<div>欢迎${localStorage.getItem("username")}</div>`;
        } else {
            setUser.innerHTML = '<div><a id="uuu" href="register.html">请先登入</div>';
            // alert("请先去注册登录,谢谢")
            // location.href = "./register.html";
        }
    }

    var outLogin = document.querySelector("#outLogin"); // 退出登录按钮
    outLogin.onclick = function () {

        if (localStorage.getItem("username")) {
            if (confirm("是否退出登录?")) {
                localStorage.removeItem("username")
                localStorage.removeItem("password")
                loging()
            }
        } else {
            alert("暂未登录,不需要退出..........")
        }
    }
    //列表
    var grid_list = document.querySelector("#grid_list")

    var json_list = [
        {
            url: './images/rx1.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx2.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx3.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx4.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx5.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx6.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx7.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        {
            url: './images/rx8.png',
            title: 'HUAWEI Mate 30 RS 保时捷设计',
            detail: '10:08开售',
            price: '¥12999'
        },
        
        
    ]

    for (let i = 0; i < json_list.length; i++) {
        grid_list.innerHTML += `
            <li>
                <a id="go_info" data-dataList1='${ JSON.stringify(json_list[i])}'>
                    <p class="grid-img"><img src="${json_list[i].url}"></p>
                    <div class="grid-title">${json_list[i].title}</div>
                    <p class="grid-desc">${json_list[i].detail}</p>
                    <p class="grid-price">${json_list[i].price}</p>
                </a>
            </li>
        `
    }

    // localStorage.getItem("dataList") 
    var goInfo = document.querySelectorAll("#go_info");
    // console.log(goInfo)
    for (let j = 0; j < goInfo.length; j++) {
        goInfo[j].addEventListener("click", function go_info(j) {
            var cart_list = this.getAttribute("data-dataList1")
            localStorage.setItem("dataList", cart_list)
            window.location.href = './inof.html'
        }, true);
    }
    // function go_info(j){
    //     console.log(goInfo[j])
    // }
    var back_top = document.querySelector("#back_top")
    back_top.onclick = function () {
        document.documentElement.scrollTop = 0;
    }
    //三级菜单
    var detail_list = document.querySelectorAll("#detail_list")
    var detail_box = document.querySelectorAll("#detail_box")
    for (let k = 0; k < detail_list.length; k++) {
        detail_list[k].onclick = function () {
            console.log(detail_box[k].style.display)

            if (detail_box[k].style.display == 'none' || !detail_box[k].style.display) {
                detail_box[k].style.display = 'block'
                console.log(detail_box[k].style.display)


            } else if (detail_box[k].style.display == 'block') {
                detail_box[k].style.display = 'none'
                // for (var h = 0; h < detail_list.length; h++) {
                //     detail_box[k].style.display = 'none'
                // }
                console.log(12312312)
            }

        }
    }
// 轮播图 `````````````````````````````````````````````````````````````````````
var list = document.getElementById('list'); var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  function animate(offset) {
    //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
    var newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + 'px';
  }

  prev.onclick = function () {
    animate(1263);
  }
  next.onclick = function () {
    animate(-1263);
  }
  var go_detail = document.querySelectorAll("#go_detail");
  for(var kk = 0; kk < go_detail.length;kk++){
    go_detail[kk].onclick = function(){
        window.location.href="./xq.html"
    }
  }