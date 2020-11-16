$(function () {
  //show and hide
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
  // show number of items
  var numAll = $("#accordion>div").length;
  $(".btn.showAll span").append(numAll);
  var numAdmin = $("div.showAdmin").length;
  $(".btn.showAdmin span").append(numAdmin);
  var numAIML = $("div.showAIML").length;
  $(".btn.showAIML span").append(numAIML);
  var numAnalytics = $("div.showAnalytics").length;
  $(".btn.showAnalytics span").append(numAnalytics);
  var numClients = $("div.showClients").length;
  $(".btn.showClients span").append(numClients);
  var numCost = $("div.showCost").length;
  $(".btn.showCost span").append(numCost);
  var numFeatures = $("div.showFeatures").length;
  $(".btn.showFeatures span").append(numFeatures);
  var numSecurity = $("div.showSecurity").length;
  $(".btn.showSecurity span").append(numSecurity);
});
