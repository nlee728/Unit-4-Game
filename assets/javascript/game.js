
  $(document).ready(function() {

  var targetNumber = Math.floor(Math.random()*120+19);   
  
  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  //Wins and losses counters
  var wins = 0;
  var losses = 0;

  // We begin by expanding our array to include four options.
  var num1 = Math.floor(Math.random()*11+1);
  var num2 = Math.floor(Math.random()*11+1);
  var num3 = Math.floor(Math.random()*11+1);
  var num4 = Math.floor(Math.random()*11+1);

  var numberOptions = [num1, num2, num3, num4]; 

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/crystal.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // The click event applies to every single crystal on the page.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    console.log(crystalValue);

    $("#counter").text(counter);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
        if (counter === targetNumber) {
        wins += 1;
        $("#win-counter").text(wins);
        alert("You win!");
    }

    else if (counter >= targetNumber) {
        losses +=1;
        $("#loss-counter").text(losses);
        alert("You lose!!");
    }

  });

});

 