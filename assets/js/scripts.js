// Monty Python's Flying Trivia
// basic trivia game assignment
// © Richard Trevillian, 2018-09-01
// University of Richmond, Full Stack Web Development Bootcamp
// JavaScript

let answersArray = [
    "Tim",
    "Norwegian Blue",
    "Bunny",
    "Mousse",
    "Elderberries",
    "Eels",
    "Anarcho-Syndicalist Commune",
    "Sheep",
    "Completely Different",
    "Grail-shaped",
    "Prevent Earthquakes",
    "African or European Swallow?",
    "Ni!",
    "Herring",
    "Sir Robin's Minstrels",
    "The Book of Armaments",
    "The Spanish Inquisition",
    "The Larch",
    "She turned me into a newt",
    "What... the curtains?",
    "It is a silly place",
    "Idiom",
    "Scratched",
];


$(document).ready(function () {

    // ACTIONS PERFORMED WHEN CLICKING START BUTTON ON HOME PAGE
    $('#btn_start').click(function () {

        // hide the Start Page DIV, and
        $('#start_box').attr('style', 'display:none;');
        // show the Quiz questions DIV
        $('#quiz_box').attr('style', 'display:block;');

    });

    // ACTIONS PERFORMED WHEN CLICKING DONE BUTTON ON QUIZ PAGE
    $('#btn_done').click(function () {

        // hide the Quiz questions DIV, and...
        $('#quiz_box').attr('style', 'display:none;');
        // show the Results page DIV
        $('#results_box').attr('style', 'display:block;');


        // for some reason, these variables have be initialized OUTSIDE of the below .each function
        // otherwise there is only a single item in the resulting checkedArray
        let checkedButtons = '';
        let checkedB = '';
        let checkedArray = [];

        // for .each :checked item (radio button) inside the DIV id="quizForm"...
        $("#quizForm :checked").each(function () {
            // make the value of checkedButtons a concatenated, comma-separated String
            // of all the values of the value="#" property of .each (this) radio button selected 
            checkedButtons = checkedButtons + ($(this).val()) + ",";
            // an intermediate variable needed to remove the final comma from the String...
            checkedB = checkedButtons.slice(0, -1);
            // before turning the modified string into an Array to be compared against the answers Array
            checkedArray = checkedB.split(',');

        });

        // console.log(checkedArray);

        // variables for output of results
        let aCorrect = 0;
        let aIncorrect = 0;
        let aUnanswered = 0;

        // FOR loop for testing each user response in the checkedArray created above
        for (let j = 0; j < checkedArray.length; j++) {

            if (checkedArray[j] === "XXX") {
                aUnanswered = aUnanswered + 1;
            } else if (checkedArray[j] === answersArray[j]) {
                aCorrect = aCorrect + 1;
            } else {
                aIncorrect = aIncorrect + 1;
            }
        }

        function showResults() {

            $('#theCorrect').text(aCorrect);
            $('#theIncorrect').text(aIncorrect);
            $('#theUnanswered').text(aUnanswered);
        }

        showResults();

    });

    // ACTIONS PERFORMED WHEN CLICKING PLAY AGAIN BUTTON ON RESULTS PAGE
    $('#btn_playAgain').click(function () {

        $('#results_box').attr('style', 'display:none;');
        $('#start_box').attr('style', 'display:block;');
        // console.log('hi!');

    });



});