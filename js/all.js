$(document).ready(function () {
  $('.fa-bars').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
});