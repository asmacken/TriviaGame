$(document).ready(function() {
  $('#flawless').click(function() {
    $('#question-container').animate({
      height: 'toggle'
    }, 1000);
    run();
  });

  var randomTriviaOne = Math.floor(Math.random() * triviaQuestionOne.length);

  var randomTriviaTwo = Math.floor(Math.random() * triviaQuestionTwo.length);

  var randomTriviaThree = Math.floor(Math.random() * triviaQuestionThree.length);


  var triviaQuestionOne = [
    "When was Beyonce born?",
    "What is the name of her all-woman live ensemble band?"
  ]

  var triviaQuestionTwo = [
    "Beyonce is the first woman to win six Grammys in a single night.",
    "What is the name of her alter ego?"
  ]

  var triviaQuestionThree = [
    "How many children does she have?",
    "Which rapper is Beyonce married to?"
  ]

  $("#question-one").text(triviaQuestionOne[randomTriviaOne]);

  $("#question-two").text(triviaQuestionTwo[randomTriviaTwo]);

  $("#question-three").text(triviaQuestionThree[randomTriviaThree]);

  function run() {
    timerStart = setInterval(decrement, 1000);
  }

  var timer = 120;

  var timerStart;

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the #time-remaining tag.
    $("#time-remaining").html(timer);


    //  Once number hits zero...
    if (timer === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time's Up!");

    }
  }

})
//  The stop function
function stop() {

  clearInterval(intervalId);
}


// 1. Still need to figure out how to input the timerStar
// 2. Need to input the list of questions/answers
// 3. Once time runs out alert that the time is up and show the score
