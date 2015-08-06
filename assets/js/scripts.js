
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});

    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/2@2x.jpg", {centeredY: false, fade: 200});

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
    	$('.testimonials-container').backstretch("resize");
    });

    /*
        Wow
    */
    new WOW().init();

	/*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
    console.log('si');
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

  $('#big-guy').css("height", $(window).height());

  // CLOCK
  $('#clock').FlipClock(123000, {countdown: true});

  $('#brian').on('click', function() {
    window.location = 'https://www.youtube.com/watch?v=zybsn1qGWMI';
  });

  $('#kindness-card-submit').on('click', function() {
    var details = {
      name: $('input[name=InputName]').val(),
      email: $('input[name=InputEmail]').val()
    }

    $('#kindness-card-submit').addClass('ion-load-c');

    $.post('https://zapier.com/hooks/catch/bx8uud/', details, function() {
      $('#thanks-modal').removeClass('hidden');
      $('#kindness-card-submit').hide();
    });
  });


});


jQuery(window).load(function() {

	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");

	/*
		Hidden images
	*/
	$(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});

$('*[href^="#download"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
