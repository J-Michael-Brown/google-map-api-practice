import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $.ajax({
    url: 'http://dinoipsum.herokuapp.com/api/',
    type: 'GET',
    data: {
      format: 'json',
      paragraphs: '1',
      words: '1'
    },
    success: function(response) {
      console.log('use API');
      let hangman = new Hangman(response[0][0].toLowerCase());
      showGame(hangman);
      $('#game-area').show();
      runGame(hangman);
    },
    error: function() {
      $('#error-message').text('There was a problem proccessing your API.');
    }
  });

});
