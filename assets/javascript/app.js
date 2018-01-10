$(document).ready(function() {
  $('#flawless').click(function() {
    $('#question-container').animate({
      height: 'toggle'
    }, 1000);
  });


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

  //  The stop function
  function stop() {

    clearInterval(intervalId);
  }
});


// 1. Still need to figure out how to input the timerStar
// 2. Need to input the list of questions/answers
// 3. Once time runs out alert that the time is up and show the score
