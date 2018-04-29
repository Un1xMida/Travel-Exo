$(window).load(function() {
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