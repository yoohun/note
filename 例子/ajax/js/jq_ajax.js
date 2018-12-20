var html=""
$("#getMethod").click(function () {
    html=""
//        $.ajax()方法获取数据
       $.ajax({
           url: "http://123.56.220.217:3031/list",
           type: "GET",
           data: {
               name: "qingxia"
           },
           success: function (data) {
               if(data.msg==="success" && data.code===200) {
                   html+="<h4>"+data.query.name+"</h4>"
                   for(var i=0;i<data.data.length;i++){
                       html+="<ul><li>ID:"+data.data[i].Batch_ID+"</li>"
                       html+="<li>name:"+data.data[i].couponname+"</li>"
                       html+="<li>Date:"+data.data[i].Expire_Date+"</li>"
                       html+="<li>coupontype:"+data.data[i].Expire_Date+"</li></ul>"
                   }
                   $(".content")[0].innerHTML=html;
               }
           }
       })
})


$("#postMethod").click(function () {
    html = "";
//        $.ajax()方法获取数据
    $.ajax({
        url: "http://123.56.220.217:3030/submit",
        type: "POST",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            name: "zqingxia",
            city: "guangdong"
        },
        // traditional:true,
        // dataFilter: function (data, type) {
        //     对Ajax返回的原始数据进行预处理
        //     console.log(JSON.parse(data).msg)  // 返回处理后的数据
        //     return JSON.stringify(JSON.parse(data).msg)  // 返回处理后的数据
        // },
        success: function (data) {
            if (data.msg === "success" && data.code === 200) {
                for (var i in data.postData) {
                    html += "<ul><li>" + i + ":" + data.postData[i] + "</li>"
                    html += "</ul>"
                }
                $(".content")[1].innerHTML = html;
            }
        }
        // context: document.body,//让回调函数内this指向这个对象 显示的是body
        // cache: true
        // error: function (XMLHttpRequest, textStatus, errorThrown) {//有错误的话才会返回数据,就算是url写错了也会有返回信息
        //     console.log(XMLHttpRequest)
        //     console.log(textStatus)
        //     // 通常 textStatus 和 errorThrown 之中
        //     // 只有一个会包含信息
        //     console.log(this); // 调用本次AJAX请求时传递的options参数
        // }
        // beforeSend: function (XMLHttpRequest) {
        //     $("#postMethod").attr("disabled",true);
        // },
        // complete: function (XMLHttpRequest, textStatus) {
            // console.log(11111)
            // console.log(XMLHttpRequest)
            // console.log(textStatus)
            // $("#postMethod").attr("disabled",false);
            // console.log(this)
        // }
    })
})

$("#deleteMethod").click(function () {
    html=""
    $.ajax({
        url: "http://123.56.220.217:3031/delete/55022299",
        type: "DELETE",
        data: {
            name: "zqx"
        },
        success: function (data) {
            if(data.msg==="success" && data.code===200) {
                for(var i in data.data){
                    html+="<ul><li>"+i+":"+data.data[i]+"</li>"
                    html+="</ul>"
                }
                $(".content")[2].innerHTML=html;
            }
        }
    })
})