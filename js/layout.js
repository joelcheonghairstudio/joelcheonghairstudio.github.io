$(function () {
    $.get("embed/head.html", function (data) {
        $("head").append(data);
    });

    $(".header").load("embed/header.html");
    $(".footer").load("embed/footer.html");
});