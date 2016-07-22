$(document).on('ready', function() {

// fade in modal window
  $('button.signin').on('click', function(){
  $('.modal').fadeIn('slow');
  });

// fade out modal window
  $('button.close').on('click', function(){
    $('.modal').fadeOut('slow');
  });

// add .errorClass to both input elements
  $('button.submit').on('click', function(e){
    $('input').addClass('error');
    e.stopPropagation();
  });

// remove errorClass when user puts cursor in one of input fields
  $('input').on('click', function(e){
    $(this).removeClass('error');
    e.stopPropagation();
  });

// Bonus: Allow the user to click the .modal to close itself
  $('.modal').on('click', function(){
    $(this).fadeOut('slow');
  });

});