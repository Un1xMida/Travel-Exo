$(window).load(function() {
    
    $('main .site-content').css({'margin-top':$('.navbar').outerHeight()})
    //Preloader Script
    $('.preloader-cont').fadeOut();
    $('main').fadeIn();


    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.languages .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.languages .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });

});

//TYPED JS
document.addEventListener('DOMContentLoaded', function(){
    $(func = function () {
        $(".element").typed({
          stringsElement: document.getElementById('typed-strings'),
          typeSpeed: 40, // typing speed
          backDelay: 500,
          backSpeed: 0,
          loop: true,
      });

  });
});

$(window).scroll(function(){
    let scrollLimit = $(window).scrollTop();
    if (scrollLimit > 50){
        $('.navbar').addClass('fixed-line');
    }
    else {
        $('.navbar').removeClass('fixed-line');
    }
})

// functional thing to make the spyscroll
$('.button-spy').click(function() {
    var target = $(this).attr("data-link");
    $('html,body').scrollTo(target, 900);
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.goTop').fadeIn();
    } else {
        $('.goTop').fadeOut();
    }
})
$('.goTop').click(function() {
    $('html,body').scrollTo(0, 900);
})


// Site Content Height
// $('.site-content .home-banner').height($(window).height() - $('nav').outerHeight())