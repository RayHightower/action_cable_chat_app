// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

alert('Hello, Universe!');


$(document).on('turbolinks:load',
               function() {
                 $('#messages-table').append("Where will this message appear?");
               });
               // It appears that this message posting is idempotent. It works!
               // It's idempotent even when we stop and start the web server.
               // How does it keep track of individual messages? UUID?

message_appender = function(content) {
  $('#messages-table').append(content);
}

message_replacer = function(content) {
  $('.messages').append(content);
}

$(document).on('turbolinks:load', function() {
  message_replacer('How?');
});


$(document).on('turbolinks:load', function() {
  message_appender('This one was added within the message_appender function.');
});
