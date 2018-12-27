// allows content to be on a single page

$(function() {

  $('#homeLink a').on('click', function (e) {

      e.preventDefault();

      $('#homeLink a').css('font-weight','700');
      $('#aboutLink a').css('font-weight','400');
      $('#workLink a').css('font-weight','400');

      $('#homePage').removeClass('hide');
      $('#aboutPage').addClass('hide');
      $('#aboutPageBG').addClass('hide');
      $('#workPage').addClass('hide');

    });

  $('#aboutLink a ').on('click', function (e) {

      e.preventDefault();

      $('#homeLink a').css('font-weight','400');
      $('#aboutLink a').css('font-weight','700');
      $('#workLink a').css('font-weight','400');

      $('#homePage').addClass('hide');
      $('#aboutPage').removeClass('hide');
      $('#aboutPageBG').removeClass('hide');
      $('#workPage').addClass('hide');

  });

  $('#workLink a').on('click', function (e) {

    e.preventDefault();

    $('#homeLink a').css('font-weight','400');
    $('#aboutLink a').css('font-weight','400');
    $('#workLink a').css('font-weight','700');
  
    $('#homePage').addClass('hide');
    $('#aboutPage').addClass('hide');
    $('#aboutPageBG').addClass('hide');
    $('#workPage').removeClass('hide');

  });

});


// Sticky header

$(window).scroll(function() {
  var hT = $('#scroll-to').offset().top,
      hH = $('#scroll-to').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
  $('nav').css('opacity', '.85');
} else {
  $('nav').css('opacity', '1');
  }
});


// // Auto typing on home page

var typed3 = new Typed('#typed3', {
  strings: ['Hi, I\'m <strong>Matt Chudoba</strong>', 'I\'m a <strong>software engineer</strong>', 'I\'m a <strong>gamer</strong>',  'I\'m a <strong>pug dad</strong>', 'I\'m <strong>Matt Chudoba</strong>'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  smartBackspace: true,
  loop: false,
  showCursor: false
});
