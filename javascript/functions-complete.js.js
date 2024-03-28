window.onload = function() {

  // Get the modal
  var modal = document.getElementById("answerbox");
  var modalIntro = document.getElementById("introbox");

  // Get the (x) element that closes the modal
  var close = document.getElementsByClassName("close")[0];
  var closeIntro = document.getElementsByClassName("close")[1];

  // Get the links that open the modal
  var question = document.getElementsByClassName("question");

  // Get placeholder P tag in modal
  var questionPlaceHolder = document.getElementById("modal-question");

  // Get intro music
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
