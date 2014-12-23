$(document).ready(function(){
	var slideWidth= 550,
		slidePos= 1;

	$("#1").click(function(){
		rotate(1)
		slidePos = 1;
	});
	$("#2").click(function(){
		rotate(2)
		slidePos = 2;
	});
	$("#3").click(function(){
		rotate(3)
		slidePos = 3;
	});
	$("#4").click(function(){
		rotate(4)
		slidePos = 4;
	});
	$("#5").click(function(){
		rotate(5)
		slidePos = 5;
	});
	$("#6").click(function(){
		rotate(6)
		slidePos = 6;
	});
	$("#7").click(function(){
		rotate(7)
		slidePos = 7;
	});
	$("#8").click(function(){
		rotate(8)
		slidePos = 8;
	});
	$("#9").click(function(){
		rotate(9)
		slidePos = 9;
	});
	$("#10").click(function(){
		rotate(10)
		slidePos = 10;
	});

	function rotate(targetSlide){
		var slideDistance = (targetSlide-slidePos)*slideWidth;

		$("#subcontainer").animate({
			left: '-='+slideDistance
		}, 500, 'linear');
	}
});
<!-- Begin
// Insert number of questions
var numQues = 10;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(10);

// Insert answers to questions
answers[0] = "Watch a movie with wife/husband and kids";
answers[1] = "a high-end luxury watch, say a Rolex";
answers[2] = "White";
answers[3] = "Warm and Sunny";
answers[4] = "Spend it at a luxury spa resort";
answers[5] = "Tea";
answers[6] = "Quiet";
answers[7] = "Yes, I am a brave guy/woman";
answers[8] = "Dog";
answers[9] = "Hills/Mountains";

// Do not change anything below here ...
function getScore(form) {
var score = 0;
var currElt;
var currSelection;
for (i=0; i<numQues; i++) {
currElt = i*numChoi;
for (j=0; j<numChoi; j++) {
currSelection = form.elements[currElt + j];
if (currSelection.checked) {
if (currSelection.value == answers[i]) {
  score++;
  break;
}
}
}
}
score = Math.round(score/numQues*100);
form.percentage.value = score + "%";
var correctAnswers = "";
for (i=1; i<=numQues; i++) {
correctAnswers += i + ". " + answers[i-1] + "\r\n";
}
form.solutions.value = correctAnswers;
}
//  End -->

