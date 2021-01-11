$(function() {
    alert("老師我有交作業");

})
$(function() {
    $("h1").click(function() {
        alert("test");

    });

})
$(function() {
    alert('訊息開始');
    $('h1').html('開始JavaScript');
});
$('#ul1').append('<div class="insObj">我是append加入的</div>');
$('#ul1').prepend('<div class="insObj">我是prepend加入的</div>');
$('#ul1').before('<div class="insObj">我是before加入的</div>');
$('#ul1').after('<div class="insObj">我是before加入的</div>');
$('<div class="insObj">insertBefore：元素之前加入</div>').insertBefore('#ul2');
$('<div class="insObj">insertAfter：元素之後加入</div>').insertAfter('#ul2');
$('<div class="insObj">prependTo：元素之前加入</div>').prependTo('#ul2');
$('<div class="insObj">appendTo：元素之前加入</div>').appendTo('#ul2');