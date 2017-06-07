var wins = 0;
var losses = 0;
var counter = 0;
var targetScore;
var crystal1;
var crystal2;
var crystal3;
var crystal4;


 

function startGame() {

	wins = 0;

	losses = 0;

	counter = 0;


	targetScore = Math.floor(Math.random() * (102)) + 19;
	console.log(targetScore);
	$("#number").html(targetScore);

	crystal1 = Math.floor(Math.random() * 12) + 1;
	crystal2 = Math.floor(Math.random() * 12) + 1;
	crystal3 = Math.floor(Math.random() * 12) + 1;
	crystal4 = Math.floor(Math.random() * 12) + 1;

}

  function continueGame() {

  	if (counter === targetScore) {
  		wins++;
  		$("#wins").html(wins);

      $('#winModal').modal('show')

  	}	else if (counter > targetScore) {
  		losses++;
  		$("#losses").html(losses);

      $('#loseModal').modal('show')
  	}
  }

  function reset() {
  	if (counter >= targetScore) {
  		counter = 0;
  			targetScore = Math.floor(Math.random() * (102)) + 19;
			console.log(targetScore);
			$("#number").html(targetScore);

    } if (counter === targetScore) {
    	targetScore = 0;
    		targetScore = Math.floor(Math.random() * (102)) + 19;
			console.log(targetScore);
			$("#number").html(targetScore);
    }

  }



$( document ).ready(function() {

	startGame();

	wins = 0;
	losses = 0;
	counter = 0;

  $("#crystal1").on("click", function() {
  	counter += crystal1;
  	console.log("crystal1 value:" + crystal1);
  	$("#totalscore").html(counter);
  	continueGame();
  	reset();
  });

  $("#crystal2").on("click", function() {
  	counter += crystal2;
  	console.log("crystal2 value:" + crystal2);
  	$("#totalscore").html(counter);
  	continueGame();
  	reset();
  });

  $("#crystal3").on("click", function() {
  	counter += crystal3;
  	console.log("crystal3 value:" + crystal3);
  	$("#totalscore").html(counter);
  	continueGame();
  	reset();
  });

  $("#crystal4").on("click", function() {
  	counter += crystal4;
  	console.log("crystal4 value:" + crystal4
  		);
  	$("#totalscore").html(counter);
  	continueGame();
  	reset();
  });


});




