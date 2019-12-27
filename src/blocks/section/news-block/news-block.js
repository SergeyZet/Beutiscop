import $ from 'jquery';
import Dotdotdot from 'dotdotdot-js';

document.addEventListener('DOMContentLoaded', ()=>{
	const	wrapperTitle = document.querySelectorAll('.news__title');
	const optionsTitle = {
		ellipsis: '\u2026',
		height: 48

	};
	const wrapper = document.querySelectorAll('.news__text');
	const options = {
		ellipsis: ' ',
		height: 76,
		keep: '.news__text-link'

	};
	wrapperTitle.forEach((el)=> new Dotdotdot( el, optionsTitle ));
	wrapper.forEach((el)=> new Dotdotdot( el, options ));
})