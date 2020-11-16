$(function () {
    $("button.showAll").click(function () {
        $("#accordion>div").show(300);
    });
    $("button.hideAll").click(function () {
        $("#accordion>div").hide(300);
    });
    $("button.showAdmin").click(function () {
        $("#accordion>div").hide(300);
        $(".showAdmin").show(300);
    });
    $("button.showAIML").click(function () {
        $("#accordion>div").hide(300);
        $(".showAIML").show(300);
    });
    $("button.showAnalytics").click(function () {
        $("#accordion>div").hide(300);
        $(".showAnalytics").show(300);
    });
    $("button.showClients").click(function () {
        $("#accordion>div").hide(300);
        $(".showClients").show(300);
    });
    $("button.showCost").click(function () {
        $("#accordion>div").hide(300);
        $(".showCost").show(300);
    });
    $("button.showFeatures").click(function () {
        $("#accordion>div").hide(300);
        $("#accordion>div.showFeatures").show(300);
    });
    $("button.showSecurity").click(function () {
        $("#accordion>div").hide(300);
        $(".showSecurity").show(300);
    });
});
