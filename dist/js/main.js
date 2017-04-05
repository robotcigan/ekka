$(document).ready(function () {

  // Замена картинок на background
  $('.direction').each(function() {
    var src = $(this).find('.direction__img').attr('src');
    $(this).css('background', 'url(' + src + ') no-repeat');
  });

  // Masonry сетка
  $('.masonry').masonry({
    itemSelector: '.masonry-column',
  });

  $('.special-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $('.special-slider-nav .fa-angle-left').on('click', function() {
    $('.special-slider').slick("slickPrev");
  })

  $('.special-slider-nav .fa-angle-right').on('click', function() {
    $('.special-slider').slick("slickNext");
  })

  $('.regular-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });


  $('.tabs__nav li').on('click', function() {
    var index = $(this).index();
    $('.tabs__nav li a').removeClass('active');
    $(this).find('a').addClass('active');
    $('.tabs__content').hide();
    $('.tabs__content').eq(index).show();
  });

  $('.accordion__header .accordion__icon').on('click', function() {
    $(this).toggleClass('accordion__icon--active');
    $(this).closest('.accordion').find('.accordion__body-unvisible').stop().slideToggle()
  });

  // $('.datepicker').datepicker({
  //   lang: 'zh-CN'
  // })

  $('.main-header').addClass('main-header--scroll')

  var page = window.location.pathname;

  if(page === '/_index.html') {
    $('.main-header').addClass('main-header--black');
  }

  $('.menu-toggle').on('click', function() {
    $(this).toggleClass('menu-toggle--active');
  })

});