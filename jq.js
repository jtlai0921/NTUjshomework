$(function() { alert("老師我有交作業"); }) $(function() { $("h1").click(function() { alert("test"); }); }) var result = confirm(message);
var yes = confirm('你確定嗎？');
if (yes) { alert('你按了確定按鈕'); } else { alert('你按了取消按鈕'); }
swal.setDefaults({
    confirmButtonText: "確定",
    cancelButtonText: "取消"
});
swal.setDefaults({ confirmButtonText: "確定", cancelButtonText: "取消" }); //swal.resetDefaults();//清空自訂預設值 $(function() { $("input:button").click(function() { //confirm dialog範例 swal({ title: "確定刪除？", html: "按下確定後資料會永久刪除",
type: "question", showCancelButton: true //顯示取消按鈕 }).then( function(result) { if (result.value) { //使用者按下「確定」要做的事 swal("完成!", "資料已經刪除", "success"); } else if (result.dismiss === "cancel") { //使用者按下「取消」要做的事 swal("取消", "資料未被刪除", "error"); } //end else });
    //end then }); }); $(function() { $("input:button").click(function() { //alert範例 swal("已寄出新密碼", "請至您的信箱查收新的登入密碼", "success"); }); }); $('#ul1').append('
    <
    div class = "insObj" > 我是append加入的 < /div>'); $('#ul1').prepend(' <
    div class = "insObj" > 我是prepend加入的 < /div>'); $('#ul1').before(' <
    div class = "insObj" > 我是before加入的 < /div>'); $('#ul1').after(' <
    div class = "insObj" > 我是before加入的 < /div>'); $(' <
    div class = "insObj" > insertBefore： 元素之前加入 < /div>').insertBefore('#ul2'); $(' <
    div class = "insObj" > insertAfter： 元素之後加入 < /div>').insertAfter('#ul2'); $(' <
    div class = "insObj" > prependTo： 元素之前加入 < /div>').prependTo('#ul2'); $(' <
    div class = "insObj" > appendTo： 元素之前加入 < /div>').appendTo('#ul2'); <
    div class = "col-sm-4" >

    <
    div class = "globe" >
    <
    div class = "bird" >
    <
    div class = "body" >
    <
    div class = "eye left" > < /div> <
    div class = "eye right" > < /div> <
    div class = "beak" >
    <
    div > < /div> <
    /div> <
    div class = "feet" > < /div> <
    div class = "wire" > < /div> <
    /div> <
    div class = "hills" > < /div> <
    div class = "cloud" > < /div> <
    div class = "cloud small" > < /div> <
    /div> <
    /div> <
    /div> <
    div class = "col-sm-4" >
    <
    input type = "checkbox"
class = "auto"
id = "auto"
checked >
    <
    label class = "auto-rotate"
for = "auto" > Auto & #x21bb; < /label><br> <
span class = "anticlockwise" > & #x2190; < /span> <
span class = "clockwise" > & #x2192; < /span> <
div class = "rotate" > < /div> <
    div class = "container" >
    <
    div class = "error404page" >
    <
    div class = "newcharacter404" >
    <
    div class = "chair404" > < /div> <
    div class = "leftshoe404" > < /div> <
    div class = "rightshoe404" > < /div> <
    div class = "legs404" > < /div> <
    div class = "torso404" >
    <
    div class = "body404" > < /div> <
    div class = "leftarm404" > < /div> <
    div class = "rightarm404" > < /div> <
    div class = "head404" >
    <
    div class = "eyes404" > < /div> <
    /div> <
    /div> <
    div class = "laptop404" > < /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    div class = "col-sm-4" >
    <
    span id = "time" > < /span> <
    iframe name = "weather_inc"
src = "http://i.tianqi.com/index.php?c=code&id=7"
style = "border:solid 1px #7ec8ea"
width = "220"
height = "90"
frameborder = "0"
marginwidth = "0"
marginheight = "0"
scrolling = "no" >
    <
    /iframe>

<
body onload = "startTime()" >

    <
    div id = "clock" > < /div> <
    input type = "button"
value = "click me" / >
    <
    button id = "f2c"
class = "ui-button ui-widget ui-corner-all" > 攝氏轉華氏 < /button> <
    div id = "f2c_inputbox" >
    <
    p > 請輸入攝氏溫度 < /p> <
    p > < input id = "c"
type = "text" > < /p> <
    /div> <
    div id = "result_msgbox" > < /div> <
    /div> <
    /div> <
    /div>

<
div class = "canvas" > < /div>

<
div class = "container1" >
    <
    div class = "row" >
    <
    div class = "col-md-6" >
    <
    div class = "weather" >
    <
    div class = "weatherNow" > < /div> <
    div class = "weatherWeek" > < /div> <
    /div> <
    /div> <
    div class = "col-md-6" >
    <
    h3 id = "CName" > < /h3> <
    /div> <
    /div> <
    /div> <
    div class = "welcome" >
    <
    div > 個人履歷 < /div>

<
div >
    <
    div class = "text" >
    <
    a href = "index.html" >
    <
    div class = "left" > left < /div> <
    div class = "right" > right < /div> <
    /a> <
    /div> <
    /div> <
    /div> <
    div class = "list" >
    <
    div class = "box" >
    <
    img src = "a.jpg"
style = "width: 100%" >
    <
    /div>

<
div class = "box" > 2 < /div> <
    div class = "box" > 3 < /div> <
    div class = "box" > 4 < /div>

<
/div>

<
div class = "exam1" >
    <
    div class = "box1" >
    <
    img src = "b.jpg"
style = "width: 100%;" / >
    <
    div > new year < /div> <
    div > 新年快樂 < /div> <
    /div> <
    div class = "box2" >
    <
    img src = "a.jpg"
style = "width: 100%;" / >
    <
    div > happy < /div> <
    div > 聖誕快樂 < /div> <
    /div>

<
/div> <
div class = "envents" >
    <
    div class = "envent" > Event1 < /div> <
    div class = "envent" > Event2 < /div> <
    /div> <
    /body>

<
/html>