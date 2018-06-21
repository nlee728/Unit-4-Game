
  $(document).ready(function() {

    //Set random number to match
  var targetNumber = Math.floor(Math.random()* 120 + 19);   
  $("#number-to-guess").text(targetNumber);
  
  var counter = 0;

  //Wins and losses counters
  var wins = 0;
  var losses = 0;
  $("#win-counter").text(wins);
  $("#loss-counter").text(losses);

  // Create an array and generate random numbers to fill it with
  var numberOptions = []; 
  console.log(numberOptions);

  function randomNumbers() {
      for (var i = 0; i < 4; i++) {
          var num = Math.floor(Math.random() * 13 + 1);
          numberOptions.push(num);
          console.log(numberOptions);
      }
  }
  randomNumbers();
  createCrystals();

  //Resets the game
  function reset() {
    //Reset score to zero
    counter = 0;
    $("#counter").text(counter);
    //Choose new random target number
    targetNumber = Math.floor(Math.random()* 120 + 19);
    $('#number-to-guess').text(targetNumber);
    //Reset random crystal values
    //$("#crystals").empty();
    console.log(numberOptions);
    numberOptions = [];
    $('#crystals').empty();
    console.log(numberOptions);
    randomNumbers();
    console.log(numberOptions);
    createCrystals();
  }

  // Create a for loop to create crystals for every numberOption.
  function createCrystals() {
    for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
}

  // The click event applies to every crystal on the page.
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    console.log(crystalValue);
    $("#counter").text(counter);

    // Win/Loss logic
        if (counter === targetNumber) {
        wins += 1;
        $("#win-counter").text(wins);
        alert("You win!");
        reset();
    }

    else if (counter > targetNumber) {
        losses += 1;
        $("#loss-counter").text(losses);
        alert("You lose!!");
        reset();
    }

  });

});

 