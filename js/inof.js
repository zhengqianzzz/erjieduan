console.log(localStorage.getItem("dataList"))
var dataList = JSON.parse(localStorage.getItem("dataList"));
// var dataList = 
//     {
//         url: 'images/dt.png',
//         title: 'HUAWEI Mate 30 5G 全网通 8GB+128GB 麒麟990 4000万超感光徕卡三摄（亮黑色）',
//         detail: '【12.12智享芯生活】①享12期分期免息 ② 赠手机摄影课程 麒麟990 5G旗舰SoC芯片，支持双模SA/NSA；超感光徕卡三摄；40W有线与27W无线双超级快充；屏内指纹识别',
//         price: '¥4999.00'
//     };
var login = document.querySelector("#login"); // 图片展示区
var detail_title = document.querySelector("#detail_title"); // 标题
var detail_info = document.querySelector("#detail_info"); // 详情
var detail_price = document.querySelector("#detail_price"); // 价钱

login.innerHTML = `<image src='${dataList.url}'/>`;
detail_title.innerHTML = `${dataList.title}`;
detail_info.innerHTML = `${dataList.detail}`;
detail_price.innerHTML = `${dataList.price}`;

var add_cart = document.querySelector("#add_cart");
add_cart.onclick = function(){
    if(confirm("是否加入购物车?")){
        localStorage.setItem("cart_list",JSON.stringify(dataList))
        window.location.href = './shop.html'
    }else{
        return
    }
}