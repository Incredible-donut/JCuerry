$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').fadeIn(200);
});

$('.spoiler').on('click', function () {
  $('.spoilerButton').fadeIn();
  $('.spoiler').hide();
});
