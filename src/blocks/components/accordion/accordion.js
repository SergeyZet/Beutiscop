(function() {
	const accordion = document.getElementById('salon-item__accordion');
	[].forEach.call(document.querySelectorAll('.accordion__item'), function(item) {
		item.addEventListener('click', function(e) {
			display=(this.nextElementSibling.style.display=='block') ? 'none' : 'block';
			[].forEach.call(this.parentNode.querySelectorAll('.accordion__content'), function(panels) {
				panels.style.display='none';
			});
			this.nextElementSibling.style.display=display;
		});
	});
})()