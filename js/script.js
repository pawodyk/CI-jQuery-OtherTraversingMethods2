$(document).ready(function(){

    $("tr:odd").addClass("rowOdd");
    $("tr:even").addClass("rowEven");

    $("th").click(function(){
        $("td").removeClass("selection");
        $(this).siblings("td").addClass("selection");
    });

});