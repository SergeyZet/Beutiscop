import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function(){
  $('#promo').owlCarousel({
  	loop: true,
  	margin: 30,
  	dots: true,
  	dotsEach: true,
  	smartSpeed: 700,
  	responsive: {
  		0: {
  			items: 1
  		},
  		700: {
  			items:2,
  			margin: 10
  		},
  		1200: {
  			items:3
  		}
  	}
  });
});