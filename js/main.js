$(function() {
  $('.card-number').on('focus', function() {
    $(this).trigger('blur');
  })
  
  $('.card').on('click', function() {
    $(this).trigger('focus');
  })
});
