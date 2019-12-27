import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function(){
  $('#salon-item-slider').owlCarousel({
  	loop: true,
  	margin: 10,
    nav: false,
  	dots: false,
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
  $('#salon-item__promo-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
        dots:true
      },
      750: {
        items: 2,
        dots:false
      },
      900: {
        items:2
      }
    }
  });
  $('#2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
        dots:true
      },
      600: {
        dots:false
      }
    }
  });
});