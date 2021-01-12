$(function() {
    alert("老師我有交作業");

});
$(function() {
    $("h1").click(function() {
        alert("test");

    });

});
$("#select_fruit").click(function(e) {
    $("#fruit_inputbox").dialog("open");
    e.preventDefault();
});
var confirm = function() {
    var favorite_fruit = $("#favorite_fruit").val();
    var hatest_fruit = $("[name=hatest_fruit]:radio:checked").val();
    var arr = [];
    $("[name=often_fruit]:checkbox:checked").each(function() {
        arr.push($(this).val());
    });
    var often_fruit = arr.join();
    var msg = "您最喜歡的水果是 : " + favorite_fruit + "<br>" +
        "您最討厭的水果是 : " + hatest_fruit + "<br>" +
        "您最常吃的水果是 : " + often_fruit;
    $("#result_msgbox").html(msg);
    $("#result_msgbox").dialog("open");
    $(this).dialog("close");
}
$("#fruit_inputbox").dialog({
    autoOpen: false,
    modal: true,
    title: "資料選擇",
    buttons: {
        "取消": function() { $(this).dialog("close"); },
        "確定": confirm
    }
});
$("#result_msgbox").dialog({
    autoOpen: false,
    modal: true,
    title: "選擇結果",
    buttons: { 確定: function() { $(this).dialog("close"); } }
});