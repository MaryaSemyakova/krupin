(function($) {
    $(function() {

    	var carousel = $('.slideshow')
    	carousel.jcarousel({
			wrap: 'circular'
	    });
		$('.slideshow_prev').jcarouselControl({
	        target: '-=1'
	    });
	    $('.slideshow_next').jcarouselControl({
	        target: '+=1'
	    });

      var carousel = $('.slideshow1')
    	carousel.jcarousel({
			wrap: 'circular'
	    });
		$('.slideshow1_prev').jcarouselControl({
	        target: '-=1'
	    });
	    $('.slideshow1_next').jcarouselControl({
	        target: '+=1'
	    });
      
     	var carousel = $('.slideshow2')
    	carousel.jcarousel({
			wrap: 'circular'
	    });
		$('.slideshow2_prev').jcarouselControl({
	        target: '-=1'
	    });
	    $('.slideshow2_next').jcarouselControl({
	        target: '+=1'
	    });
      
           	var carousel = $('.slideshow3')
    	carousel.jcarousel({
			wrap: 'circular'
	    });
		$('.slideshow3_prev').jcarouselControl({
	        target: '-=1'
	    });
	    $('.slideshow3_next').jcarouselControl({
	        target: '+=1'
	    });
		
		    var carousel = $('.slideshow5')
    	carousel.jcarousel({
			wrap: 'circular'
	    });
		$('.slideshow5_prev').jcarouselControl({
	        target: '-=1'
	    });
	    $('.slideshow5_next').jcarouselControl({
	        target: '+=1'
	    });

        var jcarousel = $('.jcarousel');
        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

    });
})(jQuery);
