$(function() {
  $('.card-number').on('focus', function() {
    $(this).trigger('blur');
    $(this).focus();
    console.log('Trigger');
  })
});
