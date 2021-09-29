console.log("Hello World!");

// $(document).ready(function ($) {
  function animateElements() {
    $('.progressbar').each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');

      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);

        $(this).find('.wordpress').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 3,
          size: 130,
          fill: {
            color: '#00749a'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();

        $(this).find('.gold').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 3,
          size: 130,
          fill: {
            color: 'gold'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();

        $(this).find('.java').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 3,
          size: 130,
          fill: {
            color: '#e22c2d'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();

        $(this).find('.blue').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 3,
          size: 130,
          fill: {
            color: 'blue'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);



  // portfolio
  $('.portfolio-item').isotope(function () {
    itemSelector: '.item'
  });

  $('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');


    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
      filter: selector
    })
    return false;
  });


  //venobox
  $('.venobox').venobox({
    framewidth: '600px',                            // default: ''
    frameheight: 'auto',                             // default: ''
    border: '2px',                              // default: '0'
    bgcolor: '#ffffff60',                        // default: '#fff'
    titleattr: 'data-title',                       // default: 'title'
    numeratio: true,                               // default: false
    infinigall: true,                               // default: false
    share: ['facebook', 'twitter', 'download'] // default: []
  });


  setActiveSection('home');
  function setActiveSection(current) {

    $(".items").removeClass("current-section");
    $(`.items[href='#${current}']`).addClass("current-section");

    $(".nav-link").removeClass("nav-link-active");
    $(`.nav-link[href='#${current}']`).addClass("nav-link-active");

  }

  function navScrolling() {
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
      if (direction == "down") {
        let currentSectionId = $(this.element).attr('id');
        console.log(currentSectionId);
        setActiveSection(currentSectionId);
      }
    }, { offset: '100px' });

    currentSection.waypoint(function (direction) {
      if (direction == 'up') {
        let currentSectionId = $(this.element).attr('id');
        console.log(currentSectionId);
        setActiveSection(currentSectionId);
      }
    }, { offset: '-100px' });
  };
  navScrolling();


  //nav menu icon
  $(".navbar-toggler").click(function () {
    let result = $(".navbar-collapse").hasClass("show");
    //console.log(result);

    if (result) {
      $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    }
    else {
      $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
    }
  });

  $(".nav-item").click(function () {
    $(".navbar-toggler").click();
  });
  //nav menu icon

  // loading
  $(window).on("load", function () {
    $('.loader-container').fadeOut(500, function () {
      $(this).remove();
    });
  });

  var lastFixPos = 0,
    threshold = 100, //sensitivity on scrolling
    $header = $('header');

  $(window).on('scroll', function () {
    var st = $(this).scrollTop();
    var diff = Math.abs($(window).scrollTop() - lastFixPos);

    if (diff > threshold || st < 100) {
      if (st < lastFixPos) {
        // scroll up
        $header.removeClass('hide');
      }
      lastFixPos = st;
    } else if (st > lastFixPos) {
      //scroll down 
      $header.addClass('hide');
    }

  });

  new WOW().init();
// });
