//    原生ajax get方法
var getbtn=document.getElementById("getMethod")
getbtn.onclick=function () {
    html=''
    var xml=new XMLHttpRequest()
    xml.open('GET','http://123.56.220.217:3031/list',true)
    xml.send(null)
    xml.onreadystatechange=function () {
        if(xml.status===200&&xml.readyState===4) {
            var getData=eval('('+xml.responseText+')')
            if(getData.msg==="success" && getData.code===200) {
                for(var i=0;i<getData.data.length;i++){
                    html+="<ul><li>ID:"+getData.data[i].Batch_ID+"</li>"
                    html+="<li>name:"+getData.data[i].couponname+"</li>"
                    html+="<li>Date:"+getData.data[i].Expire_Date+"</li>"
                    html+="<li>coupontype:"+getData.data[i].Expire_Date+"</li></ul>"
                }
                document.getElementsByClassName("content")[0].innerHTML=html
            }
        }
    }
}

//    原生ajax post方法
var postbtn=document.getElementById("postMethod")
postbtn.onclick=function () {
    html=''
    var xml=new XMLHttpRequest();
    xml.open('POST','http://123.56.220.217:3031/submit');
    xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xml.send("name=qingxia&city=guangzhou")
    xml.onreadystatechange=function () {
        if(xml.status===200&&xml.readyState===4) {
            var postData=eval('('+xml.responseText+')')
            if(postData.msg==="success" && postData.code===200) {
                for(var i in postData.postData){
                    html+="<ul><li>"+i+":"+postData.postData[i]+"</li>"
                    html+="</ul>"
                }
                document.getElementsByClassName("content")[1].innerHTML=html
            }
        }
    }
}


//    原生ajax delete方法
var deletebtn=document.getElementById("deleteMethod")
deletebtn.onclick=function () {
    html=''
    var xml=new XMLHttpRequest()
    xml.open('DELETE','http://123.56.220.217:3031/delete/55022299')
    xml.send(null)
    xml.onreadystatechange=function () {
        if(xml.status===200&&xml.readyState===4) {
            var deleteData=eval('('+xml.responseText+')')
            if(deleteData.msg==="success" && deleteData.code===200) {
                for(var i in deleteData.data){
                    html+="<ul><li>"+i+":"+deleteData.data[i]+"</li>"
                    html+="</ul>"
                }
                document.getElementsByClassName("content")[2].innerHTML=html
            }
        }
    }
}