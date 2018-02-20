// Wait for items to load fully
$(document).ready(function () {

    // Creating global variables
    var answer;
    var userTotal;
    var firstCrystal;
    var secondCrystal;
    var thirdCrystal;
    var fourthCrystal;
    var gamesWon;
    var gamesLost;
    var message;

    // Writing function to determine and assign random values
    function set () {

        //Determining random numbers
        answer = Math.floor((Math.random() * 102) + 19);
        firstCrystal = Math.floor((Math.random() * 12) + 1);
        secondCrystal = Math.floor((Math.random() * 12) + 1);
        thirdCrystal = Math.floor((Math.random() * 12) + 1);
        fourthCrystal = Math.floor((Math.random() * 12) + 1);

        // As well as reset user total
        userTotal = 0;

        // Setting value equal to randomly selected values
        $('#crystalOne').val(firstCrystal);
        $('#crystalTwo').val(secondCrystal);
        $('#crystalThree').val(thirdCrystal);
        $('#crystalFour').val(fourthCrystal);

    }

    // Run function above on load
    set();

    $('#answer').text(answer);

    // Assign value to each jewel

    // Listen for click 
    $('.crystal').on('click', function () {

        console.log(this);
    
        // On click determine value of crystal clicked and add to user total
        userTotal = userTotal + $(this).val();
        console.log(userTotal);

    })

});