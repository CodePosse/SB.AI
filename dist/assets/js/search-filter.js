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
    //   var numAll = $("#accordion>div").length;
    //   $("#showAll").parent().find("span").append(numAll);
    var numAdmin = $("div.showAdmin").length;
    $("#showAdmin").parent().find("span").append(numAdmin);
    var numAIML = $("div.showAIML").length;
    $("#showAIML").parent().find("span").append(numAIML);
    var numAnalytics = $("div.showAnalytics").length;
    $("#showAnalytics").parent().find("span").append(numAnalytics);
    var numClients = $("div.showClients").length;
    $("#showClients").parent().find("span").append(numClients);
    var numCost = $("div.showCost").length;
    $("#showCost").parent().find("span").append(numCost);
    var numFeatures = $("div.showFeatures").length;
    $("#showFeatures").parent().find("span").append(numFeatures);
    var numSecurity = $("div.showSecurity").length;
    $("#showSecurity").parent().find("span").append(numSecurity);
});




jQuery(document).ready(function ($) {
    var checkboxes = $("input");
    checkboxes.on("change", function () {
        // get the name attibute of the checked checkboxes
        var checkedClasses = [];
        checkboxes.each(function (index, el) {
            if (el.checked) {
                checkedClasses.push($(el).attr("name"));
            }
        });

        // hide or show div according to the checkbox status
        $("div.facet").each(function (index, el) {
            var show = false;

            // check if the current div has any of the selected checkbox classes
            var $el = $(el);
            for (var i = 0; i < checkedClasses.length; ++i) {
                var checkedClass = checkedClasses[i];
                if ($el.hasClass(checkedClass)) {
                    show = true;
                }
            }

            // if all the checkboxes are unchecked, show this element
            if (checkedClasses.length === 0) {
                show = true;
            }

            if (show) {
                $el.slideDown();
            } else {
                $el.slideUp();
            }
        });
    });
});
$("input[type=checkbox]").click(function () {
    $(this).parent().toggleClass('btn-custom2 btn-primary');
});