/*

1. [x] Setup 4 premade buttons
2. [] 
3. [] Capture input value
4. [] Generate button into #btn-area
5. [] Make button ajax call to giphy api

*/

// initial array of gifs
var gifs = ["adam sandler", "charlie day", "keanu reeves", "chris pratt"];

// function to render buttons
function renderButtons() {
    $("#btn-area").empty();

    for (var i = 0; i < gifs.length; i++) {
        //create button
        var a = $("<button>");
        //add class
        a.addClass("gif btn btn-default btn-sm btn-primary");
        //labels the button
        a.text(gifs[i]);
        // append button
        $("#btn-area").append(a);
    }
}
renderButtons();
