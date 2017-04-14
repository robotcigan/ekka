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

  $('.btn-group .btn--dashed').on('click', function() {

    $(this).toggleClass('btn--dashed-active');
    $('.masonry').masonry('remove', $('.masonry-column'));

    if($(this).text() === "Страны") {

      $('.masonry-column.masonry__country').each(function() {
        var $item = $(this);
        $('.masonry').prepend($item).masonry('prepended', $item);
      });

    }

  })

  // Специальный слайдер на главной
  $('.special-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
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

  $('.special-slider-nav .fa-angle-left').on('click', function() {
    $('.special-slider').slick("slickPrev");
  })

  $('.special-slider-nav .fa-angle-right').on('click', function() {
    $('.special-slider').slick("slickNext");
  })


  // Обычный слайдер
  $('.regular-slider--agencies').slick({
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

  $('.regular-slider--different-width').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
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
  })




  // Табы Tabs
  $('.tabs__nav li').on('click', function() {
    var index = $(this).index();
    $(this).parent().find('li').each(function() {
      $(this).find('a').removeClass('active')
    });
    $(this).find('a').addClass('active');
    $(this).closest('.tabs').find('.tabs__content').hide();
    $(this).closest('.tabs').find('.tabs__content').eq(index).show();
  });

  $('.tabs__select').on('click', function() {
    var index = $(this).index();
    console.log('sad')
    $(this).closest('.tabs').find('.tabs__content').hide();
    $(this).closest('.tabs').find('.tabs__content').eq(index).show();
  })

  $('.tabs__nav li a').on('click', function(e) {
    e.preventDefault();
  });

  // Табы адапт в селект
  $('.tabs__nav').each(function() {
    var parent = $(this).parent();
    $(this).before("<div class='tabs__select'><select class='custom-select'></select></div>");
    $(this).find("a").each(function() {
      var text = $(this).text();
      parent.find('.tabs__select .custom-select').append("<option>" + text + "</option>");
    })
  })


  // Аккордион
  $('.accordion__header .accordion__icon').on('click', function() {
    $(this).toggleClass('accordion__icon--active');
    $(this).closest('.accordion').find('.accordion__body-unvisible').stop().slideToggle()
  });

  // $('.datepicker').datepicker({
  //   lang: 'zh-CN'
  // })


  // Header шапка

  var page = window.location.pathname;

  if(page === '/_index.html') {
    $('.main-header').addClass('main-header--black');
  }

  $(window).scroll(function () {
    if( $(window).scrollTop() > 20 ) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  })


  // Мобильное меню
  $('.menu-open').on('click', function() {
    $('.mobile-menu').addClass('mobile-menu--active');
    $('.site-content__background').addClass('site-content__background--active');
  });

  $('.mobile-menu__close').on('click', function() {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.site-content__background').removeClass('site-content__background--active');
  })


  // Ползунки
  if(rangeSlider != null) {

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

  }



  // Карточка
  function cardOpen(element) {
    element.parent().toggleClass('card-container--active');
    element.parent().find('.card__bottom').stop().slideToggle();
    console.log('open')
  }

  $('.card').on('click', function() {
    cardOpen($(this));
  });

  // $('.card').hover(function() {
  //   var self = $(this);
  //   setTimeout(function() {
  //     cardOpen(self);
  //   }, 5000)
  // })


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


  // Календарь датапикер
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
    $('.pickmeup').addClass('hero-pickmeup');
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
  });

  // Transfer трансфер пульт pult
  var type = 'avia';
  function traneForm() {
    $('.toggle__avia').removeClass('toggle__avia--active');
    $('.toggle__trane').addClass('toggle__trane--active');
    $('.toggle__icon').addClass('toggle__icon--active');
    type = 'avia';
  }

  function aviaForm() {
    $('.toggle__trane').removeClass('toggle__trane--active');
    $('.toggle__avia').addClass('toggle__avia--active');
    $('.toggle__icon').removeClass('toggle__icon--active');
    type = 'train';
  }


  $('.toggle__avia').on('click', function() {
    aviaForm();
  });

  $('.toggle__trane').on('click', function() {
    traneForm();
  });

  $('.toggle__icon').on('click', function() {

    if(type === "avia") {
      traneForm();
    }

    if(type === "train") {
      aviaForm();
    }
  });


  
  // Transfer трансфер
  $('.transfer__avia').on('click', function() {
    $('.transfer__form-block').removeClass('transfer__form-block--active')
    $('.transfer__avia-arrival').addClass('transfer__form-block--active');
  });
  $('.transfer__trane').on('click', function() {
    $('.transfer__form-block').removeClass('transfer__form-block--active')
    $('.transfer__trane-arrival').addClass('transfer__form-block--active');
  });

  $('.comment-form .likes .fa').on('click', function() {
    var index = $(this).index();
    $('.comment-form .likes .fa').removeClass('active');
    for (var x = 0; x < index; x++) {
      $('.comment-form .likes .fa').eq(x).addClass('active');
    }
  })


})
