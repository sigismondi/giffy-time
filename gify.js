    
$(document).ready(function() {


var bbchar = ["Spongebob", "Patrick", "Squidward", "Sandy", "Mr Krabs", "Plankton",];


function displayInfo() {
    var spongebob = $(this).attr("sponge-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + spongebob + "";

$.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    ("#pineapple").empty();
    var results = response.data;

