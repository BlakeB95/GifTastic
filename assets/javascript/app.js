$(document).ready(function() {

    var topics = [];
    topics.push("lion", "dog", "parrot");

    for(var i=0;i<topics.length;i++){
        addButton(topics[i]);
    }

    //used to create animal buttons
    function addButton(name){
        $("#buttonGroup").append("<button type='button' class='btn btn-primary mr-2 mt-2 animalButton'>"+name+"</button>");
    }

    $("#addButton").on("click", function(event){
        event.preventDefault();
        addButton($("#animalSubmit").val().trim());
    })

    //clicking an animal button populates the imageGroup div with giphy images
    $(document).on("click", ".animalButton", function(){
        var animal = $(this).text();
        console.log(animal);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        animal + "&api_key=Gy0C0GKgoLF2GsszMkMARDq3BuaqNqZQ&limit=11";

        $.ajax({
            url: queryURL,
            method: "GET"
            })
            .then(function(response) {
                $("#imageGroup").html("");
            var results = response.data;
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    $("#imageGroup").append("<div class='col-md-auto'><img class='animalImg' src='"+results[i].images.fixed_height.url+"' title='"+results[i].title+"'></img><p>Rating: "+results[i].rating+"</p></div>");
                }
            }
            })
        })

        //pausing on a dynamically created element
        $(document).on("click", ".animalImg", function(){
            console.log("ah");
        })
    })



