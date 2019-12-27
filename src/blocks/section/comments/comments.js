import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function(){
  $('#comment-slider').owlCarousel({
  	loop: true,
  	margin: 30,
  	dots: true,
  	dotsEach: true,
  	smartSpeed: 700,
  	responsive: {
  		0: {
  			items: 1
  		},
  		900: {
  			items:2
  		},
  		1200: {
  			items:2,
        dots: false
  		}
  	}
  });
});