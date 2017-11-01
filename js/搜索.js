$(function() {
    $("#search").click(function() {
        if ($("#searchText").val() == '') {
            return false;
        }
        open("./主页.html");
    })
})
