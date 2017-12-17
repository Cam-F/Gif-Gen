/*

1. [x] Setup a renderButton function to render the array
2. [x] Setup an onclick to take the text from the input and push it into the array (recall render function)
3. [] AJAX call on the array
4. []
5. []
*/

// initial array of gifs
var gifs = ["adam sandler", "charlie day", "keanu reeves", "chris pratt"];

// function to display gifs
function displayGifs() {
    //getting the "data-name" attr to plug it into the queryURL
    var gif = $(this).attr("data-name");
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Qt2BqDiQQBWFGVz5QHUoepyDD2e9Jaf0&limit=10&rating=g";

    //begin AJAX Call
    $.ajax({
        url: queryURL,
        method: "GET",
    }).done(function (response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;
        $(".gif-area").empty();
        // loop through the results and show all the gifs
        for (var i = 0; i < results.length; i++) {
            // DISPLAY
            // dynamically creating a container div
            var gifContainer = $("<div class='gifContainer'>")
            // appending the rating to the new div
            gifContainer.append("<p>Rating: " + results[i].rating);
            // creating the img tag
            var gifImg = $("<img src=" + results[i].images.fixed_height_still.url + ">");
            // giving attributes useful for pausing andp playing
            gifImg.attr("data-state", "still");
            gifImg.attr("data-still", results[i].images.fixed_height_still.url);
            gifImg.attr("data-animate", results[i].images.fixed_height.url);
            // appending the img to the container
            gifContainer.append(gifImg);
            // appending the new div contents to the page
            $(".gif-area").append(gifContainer);
        }
    })
}

// function to render buttons
function renderButtons() {
    $("#btn-area").empty();                     // to prevent duplicating buttons

    for (var i = 0; i < gifs.length; i++) {     // loops through the array
        var a = $("<button>");                  //create button
        a.addClass("gif btn btn-default btn-sm btn-primary");   //add class
        a.attr("data-name", gifs[i]);           //data attribute
        a.text(gifs[i]);                        //labels the button
        $("#btn-area").append(a);               // append button
    }
}
// function to add searches to buttons
$(".find-gif").on("click", function (event) {
    event.preventDefault()
    var gif = $(".add-gif").val().trim();       //grab the text
    gifs.push(gif);                             //push to array
    console.log(gifs);                          //clg
    renderButtons();                            // re-rendering buttons
    $(".add-gif").val("Search for...");         // clearing form after submit
})
$(document).on("click", ".gif", displayGifs);
renderButtons();
