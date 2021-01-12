$(function() {
    alert("老師我有交作業");

})
$(function() {
    $("h1").click(function() {
        alert("test");

    });

})
var result = confirm(message);

var yes = confirm('你確定嗎？');

if (yes) {
    alert('你按了確定按鈕');
} else {
    alert('你按了取消按鈕');
}
swal.setDefaults({
    confirmButtonText: "確定",
    cancelButtonText: "取消"
});
swal.setDefaults({
    confirmButtonText: "確定",
    cancelButtonText: "取消"
});
//swal.resetDefaults();//清空自訂預設值


$(function() {
    $("input:button").click(function() {
        //confirm dialog範例
        swal({
            title: "確定刪除？",
            html: "按下確定後資料會永久刪除",
            type: "question",
            showCancelButton: true //顯示取消按鈕
        }).then(
            function(result) {
                if (result.value) {
                    //使用者按下「確定」要做的事
                    swal("完成!", "資料已經刪除", "success");
                } else if (result.dismiss === "cancel") {
                    //使用者按下「取消」要做的事
                    swal("取消", "資料未被刪除", "error");
                } //end else  
            }); //end then 
    });
});
$(function() {
    $("input:button").click(function() {
        //alert範例
        swal("已寄出新密碼", "請至您的信箱查收新的登入密碼", "success");

    });
});
$('#ul1').append('<div class="insObj">我是append加入的</div>');
$('#ul1').prepend('<div class="insObj">我是prepend加入的</div>');
$('#ul1').before('<div class="insObj">我是before加入的</div>');
$('#ul1').after('<div class="insObj">我是before加入的</div>');
$('<div class="insObj">insertBefore：元素之前加入</div>').insertBefore('#ul2');
$('<div class="insObj">insertAfter：元素之後加入</div>').insertAfter('#ul2');
$('<div class="insObj">prependTo：元素之前加入</div>').prependTo('#ul2');
$('<div class="insObj">appendTo：元素之前加入</div>').appendTo('#ul2');