$('ul').on('click', 'li', updateItem);
$('ul').on('click', 'span', removeItem);
$("input[type='text']").on('keypress', function(e) {
    if (e.which === 13) addItem();
});
$('.far').on('click', function() {
    $("input[type='text']").fadeToggle();
});

function updateItem() {
    $(this).toggleClass("crossOut");
}

function removeItem(e) {
    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
    e.stopPropagation();
}

function addItem() {
    var item2add = $('input').val();
    $('ul').append("<li><span><i class='fas fa-trash'></i></span> "+item2add+"</li>");
    $('input').val("");
}