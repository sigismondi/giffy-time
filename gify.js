    
$(document).ready(function() {


var bbchar = ["Spongebob", "Patrick", "Squidward", "Sandy", "Mr Krabs", "Plankton",];

function renderButtons() {

    $("#sponge-buttons").empty();
    for (i = 0; i < bbchar.length; i++) {
    $("#sponge-buttons").append("<button class='btn btn-success' data-sponge='" + bbchar[i] + "'>" + bbchar[i] + "</button>");
    }
}

renderButtons();

$("#add-char").on("click", function () {
    event.preventDefault();
    var bbchar = $("#charinput").val().trim();
    bbchar.push(bbchar);
    renderButtons();
    return;
});

$("button").on("click", function () {
    var bbchar = $(this).attr("chardata");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bbchar + "2szW9Epf5GDJMa6k4XoPZcUkBGfjygLL"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var results = response.data;
        $("#bbchar").empty();
        for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var Img = $("<img>");
        Img.attr("src", results[i].images.original_still.url);
        Img.attr("data-still", results[i].images.original_still.url);
        Img.attr("data-animate", results[i].images.original.url);
        Img.attr("data-state", "still");
        Img.attr("class", "gif");
        gifDiv.append(p);
        gifDiv.append(Img);
        $("#bbchar").append(gifDiv);
        }
    });
});

function changeState(){
       var state = $(this).attr("data-state");
       var animateImage = $(this).attr("data-animate");
       var stillImage = $(this).attr("data-still");
       if (state == "still") {
         $(this).attr("src", animateImage);
         $(this).attr("data-state", "animate");
    }
    else if (state == "animate") {
        $(this).attr("src", stillImage);
        $(this).attr("data-state", "still");
    }
}

$(document).on("click", ".gif", changeState);
});