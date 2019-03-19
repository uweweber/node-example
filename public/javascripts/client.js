/**
 * Created with JetBrains PhpStorm.
 * User: uweweber
 * Date: 28.09.17
 * Time: 13:06
 * To change this template use File | Settings | File Templates.
 */

var socket = io.connect('//localhost:3000');

socket.on('connect', function(data) {

});

socket.on('message', function(data) {
  $('#output').append('<br>' + data)
});

socket.on('broad', function(data) {
  $('#output').append('<br>' + data)
});

socket.on('toall', function(data) {
  $('#output').append('<br>toall: ' + data)
});

$(document).ready(function() {
  var room, username;

  console.log('ready');
  if (!username) {
      $('#chat').hide();

      $('#login').submit(function(e){
          e.preventDefault();
          username = $('#username').val();
          socket.emit('join', $('#username').val());
          $(this).hide();
          $('#chat').show();
      });
  }

  $('#chat').submit(function(e){
    e.preventDefault();
    var message = $('#chat_input').val();
      socket.emit('messages', username+': ' + message);
  });

  /*
  $('#joinroom').click(function(e){
    room = 'xxx';
    socket.emit('joinroom', 'xxx');
  });
  */
})
