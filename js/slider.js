var $links = $(".itemLinks");
$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translateX(" + position * -25 + "%)";
    $("#wrapper").css({
        Transform: translateValue
    });
    clickedLink.addClass("active");

});
$($links[0]).addClass("active");
