import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function(){
  $('#service-slider').owlCarousel({
  	loop: true,
  	margin: 10,
  	dots: true,
  	dotsEach: true,
  	smartSpeed: 700,
  	responsive: {
  		0: {
  			items: 2
  		},
      600: {
        items:3
      },
  		900: {
  			items:4
  		},
  		1200: {
  			items:5
  		}
  	}
  });
  $('#service-link-slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    dotsEach: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items:1
      },
      1200: {
        items:1
      }
    }
  });
});