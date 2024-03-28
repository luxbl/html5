window.onload = function() {

  //get the modal window
  var modal = document.getElementById("answerbox");
var modalIntro = document.getElementById("introbox");

//get the (x) element that close the modal
var close = document.getElementsByClassName("close")[0];
var closeIntro = document.getElementsByClassName("close")[1];

//get the links that open modal
var question = document.getElementsByClassName("question");

//get placeholder p tag in the modal
var questionPlaceHolder = document.getElementById("modal-question");

//get intro music
var music = document.getElementById("music");

// Loop through links and create a click function for each one
var count;
for(count=0; count < question.length; count++) {
  (function(count) {

    // When the user clicks on the link, open the modal
    question[count].onclick = function() {

      // Show modal window
      modal.style.display = "block";

      // Get question from data attribute
      var clickedQuestion = this.getAttribute('data-question');

      questionPlaceHolder.innerHTML = clickedQuestion;

      // Show answer in the console log
      console.log('Answer: ' + this.getAttribute('data-answer'));

      // Remove clicked question from DOM
      this.parentNode.removeChild(this);

      // Prevent link from going anywhere
      return false;
    };
  })(count);
};

// When the initial modal is closed, hide image and play music
closeIntro.onclick = function() {
  modalIntro.style.display = "none";
  music.play();
};

// When the user clicks on (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
  if (event.target == modalIntro) {
    modalIntro.style.display = "none";
    music.play();
  };
};

};
