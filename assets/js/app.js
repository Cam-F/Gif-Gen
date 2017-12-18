/*

1. [x] Setup a renderButton function to render the array
2. [x] Setup an onclick to take the text from the input and push it into the array (recall render function)
3. [x] AJAX call on the array
4. []
5. []
*/

// initial array of gifs
var gifs = ["leonardo dicaprio", "samuel l. jackson", "keanu reeves", "sean connery"];

// function to display gifs
function displayGifs() {
    //getting the "data-name" attr to plug it into the queryURL
    var gif = $(this).attr("data-name");
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
            // creating variables to hold the 2 states of the gif
            var imgStill = results[i].images.fixed_height_still.url;
            var imgAnimate = results[i].images.fixed_height.url;
            // add attributes to the gifs
            var gifImg = $("<img>");
            gifImg.attr("src", imgStill);
            gifImg.attr("data-state", "still");
            gifImg.attr("data-still", imgStill);
            gifImg.attr("data-animate", imgAnimate);
            gifImg.addClass("gif");
            // append to the container
            gifContainer.append(gifImg);
            // append to the page
            $(".gif-area").append(gifContainer);
        }
    })
}

    // pause / play

    function animateGifs() {

        var state = $(this).attr("data-state");
        console.log(state);

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");

        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    };

// function to render buttons

function renderButtons() {
    $("#btn-area").empty();                     // to prevent duplicating buttons

    for (var i = 0; i < gifs.length; i++) {     // loops through the array
        var a = $("<button>");                  //create button
        a.addClass("gifBtn btn btn-default btn-sm btn-primary");   //add class
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
    renderButtons();                            // re-rendering buttons
    $(".add-gif").val("Search for...");         // clearing form after submit
})

$(document).on("click", ".gifBtn", displayGifs);

// THIS TOOK FOREVER TO FIND
$(document).on("click", ".gif", animateGifs);

renderButtons();

