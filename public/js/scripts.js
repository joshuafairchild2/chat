var socket = io();

//emit chat message when enter key is pressed
$("#chat-input").keydown(function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    if ($('#chat-input').val() != '') {
      socket.emit('chat-message', $('#chat-input').val());
      $('#chat-input').val('');
    }
  }
});


//receive chat message from user
socket.on('chat-message', function(message) {
  $('#chat-container').append(message + '<br>');
});
