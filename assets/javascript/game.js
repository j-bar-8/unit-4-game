

// GLOBAL VARIABLES
// ============================================================================
    var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
    var total = 0;
    var crystalValue = 0;
        // ================TESTING========================
    console.log("Target Number: " + targetNumber);
    console.log("Total: " + total);
        

// FUNCTIONS
// ============================================================================
    function createCrystals () {
        for (var i=0; i<4; i++) {
        var crystal = $("<img>");
        var crystalValue = Math.floor(Math.random() * 12) + 1;

        crystal.addClass("crystalImage");
        crystal.attr("src", "assets/images/crystal.jpg");
        crystal.attr("data-crystalValue", crystalValue);

        $("#crystals").append(crystal);
        }
    }
    
    function gameStart () {;
       $("#targetNumber").text(targetNumber);
        createCrystals ();
    }

    function reset () {
        $("#targetNumber").empty();
        $(".crystalImage").empty();
        // $("#crystals").empty();
            // Having trouble removing the old crystal images        
        total = 0
        targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
        
        $("#targetNumber").text(targetNumber);
        createCrystals ();
        
        
    }

    


// PROCESS
// ============================================================================
    gameStart();

    $(".crystalImage").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalValue"));

        crystalValue = parseInt(crystalValue);
        total += crystalValue;
        $("#total").text(total);
        
        if (total === targetNumber) {
            alert("You win!");
            reset ();
        }
        else if (total >= targetNumber) {
            alert("You lose");
            reset ();
        }
        // ================TESTING========================
        console.log(total);        

    });