console.log(JSON.parse(localStorage.getItem("cart_list")))
    var cart_data = JSON.parse(localStorage.getItem("cart_list"));
    var cart_box = document.querySelector("#cart_box");
    var price_bottom = document.querySelector("#price_bottom")

    cart_data.price = cart_data.price.slice(1)
    var number = 1;
    insert_html()
    function insert_html(){  // 重新放入dom元素
            cart_box.innerHTML = `
        <lable class="checkbox">
            <input readonly="readonly" class="vam checked" type="checkbox">
        </lable>
        <div class="sc-pro-area">
            <!---存放内容显示的地方--->
        <div class="sc-pro-main clearfix">
        <a href="#" class="p-img">
                <img src="${cart_data.url}">
            </a>
            <ul>
                <li>
                    <a href="#" class="p-name">${cart_data.title}</a>
                    <p class="p-info">${cart_data.detail}</p>
                    <div class="p-label">
                        <span>分期免费</span>
                    </div>
                </li>
                <li>
                    <div class="p-price">
                        <span>${cart_data.price}</span>
                    </div>
                </li>
                <li>
                    <div class="p-stock">
                        <div class="p-stock-area">
                            <div id="number_price" style="display:inner-block;"><input type="number"  value="${number}" class="p-stock-text"></div>
                            
                            <p class="p-stock-btn">
                                <a id="miner">-</a>
                                
                                <a id="add" class="disabled">+</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li id="price_all" class="p-price-total">¥${cart_data.price * number}</li>
                <li>
                    <a id="delete1" class="p-del">删除</a>
                </li>
            </ul>
        </div>
    </div>
        `
        price_bottom.innerHTML = `¥${cart_data.price * number}`;
    }
    
    var miner = document.querySelector("#miner");
    var add = document.querySelector("#add");
    var number_price = document.querySelector("#number_price");

    var price_all = document.querySelector("#price_all") // 全部的价格box

    console.log(miner)
    add.onclick = function (){
        number ++
        number_price.innerHTML = `<input type="number"  value="${number}" class="p-stock-text">`
        price_all.innerHTML = `¥${cart_data.price * number}`
        price_bottom.innerHTML = `¥${cart_data.price * number}`;
    }
    miner.onclick = function(){
        number--
        number_price.innerHTML = `<input type="number"  value="${number}" class="p-stock-text">`
        price_all.innerHTML = `¥${cart_data.price * number}`
        price_bottom.innerHTML = `¥${cart_data.price * number}`;
    }
    var bt = document.querySelector("#bt")
    bt.onclick = function(){
        if(confirm("是否下单?")){
            alert("成功购买!")
            cart_box.innerHTML= ''
            price_bottom.innerHTML = '0'
            localStorage.removeItem("cart_list")
        }
    }
    var delete1 = document.querySelector("#delete1")
    delete1.onclick = function(){
        localStorage.removeItem("cart_list")
        cart_box.innerHTML= ''
    }