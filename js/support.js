UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/6DoRuCZPIq2VowLHiOFdA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();
UserVoice.push(['set', {accent_color: '#18bc9c', locale: 'en', menu_enabled: true, }]);
(function($) {
	$(document).ready(function() {
		$('.support-contact-link').click(function () {
			UserVoice.push(['show', {
			  mode: 'contact',
			  position: 'top-right'
			}]);
			return false;
		});
	});
})(jQuery);