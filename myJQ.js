$("div").css("background", "purple")

$("div.highlight").css("width", "200px")

$("#third").css("border", "2px solid orange")

$("div:first-of-type").css("color", "pink")

$('#add').on('click',addToList);

function addToList() {
    var item2add = $('input').val();
    console.log(item2add);
    $('ul').append("<li>"+item2add+"</li>");
    $('input').val("");
}
