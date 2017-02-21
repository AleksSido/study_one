$(document).ready(function(){

    $('.menu-overlay').hide();
    $('.menu-icon').click(function() {
        $('.menu-overlay').show(500);
        $('html').css('overflow', 'hidden');
    });
    $('.menu-overlay__close-ico-container').click(function(ev) {
        ev.preventDefault();
        $('.menu-overlay').hide();
        $('html').css('overflow', 'visible');
    });


    $('.product-modal__underlay').hide();
    $('.catalog-category-card__links-container').click(function(ev) {
        ev.preventDefault();
        $('.product-modal__underlay').show(500);
        $('html').css('overflow', 'hidden');
        $('.product-modal__underlay').click(function(ev) {
            if ($(event.target).is('.product-modal__underlay')) {
                $('.product-modal__underlay').hide();
                $('html').css('overflow', 'visible');    
            }
            
        });
    });
    $('.product-modal__close').click(function() {
        $('.product-modal__underlay').hide();
        $('html').css('overflow', 'visible');
    });


	var windowWidth = $(window).innerWidth();
	for (var i = 0; i < $('.header-slider__img-container').length; i++) {
		$('.header-slider__dots').append("<a href data-slide-index=" + i + " class='header-slider_dot'></a>");			
	}
	$('.header-slider__description-text').hide();
	$('.header-slider__description-text:eq(0)').show();


    $('.header-slider__container').bxSlider({
      	auto: true,
      	pause: 6000,
        pagerCustom: $('.header-slider__dots'),
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
        	$('.header-slider__description-text:eq('+ oldIndex + ')').hide();
    		$('.header-slider__description-text:eq('+ newIndex + ')').show(500);

    		$('.header-slider__slide-number').text('0' + (newIndex+1) );
        }  
    });



	for (var i = 0; i < $('.card-item-slider__slide').length; i++) {
		$('.card-item-slider__dots').append("<a href data-slide-index=" + i + " class='card-item-slider__dot'></a>");			
	}
	$('.card-item-slider__dot').click(function(e){
		e.preventDefault();
	});
	$('.card-item-slider__dot:eq(0)').addClass('active');
	
	$('.card-item-slider__wrapper').bxSlider({
	  	auto: true,
	  	pause: 6000,
	  	slideSelector: $('div.card-item-slider__slide'),
	  	nextText: '>',
	  	prevText: '<',
	  	nextSelector: $('div#ps__next'),
	  	prevSelector: $('div#ps__prev'),
	    pagerCustom: $('div#card-item-thumbnails-id'),
	    onSlideAfter: function($slideElement, oldIndex, newIndex) {
	    	$('.card-item-slider__dot:eq('+ oldIndex + ')').removeClass('active');
	    	$('.card-item-slider__dot:eq('+ newIndex + ')').addClass('active');

			$('.card-item-slider__slide-number').text('0' + (newIndex+1) );
            $('.card-item-slider__size-in').attr('href', 'images/card-item-slide-'+ (newIndex+1) +'.jpg');
	    }  
	});
      
    $('.js-fancybox').fancybox(); 


	var testimonialsSliderDotsNumber = $('.testimonial').length / determineSlidesNumber();
	for (var i = 0; i < testimonialsSliderDotsNumber; i++) {
	  	$('.testimonials-slider__dots').append("<a href data-slide-index=" + i + " class='testimonials-slider__dot'></a>");			
	}
	$('.testimonials-slider__container').bxSlider({
	  	auto: true,
	  	pause: 6000,
	  	controls: false,
	    pagerCustom: $('.testimonials-slider__dots'),
	    slideWidth: 350,
	    minSlides: determineSlidesNumber(),
	    maxSlides: determineSlidesNumber(),
	    slideMargin: determineMargin()
	});
	function determineSlidesNumber() {
    	if (windowWidth < 750) {
    		return 1;
    	} else if (windowWidth < 1170) {
    		return 2;
    	} else {
    		return 3;
    	}
    }
    function determineMargin() {
    	if (windowWidth < 1170) {
    		return 0;
    	} else {
    		return 40;
    	}
    }
    
    $('.partners-slider__container').bxSlider({
	  	auto: true,
	  	pause: 6000,
	  	slideSelector: $('div.partners-slider__item'),
	  	nextText: '>',
	  	prevText: '<',
	  	nextSelector: $('div#ps__next'),
	  	prevSelector: $('div#ps__prev'),
	    pager: false,
	    moveSlides: determineMoveSlidesNumber_psc(),
	    slideWidth: determineSlidesWidth(),
	    minSlides: determineSlidesNumber_psc(),
	    maxSlides: determineSlidesNumber_psc(),
	    slideMargin: determineMargin_psc()
	});    
    function determineSlidesWidth() {
    	if (windowWidth < 480) {
    		return 200;
    	} else if (windowWidth < 970) {
    		return 240;
    	} else if (windowWidth < 1170) {
    		return 290;
    	} else {
    		return 350;
    	}
    }
    function determineSlidesNumber_psc() {
    	if (windowWidth < 1170) {
    		return 3;
    	} else {
    		return 5;
    	}
    }
    function determineMoveSlidesNumber_psc() {
    	if (windowWidth < 1170) {
    		return 1;
    	} else {
    		return 3;
    	}
    }
    function determineMargin_psc() {
    	if (windowWidth < 480) {
    		return 20;
    	} else if (windowWidth < 970) {
    		return 40;
    	} else {
    		return 40;
    	}
    }

    $('.post-slider').bxSlider({
	  	auto: true,
	  	pause: 6000,
	  	slideSelector: $('div.post-slider__img-container'),
	  	nextText: '&gt;',
	  	prevText: '&lt;',
	  	nextSelector: $('div#ps__next'),
	  	prevSelector: $('div#ps__prev'),
	    pager: false
	});
    $('.post-excerbt__slider').each(function(index, el){
    	$(this).bxSlider({
    	  	auto: true,
    	  	pause: 6000,
    	  	slideSelector: $('div.post-excerbt__slide'),
    	  	nextText: '&gt;',
    	  	prevText: '&lt;',
    	  	nextSelector: $('div#ps__next-' + index),
    	  	prevSelector: $('div#ps__prev-' + index),
    	    pager: false
    	  });
    });
	

    $('.advantages-item__description-text').slideUp();
	$('.advantages-item').hover(
		function() {
			$(this).find('.advantages-item__description-text').slideDown();
		},
		function() {
			$(this).find('.advantages-item__description-text').slideUp();
		}
	);
	
	$('.faq-item__text').slideUp();
	$('.faq-item__title').click(function() {
		if ($(this).parents('.faq-item').hasClass('open')) {
			$(this).parents('.faq-item').removeClass('open');
			$(this).next().slideUp();
		} else {
			$(this).parents('.faq-item').addClass('open');
			$(this).next().slideDown();
		}
	});

	$('.service-description').slideUp();
	$('.service-description:eq(0)').slideDown();
	$('.services-submenu__item:eq(0)').addClass('active');
	$('.services-submenu__item').click(function(ev){
		ev.preventDefault();
		if (!$(this).hasClass('active')) {
			$('.service-description').slideUp();
			var itemIndex = $('.services-submenu__item').index($(this));
			$('.service-description:eq(' + itemIndex + ')').slideDown();
			$('.services-submenu__item').removeClass('active');
			$('.services-submenu__item:eq(' + itemIndex + ')').addClass('active');
		} 
	});

	
	for (var i = 0; i < $('.salon-photos__slide').length; i++) {
		$('.salon-photos__dots').append("<a href data-slide-index=" + i + " class='salon-photos__dot'></a>");			
	}
	var salonPhotosSlider = $('.salon-photos__slider').bxSlider({
	  	auto: true,
	  	pause: 6000,
	  	slideSelector: $('div.salon-photos__slide'),
	  	controls: false,
	  	pagerCustom: $('.salon-photos__dots')
	});

    var ourTeamSliderDotsNumber = $('.our-team-slider__item').length / determineMoveSlidesNumber_ots();
    for (var i = 0; i < ourTeamSliderDotsNumber; i++) {
        $('.our-team-slider__dots').append("<a href data-slide-index=" + i + " class='our-team-slider__dot'></a>");           
    }
    $('.our-team-slider').bxSlider({
        auto: true,
        pause: 6000,
        slideSelector: $('div.our-team-slider__item'),
        controls: false,
        pagerCustom: $('.our-team-slider__dots'),
        moveSlides: determineMoveSlidesNumber_ots(),
        slideWidth: 260,
        minSlides: determineMoveSlidesNumber_ots(),
        maxSlides: determineMoveSlidesNumber_ots(),
        slideMargin: determineMargin_ots()
    });        
      function determineMoveSlidesNumber_ots() {
        if (windowWidth < 750) {
            return 1;
        } else if (windowWidth < 970) {
            return 2;
        } else if (windowWidth < 1170) {
            return 3;
        } else {
            return 4;
        }
      }
      function determineMargin_ots() {
        if (windowWidth < 480) {
            return 0;
        } else {
            return 10;
        }
      }

    var companyDiplomasSliderDotsNumber = $('.company-diplomas__slider-item').length / determineMoveSlidesNumber_cds();
    for (var i = 0; i < companyDiplomasSliderDotsNumber; i++) {
        $('.company-diplomas__slider-dots').append("<a href data-slide-index=" + i + " class='company-diplomas__slider-dot'></a>");           
    }
    $('.company-diplomas__slider').bxSlider({
        auto: true,
        pause: 6000,
        slideSelector: $('div.company-diplomas__slider-item'),
        controls: false,
        pagerCustom: $('.company-diplomas__slider-dots'),
        moveSlides: determineMoveSlidesNumber_cds(),
        slideWidth: determineSlidesWidth__cds(),
        minSlides: determineMoveSlidesNumber_cds(),
        maxSlides: determineMoveSlidesNumber_cds(),
        slideMargin: determineMargin_cds()
    });
      function determineSlidesWidth__cds() {
        if (windowWidth < 480) {
            return 290;
        } else {
            return 350;
        }
      }
      function determineSlidesNumber_psc() {
        if (windowWidth < 1170) {
            return 3;
        } else {
            return 5;
        }
      }
      function determineMoveSlidesNumber_cds() {
        if (windowWidth < 750) {
            return 1;
        } else if (windowWidth < 1170) {
            return 2;
        } else {
            return 3;
        }
      }
      function determineMargin_cds() {
        if (windowWidth < 480) {
            return 0;
        } else {
            return 10;
        }
      }         

	ymaps.ready(init);
    var myMap,
    	myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.65523907, 37.25805750],
            zoom: 16
        });
        
        myPlacemark = new ymaps.Placemark([55.65523907, 37.25805750], { 
        	hintContent: 'Мы находимся здесь!'
        });
        myMap.geoObjects.add(myPlacemark);
    }


    if ($('#offices-ya-map').length) {
    	offices_scripts();
    }

    function offices_scripts() {
    	var point_coords = [55.6472, 37.9212];
    	var map_zoom = 15;

    	var point_map;
    	var placemark;
    	var searchResult;


    	var offices = [];
    	$(".offices-list__item").each(function(e){
    		var $this = $(this);
    		var $data = $this.data();
    		if(e == 0) {
    			point_coords = [$data["lat"], $data["long"]];
    		}
    		
    		offices.push([
    			(e+1), 
    			$data["lat"], 
    			$data["long"], 
    			$data["city"], 
    			$data["street"], 
                $data["phone1"], 
                $data["phone2"], 
    			$data["email"],
    			$data["link"],
                $data["img"]
    		]);
    		
    		$this.click(function() {
    			search_yandex_map(e);
                $(".offices-list__item").removeClass('active');
                $this.addClass('active');
    		});
    	});
    	
    	function init_yandex() {
    		if (point_map == undefined) {
    			ymaps.ready(function() {
    				point_map = new ymaps.Map('offices-ya-map', {
    					center: point_coords,
    					zoom: map_zoom
    				});
    				point_map.behaviors.disable('scrollZoom');

    				
    				for (i = 0; i < offices.length; i++) {
    					placemark = new ymaps.Placemark([offices[i][1], offices[i][2]]);
    					point_map.geoObjects.add(placemark);
    				}				
    			});
    		}
    	}
    	function search_yandex_map(index) {
    		point_map.setCenter([offices[index][1], offices[index][2]], 16);
            fillOfficeContacts(offices[index][3], offices[index][4], offices[index][5], offices[index][6], offices[index][7], offices[index][8]);
            fillOfficePhotosSrc(offices[index][9]);
    	}

    	init_yandex();

        function fillOfficeContacts(city, street, tel1, tel2, email, url) {
            $('.office-address__city').html(city);
            $('.office-address__street').html(street);
            $('#office-tel1').html(tel1);
            $('#office-tel2').html(tel2);
            $('#office-email').html(email);
            $('#office-url').html(url);
        }
        fillOfficeContacts(offices[0][3], offices[0][4], offices[0][5], offices[0][6], offices[0][7], offices[0][8]);

        function fillOfficePhotosSrc(imgSrc){
            $('.salon-photos__img').each(function(index, el) {
                $(this).attr('src', imgSrc + '3.jpg');
            });
            salonPhotosSlider.reloadSlider();            
        }

    }


});

