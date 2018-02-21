// Wait for items to load fully
$(document).ready(function () {

    // Set up ========================================================
    
    // Creating global variables
    var answer;
    var userTotal;
    var firstCrystal;
    var secondCrystal;
    var thirdCrystal;
    var fourthCrystal;
    var gamesWon;
    var gamesLost;

    // Function to initalize game values at start
    function initial () {

        gamesWon = 0;

        $('#gameWon').text(gamesWon);

        gamesLost = 0;

        $('#gameLost').text(gamesLost);

    };
    
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

        // Displaying value of answer
        $('#answer').text(answer);

    };

    // Function to be carried out if player correclty equals the given value
    function gameWin (){

        // Display 'You Won' in status
        $('#status').text('You Won!');

        // Add game to total games won
        gamesWon++;

        // Display new games won total
        $('#gameWon').text(gamesWon);

        // Reset values for answer and crystals
        set ();

    };

     // Function to be carried out if player goes over given value
     function gameLose (){

        // Display 'You Won' in status
        $('#status').text('You Lost!');

        // Add game to total games won
        gamesLost++;

        // Display new games won total
        $('#gameLost').text(gamesLost);

        // Reset values for answer and crytals
        set();

    };

    // Gameplay ======================================================

    // Run initial and set functions on load

    initial();

    set();

    // Assign value to each jewel

    // Listen for click 
    $('.crystal').on('click', function () {

        // On click determine value of crystal clicked and add to user total
        userTotal += parseInt($(this).val());

        // Push new user total to answer

        $('#userScore').text(userTotal);

        // Check if user has correclty equaled the given value
        if (userTotal === answer){

            // Run function for game won
            gameWin();

        } else if (userTotal > answer){
            
            // Run function for game lost
            gameLose();

        }; 

    });

});