// DOCUMENT READY
$(function () {

    let currentQuestion = 0;
    let score = 0;
    const totalQuestions = questions.length;
    //console.log(totalQuestions);

// ALL THE VARIABLES 
    const container = $('#quizContainer');
    const questionQ =  $('#question');
    const opt1 = $('#opt1');
    const opt2 = $('#opt2');
    const opt3 = $('#opt3');
    const opt4 = $('#opt4');
    const previousButton = $('#prevButton');
    const nextButton = $('#nextButton');
    const resultContainer = $('#result');
    let q;

// PAGE LOAD 

setTimeout(function () {
    $('.footer-container').hide();
}, 1000);

$('.main-container').hide();
$('.start').on('click', function(){
    $(".quiz-start-page").hide();
    $('.main-container').show();

});
// CREATE A FUNCTION TO LOAD THE QUESTION
  const loadQuestion = ((index) => {
    q = questions[index];
    questionQ.text(q.question);
    opt1.siblings('input')[0].checked = false;
    opt1.text(q.option1);
    opt2.siblings('input')[0].checked = false;
    opt2.text(q.option2);
    opt3.siblings('input')[0].checked = false;
    opt3.text(q.option3);
    opt4.siblings('input')[0].checked = false;
    opt4.text(q.option4);
 });

 loadQuestion(currentQuestion);
// CREATE A FUNCTION TO LOAD THE NEXT QUESTION
nextButton.on('click', function () {
    currentQuestion = currentQuestion + 1;
    loadNextQuestion();
 
});
previousButton.on('click', function () {
    currentQuestion = currentQuestion - 1;
    loadNextQuestion();
  
});

function loadNextQuestion() {
    const selectedOption = $('input[name=option]:checked');
    if (selectedOption.length === 0) {
         alert('Please select your answer!');
          return;
     }
    let answer = selectedOption.siblings('span').text();
    //console.log(answer);
    if (q.answer === answer) {
        score = score + 10;
    } else {
        score = score - 5;
    }
    console.log(score)

    if (currentQuestion == totalQuestions - 1) {
           nextButton.text('Finish');
      }

    if (currentQuestion == totalQuestions) {
        container.css("display", "none");
        resultContainer.css("display", "block");

        //score description starts
        if(score < 50) {
            resultContainer.text(`Your score is ${score}! Uh oh you need work harder!`);
        } else if (score >= 50 && score < 80) {
            resultContainer.text(`Your score is ${score}! Wow, that\'s impressive!`);
        } else if (score >= 80) {
            resultContainer.text(`Your score is ${score}! You\'re a JS ninja! Want to take the next level?`);
        }       
         //score description ends
        // resultContainer.text(`Your score is ${score}!`); 
        return;
       }

    loadQuestion(currentQuestion);
};


});

//  < !--TWITTER WIDGET -->
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));

