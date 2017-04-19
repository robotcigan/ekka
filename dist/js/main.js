$(document).ready(function () {

  // Замена картинок на background
  $('.direction').each(function() {
    var src = $(this).find('.direction__img').attr('src');
    $(this).css('background', 'url(' + src + ') no-repeat');
  });

  // Masonry сетка
  $('.masonry').masonry({
    itemSelector: '.masonry-column'
  });

  $('.masonry').isotope({ filter: '*' });

  $('.btn.btn--dashed').eq(0).on('click', function() {
    $('.masonry').isotope({ filter: '*' });
  })

  $('.btn.btn--dashed').eq(1).on('click', function() {
    $('.masonry').isotope({ filter: '.masonry-column__country' });
  })

  $('.btn.btn--dashed').eq(2).on('click', function() {
    $('.masonry').isotope({ filter: '.masonry-column__city' });
  })

  // $('.popular-direction-mobile select').on('change', function() {
  //   if($(this).find('option').index(0)) {
  //     $('.masonry-row').isotope({ filter: '*' });
  //     console.log(0)
  //   }
  //   if($(this).find('option').index(1)) {
  //     $('.masonry-row').isotope({ filter: '.masonry-column__country' });
  //     console.log(1)
  //   }
  //   if($(this).find('option').index(2)) {
  //     $('.masonry-row').isotope({ filter: '.masonry-column__city' });
  //     console.log(2)
  //   }
  // })

  $('.btn.btn--dashed').on('click', function() {
    $('.btn.btn--dashed').removeClass('btn--dashed-active');
    $(this).addClass('btn--dashed-active');
  })

  // $('.popular-direction-desktop').on('click', function() {
  //   console.log('adsg')

  //   // $(this).toggleClass('btn--dashed-active');
  //   $('.masonry').masonry('remove', $('.masonry-column'));

  //   if($(this).text() === "Страны") {

  //     $('.masonry-column.masonry__country').each(function() {
  //       var $item = $(this);
  //       $('.masonry').prepend($item).masonry('prepended', $item);
  //     });

  //   }

  // })

  // Специальный слайдер на главной
  $('.special-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
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

  $('.hotels-slider').slick({
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
  })

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

  // $('.tabs__select .custom-select').on('click', function() {
  //   var index = $(this).index();
  //   console.log('sad')
  //   $(this).closest('.tabs').find('.tabs__content').hide();
  //   $(this).closest('.tabs').find('.tabs__content').eq(index).show();
  // })

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
  });

  $('.tabs__select').on('change', function() {
    var parent = $(this).parent();
    var index = $(this).find('option:selected').index();
    parent.find('.tabs__content').hide();
    parent.find('.tabs__content').eq(index).show();
  });


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

  if(page === '/ekka/_index.html') {
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

  var rangeSlider = document.getElementById('range-slider');
  
  if(rangeSlider != null) {

    noUiSlider.create(rangeSlider, {
      format: wNumb({
        decimals: 0
      }),
      start: [1000, 7000],
      connect: true,
      range: {
        'min': 0,
        'max': 8000
      }
    });

    var rangeSliderValueLeft = document.getElementById('range-slider-left');
    var rangeSliderValueRight = document.getElementById('range-slider-right');


    rangeSlider.noUiSlider.on('update', function( values, handle ) {
      rangeSliderValueLeft.innerHTML = values[0];
      rangeSliderValueRight.innerHTML = values[1];
    });

    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
      format: wNumb({
        decimals: 0
      }),
      connect: [true, false],
      start: [4],
      step: 1,
      range: {
        'min': 0,
        'max': 5
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
    calendars : 2,
    // hide_on_select : true
  });

  pickmeup('.datepicker-small-range', {
    mode: 'range'
  })

  pickmeup('.datepicker');
  pickmeup('.datepicker-1');
  pickmeup('.datepicker-2');
  pickmeup('.datepicker-3');
  pickmeup('.datepicker-4');
  pickmeup('.datepicker-5');

  $('.pmu-button').text('');

});

