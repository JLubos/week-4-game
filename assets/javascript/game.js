

console.log("It's linked");

// ------------------------ Variables ----------------------------

var score = 0;
var wins = 0;
var losses = 0;



//------------------------- Functions -----------------------------

function randomNumber(){
	var result = Math.floor((Math.random() * 100) + 19);
	return result;

}

function randomNumberCrystals(){
	var result = Math.floor((Math.random() * 12) + 1);
	return result;
}

function reset(){
	if(score == result){
		win++;
		$("#wins").append(wins);
		score =0;
		location.reload();
		alert("You Win!");


	}

	if (score > result){
		score =0;
		location.reload();
		alert("Try again scrub");
		losses++;
		$("#losses").append(losses);

	}

}


//--------------Crystals -----------------

 $(document).ready(function() {

 	var randomNum = $("#randomNumber").append(randomNumber());

      	$("#wins").append(wins);

      	$("#losses").append(losses);


      
      $("#dark").on("click", function() {
        var result = randomNumberCrystals();
        console.log(result);

        score+=result;
        
        $("#score").empty();
        $("#score").append(score);
        console.log("Current Score is: " + score);

       reset();

      });

      $("#bright").on("click", function() {
        var result = randomNumberCrystals();
        console.log(result);

        score+=result;
        $("#score").empty();
        $("#score").append(score);
        console.log("Current Score is: " + score);


        reset();
      });

      $("#serenity").on("click", function() {
        var result = randomNumberCrystals();
        console.log(result);
        
        score+=result;
        $("#score").empty();
        $("#score").append(score);
        console.log("Current Score is: " + score);
      });


      $("#orichalcum").on("click", function() {
        var result = randomNumberCrystals();
        console.log(result);
        
        score+=result;
        $("#score").empty();
        $("#score").append(score);
        console.log("Current Score is: " + score);
      });



      $(".titleCrystal").on("click", function(){
      	reset();

      });

    


    });





 //----------------------- Score -------------------------






//---------------------------Win ---------------------------




 //----------------------------Losses-----------------------

