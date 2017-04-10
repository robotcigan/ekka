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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.tabs__nav li').on('click', function() {
    var index = $(this).index();
    $('.tabs__nav li a').removeClass('active');
    $(this).find('a').addClass('active');
    $('.tabs__content').hide();
    $('.tabs__content').eq(index).show();
  });

  $('.tabs__nav li a').on('click', function(e) {
    e.preventDefault();
  })

  $('.accordion__header .accordion__icon').on('click', function() {
    $(this).toggleClass('accordion__icon--active');
    $(this).closest('.accordion').find('.accordion__body-unvisible').stop().slideToggle()
  });

  // $('.datepicker').datepicker({
  //   lang: 'zh-CN'
  // })


  // Header шапка
  $('.main-header').addClass('main-header--scroll')

  var page = window.location.pathname;

  if(page === '/_index.html') {
    $('.main-header').addClass('main-header--black');
  }

  $('.menu-toggle').on('click', function() {
    $(this).toggleClass('menu-toggle--active');
  });

  var rangeSlider = document.getElementById('range-slider');

  noUiSlider.create(rangeSlider, {
    start: [1000, 7000],
    connect: true,
    tooltips: true,
    range: {
      'min': 0,
      'max': 8000
    }
  });

  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [7],
    step: 1,
    range: {
      'min': 0,
      'max': 10
    }
  });

  var sliderValue = document.getElementById('slider-value');

  slider.noUiSlider.on('update', function( values, handle ) {
    sliderValue.innerHTML = values[handle];
  });

  $('.card').on('click', function() {
    $(this).parent().toggleClass('card-container--active');
    $(this).parent().find('.card__bottom').stop().slideToggle();
  });


});

addEventListener('DOMContentLoaded', function () {

  // var plus_2_days = new Date;
  // plus_2_days.setDate(plus_2_days.getDate() + 2);
  // pickmeup('.datepicker', {
  //   flat      : true,
  //   date      : [
  //     new Date,
  //     plus_2_days
  //   ],
  //   mode      : 'range',
  //   calendars : 2
  // });



  pickmeup('.datepicker-range', {
    position  : 'down',
    mode      : 'range',
    calendars : 2
  });

  pickmeup('.datepicker');
  pickmeup('.datepicker-1');
  pickmeup('.datepicker-2');
  pickmeup('.datepicker-3');
  pickmeup('.datepicker-4');
  pickmeup('.datepicker-5');

});

$(document).ready(function() {


  // Главная страница инпуты
  $('.hero__input').on('click', function() {
    $('.hero__input').removeClass('hero__input--active');
    $(this).addClass('hero__input--active');
  });

  $('.guest-clicker__input').val('1 номер., 1 гость');
  var roomCount = 1;
  var guestCount = 1;

  // Гости и комнаты селект
  $('.guest-clicker__btn').on('click', function() {
    if ( $(this).hasClass('js-room-minus') ) roomCount--;
    if ( $(this).hasClass('js-room-plus') ) roomCount++;
    if ( $(this).hasClass('js-guest-minus') ) guestCount--;
    if ( $(this).hasClass('js-guest-plus') ) guestCount++;

    if(roomCount < 1) roomCount = 1;
    if(roomCount > 4) roomCount = 4;
    if(guestCount > 4) guestCount = 4;
    if(guestCount < 1) guestCount = 1;
    
    $('.guest-clicker__room-number').text(roomCount);
    $('.guest-clicker__guest-number').text(guestCount);
    $('.guest-clicker__input').val(roomCount + ' номер., ' + guestCount + ' гостя');
  });

  // Чекбоксы
  $('.custom-checkbox-label').on('click', function() {
    $(this).toggleClass('custom-checkbox-label--active');
  });

  // Кастомный селект
  $('.custom-select').select2({
    minimumResultsForSearch: Infinity
  });
  $('.select2-search__field').attr('placeholder', 'Поиск...');

  // Телефон маска
  $('.phone-mask').inputmask("+7 (999) 999 99 99");


  // Дата инпуты фокус focus
  $('.input-with-icon input').focusin(function() {
    $(this).parent().find('.fa').addClass('active');
    $(this).addClass('active');
  });

  $('.input-with-icon input').focusout(function() {
    $(this).parent().find('.fa').removeClass('active');
    $(this).removeClass('active');
  });

  // Форма бронирования количество комнат и информация о гостях
  $('#book-guest-count select').on('change', function() {
    var bookGuestCount = parseInt($(this).val());

    console.log(bookGuestCount)

    switch(bookGuestCount) {
      case 1:
        $('.guest-information').hide();
      case 2:
        $('.guest-information').hide();
        $('.guest-information').eq(0).show();
      case 3:
        $('.guest-information').hide();
        $('.guest-information').eq(0).show();
        $('.guest-information').eq(1).show();
      case 4:
        $('.guest-information').hide();
        $('.guest-information').eq(0).show();
        $('.guest-information').eq(1).show();
        $('.guest-information').eq(2).show();
    }
  })

})
