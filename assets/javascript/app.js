$(document).ready(function() {
  $('#flawless').click(function() {
    $('#question-container').animate({
      height: 'toggle'
    }, 1000);
    run();
  });



  var triviaQuestionOne =
  [
    "When was Beyonce born?",
    "What is the name of her all-woman live ensemble band?",
    "How many Grammy Awards does Beyonce have?",
    "When did Beyonce get married?"
    // {
    //   questions:"When was Beyonce born?",
    //   option1: "October 4, 1980",
    //   option2: "November 2, 1979",
    //   option3: "September 4, 1981",
    //   option4: "December 4, 1980",
    //   correct: "Septembr 4, 1981"
    // },
    // {
    //   questions: "What is the name of her all-woman live ensemble band?",
    //   option1: "Girl Power",
    //   option2: "Suga Mamas",
    //   option3: "Super Women",
    //   option4: "The Beyhive",
    //   correct: "Suga Mamas"
    // },
    // {
    //   questions:"How many Grammy Awards does Beyonce have?",
    //   option1: 24,
    //   option2: 23,
    //   option3:25,
    //   option4:22,
    //   correct:22
    // },
    // {
    //   questions: "When did Beyonce get married?",
    //   option1: "April 4, 2008",
    //   option2: "December 4, 2010",
    //   option3: "April 22, 2006",
    //   option4: "December 31, 2007",
    //   correct: "April 4, 2008"
    // }
  ]

    var triviaQuestionTwo =
  [
    "Beyonce is the first woman to win six Grammys in a single night.",
    "What is the name of her alter ego?",
    "Where was Beyonce born?",
    "Beyonce was nominated for a Golden Globe for her role in which film?"
    // {
    //   questions: "Beyonce is the first woman to win six Grammys in a single night.",
    //   option1: "True",
    //   option2: "False",
    //   correct: "True"
    // },
    // {
    //   questions: "What is the name of her alter ego?",
    //   option1: "Queen Bey",
    //   option2: "Mrs. Carter",
    //   option3: "Sasha Fierce",
    //   option4: "Lady Bey",
    //   correct: "Sasha Fierce"
    // },
    // {
    //   questions: "Where was Beyonce born?",
    //   option1: "Dallas, Texas",
    //   option2: "Houston, Texas",
    //   option3: "San Antonio, Texas",
    //   option4: "Austin, Texas",
    //   correct: "Houston, Texas"
    // },
    // {
    //   questions: "Beyonce was nominated for a Golden Globe for her role in which film?",
    //   option1: "Cadillac Records",
    //   option2: "Obsessed",
    //   option3: "Austin Powers in Goldmember",
    //   option4: "Dreamgirls",
    //   correct: "Dreamgirls"
    // }
  ]



  var triviaQuestionThree =
  [
    "How many children does she have?",
     "Which rapper is Beyonce married to?",
     "How many time has Beyonce performed at the Super Bowl?",
     "What was the name of Beyonce's first solo album?"
  // {
  //   questions: "How many children does she have?",
  //   option1: 3,
  //   option2: 0,
  //   option3: 2,
  //   option4: 1,
  //   correct: 3
  // },
  // {
  //   questions: "Which rapper is Beyonce married to?",
  //   option1: "Dwayne Carter",
  //   option2: "Shawn Carter",
  //   option3: "Sean Combs",
  //   option4: "Clifford Harris",
  //   correct: "Shawn Carter"
  // },
  // {
  //   questions: "How many time has Beyonce performed at the Super Bowl?",
  //   option1: 1,
  //   option2: 2,
  //   option3: 3,
  //   option4: 4,
  //   correct: 3
  // },
  // {
  //   questions: "What was the name of Beyonce's first solo album?",
  //   option1: "Beyonce",
  //   option2: "Dangerously in Love",
  //   option3: "Deja Vu",
  //   option4: "Lemonade",
  //   correct: "Dangerously in Love"
  // }
]


  // $("#question-one").text(triviaQuestionOne[0].question);
  //
  // $("#q1opt1").text(triviaQuestionOne[0].option1);
  // $("#q1opt2").text(triviaQuestionOne[0].option2);
  // $("#q1opt3").text(triviaQuestionOne[0].option3);
  // $("#q1opt4").text(triviaQuestionOne[0].option4);
  //
  // $("#q1opt1").text(triviaQuestionOne[1].option1);
  // $("#q1opt2").text(triviaQuestionOne[1].option2);
  // $("#q1opt3").text(triviaQuestionOne[1].option3);
  // $("#q1opt4").text(triviaQuestionOne[1].option4);
  //
  // $("#q1opt1").text(triviaQuestionOne[2].option1);
  // $("#q1opt2").text(triviaQuestionOne[2].option2);
  // $("#q1opt3").text(triviaQuestionOne[2].option3);
  // $("#q1opt4").text(triviaQuestionOne[2].option4);
  //
  // $("#q1opt1").text(triviaQuestionOne[3].option1);
  // $("#q1opt2").text(triviaQuestionOne[3].option2);
  // $("#q1opt3").text(triviaQuestionOne[3].option3);
  // $("#q1opt4").text(triviaQuestionOne[3].option4);
  //
  //
  // $("#question-two").text(triviaQuestionTwo[triviaTwo]);
  //
  // $("#q2opt1").text(triviaQuestionTwo[0].option1);
  // $("#q2opt2").text(triviaQuestionTwo[0].option2);
  // $("#q2opt3").text(triviaQuestionTwo[0].option3);
  // $("#q2opt4").text(triviaQuestionTwo[0].option4);
  //
  //
  // $("#question-three").text(triviaQuestionThree[triviaThree]);

  var triviaOne = Math.floor(Math.random() * triviaQuestionOne.length);

  var triviaTwo = Math.floor(Math.random() * triviaQuestionTwo.length);

  var triviaThree = Math.floor(Math.random() * triviaQuestionThree.length);


  $("#question-one").text(triviaQuestionOne[triviaOne]);

  $("#question-two").text(triviaQuestionTwo[triviaTwo]);

  $("#question-three").text(triviaQuestionThree[triviaThree]);

  var timer = 15;

  var timerStart;

  function run() {
    timerStart = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the #time-remaining tag.
    $("#time-remaining").text(timer);


    //  Once number hits zero...
    if (timer === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.

    }
  }


//  The stop function
function stop() {
alert("Time's Up!");
  clearInterval();
}

});
// 1. Still need to figure out how to make the timer stop at zero and reset
// 2. I have the questions as 3 arrays that are made up of objects
// 3. Once time runs out alert that the time is up and show the score... I wasn't able to get this far.
