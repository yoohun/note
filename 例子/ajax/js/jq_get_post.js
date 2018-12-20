
var html=""
$("#getMethod").click(function () {
    var getData={name: "qingxia"}
    html=""
    $.get(
        "http://123.56.220.217:3031/list",
        getData,
        function (data) {
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
    )
})


$("#postMethod").click(function () {
    html=""
    var postData={name: "zqingxia",city: "guangdong"}
    $.post(
        "http://123.56.220.217:3030/submit",
        postData,
        function (data) {
            if(data.msg==="success" && data.code===200) {
                for(var i in data.postData){
                    html+="<ul><li>"+i+":"+data.postData[i]+"</li>"
                    html+="</ul>"
                }
                $(".content")[1].innerHTML=html;
            }
        }
    )
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