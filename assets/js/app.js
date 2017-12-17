/*

1. [x] Setup a renderButton function to render the array
2. [x] Setup an onclick to take the text from the input and push it into the array (recall render function)
3. []
4. []
5. []
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
// function to add searches to buttons
$(".find-gif").on("click", function (event) {
    event.preventDefault()
    //grab the text
    var gif = $(".add-gif").val().trim();
    //push to array
    gifs.push(gif);
    console.log(gifs);
    // re-rendering buttons
    renderButtons();
    // clearing form after submit
    $(".add-gif").val("Search for...");
})

renderButtons();
