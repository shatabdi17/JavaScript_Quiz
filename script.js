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
    const nextButton = $('nextButton');
    const resultContainer = $('#result');

// CREATE A FUNCTION TO LOAD THE QUESTION

  const loadQuestion = ((index) => {
    let q = questions[index];
    //console.log(q);
    questionQ.text(q.question);
    opt1.text(q.option1);
    opt2.text(q.option2);
    opt3.text(q.option3);
    opt4.text(q.option4);
 });

 loadQuestion(currentQuestion);
// CREATE A FUNCTION TO LOAD THE NEXT QUESTION

const loadNextQuestion = (() => {
    const selectedOption = $('input[type = radio]:checked');
    if (!selectedOption) {
         alert('Please select your answer!');
          return;
     }
    let answer = selectedOption.text() ;
    if (q.answer === answer) {
        score = score + 10;
    } else {
        score = score - 5;
    }
    nextButton.on('click', function(){
        loadNextQuestion();
        currentQuestion = currentQuestion + 1;
        //loadNextQuestion(currentQuestion++);
    });
    previousButton.on('click', function (){
        currentQuestion = currentQuestion -1;
        loadNextQuestion();
        //loadNextQuestion(currentQuestion--);
    });

    if (currentQuestion == totalQuestions - 1) {
           nextButton.text('Finish');
      }


    if (currentQuestion == totalQuestions) {
        container.css("display", none);
        resultContainer.css("display", '');
        resultContainer.text(`Your score is ${score}`); 
           return;
       }
});


});