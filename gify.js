    
$(document).ready(function() {


var bbchar = ["Spongebob", "Patrick", "Squidward", "Sandy", "Mr Krabs", "Plankton",];

function renderButtons() {

    $("#sponge-buttons").empty();
    for (i = 0; i < movies.length; i++) {
    $("#sponge-buttons").append("<button class='btn btn-success' data-sponge='" + bbchar[i] + "'>" + bbchar[i] + "</button>");
    }
}

renderButtons();

$("#add-char").on("click", function () {
    event.preventDefault();
    var bbchar = $("#char-input").val().trim();
    bbchar.push(bbchar);
    renderButtons();
    return;
});