$(document).ready(function() {


  // Главная страница инпуты
  $('.hero__input').on('click', function() {
    $('.hero__input').removeClass('hero__input--active');
    $(this).addClass('hero__input--active');
    $('.pickmeup').addClass('hero-pickmeup');
  });

  $('.datepicker-range').on('click', function(e) {
    e.preventDefault();
    $('.guest-clicker__modal').removeClass('guest-clicker__modal--active');
  })

  $(document).on('click', function(event) {
    var div = $(".guest-clicker__modal"); // тут указываем ID элемента
    if (!$(event.target).closest('.guest-clicker__modal').length && !$(event.target).closest('.guest-clicker__input').length) {
      $(".guest-clicker__modal").removeClass('guest-clicker__modal--active');
    }
  });

  $('.guest-clicker__input').on('click', function() {
    var modal = $(this).parent().find('.guest-clicker__modal');
    modal.toggleClass('guest-clicker__modal--active');
  })

  $('.guest-clicker__input').val('1 номер., 1 гость');
  var roomCount = 1;
  var guestCount = 1;

  // Гости и комнаты селект
  $('.guest-clicker__btn').on('click', function() {
    if ( $(this).hasClass('js-room-minus') ) roomCount--;
    if ( $(this).hasClass('js-room-plus') ) roomCount++;
    if ( $(this).hasClass('js-guest-minus') ) guestCount--;
    if ( $(this).hasClass('js-guest-plus') ) guestCount++;

    var roomWord = ' номер, ';
    var guestWord = ' гость';

    if(roomCount < 1) {
      roomCount = 1;
    }
    if(roomCount > 4) {
      roomCount = 4;
    }
    if(roomCount >= 2) {
      roomWord = ' номера, ';
    } else {
      roomWord = ' номер, ';
    }
    if(guestCount < 1) {
      guestCount = 1;
    }
    if(guestCount > 4) {
      guestCount = 4;
    }
    if(guestCount >= 2) {
      guestWord = ' гостя';
    } else {
      guestWord = ' гость';
    }

    
    $('.guest-clicker__room-number').text(roomCount);
    $('.guest-clicker__guest-number').text(guestCount);
    $('.guest-clicker__input').val(roomCount + roomWord + guestCount + guestWord);
  });

  $('.hero__form--search').on('click', function() {
    $('.pickmeup').addClass('pickmeup--search')
  })

  $('.room-form-book').on('click', function() {
    $('.pickmeup').addClass('pickmeup--room')
  })

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

    if(bookGuestCount === 1) $('.guest-information').hide();
    if(bookGuestCount === 2) {
      $('.guest-information').hide();
      $('.guest-information').eq(0).css('display', 'flex');
    }
    if(bookGuestCount === 3) {
      $('.guest-information').hide();
      $('.guest-information').eq(0).css('display', 'flex');
      $('.guest-information').eq(1).css('display', 'flex');
    }
    if(bookGuestCount === 4) {
      $('.guest-information').hide();
      $('.guest-information').eq(0).css('display', 'flex');
      $('.guest-information').eq(1).css('display', 'flex');
      $('.guest-information').eq(2).css('display', 'flex');
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

  $('#transfer-checkbox-1').addClass('active');
  $('#transfer-checkbox-2').addClass('active');

  $('#transfer-checkbox-1').on('click', function() {
    $('.transfer__arrival').hide();
    $(this).toggleClass('active');
    if( $('#transfer-checkbox-1').hasClass('active') ) {
      $('.transfer__arrival').show();
    }
  })
  $('#transfer-checkbox-2').on('click', function() {
    $('.transfer__departure').hide();
    $(this).toggleClass('active');
    if( $('#transfer-checkbox-2').hasClass('active') ) {
      $('.transfer__departure').show();
    }
  })

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

    console.log(type)
    if(type === "avia") {
      traneForm();
    }


    if(type === "train") {
      aviaForm();
    }
  });


  
  // Transfer трансфер блоки
  $('.transfer__avia').on('click', function() {
    $('.transfer__form-block').removeClass('transfer__form-block--active')
    $('.transfer__avia-arrival').addClass('transfer__form-block--active');
  });

  $('.transfer__trane').on('click', function() {
    $('.transfer__form-block').removeClass('transfer__form-block--active')
    $('.transfer__trane-arrival').addClass('transfer__form-block--active');
  });


  // Сердечки лайки
  $('.comment-form .likes .fa').on('click', function() {
    var index = $(this).index();
    $('.comment-form .likes .fa').removeClass('active');
    for (var x = 0; x < index; x++) {
      $('.comment-form .likes .fa').eq(x).addClass('active');
    }
  });


  // Поиск звезды
  $('.search-aside .fa-star').on('click', function() {

    var index = $(this).index();
    $(this).closest('.stars').find('.fa').removeClass('active');

    for (var x = -1; x < index; x++) {
      $(this).closest('.stars').find('.fa').eq(x+1).addClass('active');
    }

  });


  // Датапикер календарь
  $('.book').on('click', function() {
    $('.pickmeup').addClass('pickmeup--book');
  });

  // Image gallery
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-animation',
    gallery: {
      enabled:true
    }
  });

  // Modal модальное окно
  $('.objects-on-map').magnificPopup({
      type: 'inline',
      callbacks: {
        beforeOpen: function() {
          myMap()
        }
      }
  });

  $('.social-share').magnificPopup({
    type: 'inline'
  })

  $(window).scroll(function () {
    if( $(window).scrollTop() > 500 ) {
      $('.up-btn').addClass('up-btn--active');
    } else {
      $('.up-btn').removeClass('up-btn--active');
    }
  })

  $('.up-btn').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })

})
