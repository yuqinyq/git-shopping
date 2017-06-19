/**
 * Created by PX on 2017/5/3.
 */


/*************************************************/
/* 全局变量、对象定义部分 */
/*************************************************/

//获取按钮
var btn = document.getElementsByTagName("button");
// 获取弹出框
var wrap = document.getElementById("wrap");

/*************************************************/
/* 页面加载完统一执行部分 */
/*************************************************/

window.onload = function () {
    popup();
}

/*************************************************/
/* 功能函数及方法定义部分 */
/*************************************************/

function popup() {
    var $ = new GD();
    var b_length = btn.length;
    for(let i = 0; i < b_length; i++){
        //点击按钮弹出框
        btn[i].onclick = function () {
            $.getJSON("data/data.json", function (data) {
                wrap.innerHTML = "";
                for(let x in data[i]) {
                    wrap.innerHTML += '<p>' +data[i][x] + '</p>';
                }
            });
            wrap.style.height = "100%";
            wrap.style.transition =".5s ease-in";
        }
        wrap.onclick = function () {
            wrap.style.height = "0";
            wrap.style.transition =".5s ease-in";
        }
    }
}


/**
 * 功能：获取JSON的AJAX请求
 * 参数1：URL
 * 参数2：回调处理函数
 **/
function GD() {
    function getJSON(url,callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if(xhr.readyState ==4 && xhr.status == 200){
                var jsonStr = xhr.responseText;
                var jsonObj = JSON.parse(jsonStr);
                callback(jsonObj);
            }
        }
    }
    return {
        getJSON:getJSON
    }
}
