$(document).ready(function () {

  $('.hamburger').on('click', function () {
    $(this).parent().find('ul').toggleClass('open');
  });

  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.header__nav ul').clone().appendTo('.mobile-nav');
    $('.hamburger').on('click', function () {
      $('.mobile-nav').addClass('open');
    });
    $('.mobile-nav__close').on('click', function () {
      $('.mobile-nav').removeClass('open');
    });
  }

  $('.mobile-nav__close').on('click', function () {
    $('.mobile-nav').removeClass('open');
  });
});