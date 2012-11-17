(function($, window){
	$.ImageScaler = {};
	ImageScaler = function(el, options){
		this._create(el, options);
	};
	
	$.extend(ImageScaler.prototype,{
		version  :  "1.0",
		
		_create: function(el, options) {
			this.options = $.extend(true, $.ImageScaler.defaults, options);
		}
	});
	
	$.ImageScaler.defaults = {
		fadeTime: 400,
		animationDelay: 20,
		swingSpeed: 3,
	};
	
	$.fn.ImageScaler = function(options){
		var self = this;
		ImageScaler = new ImageScaler(self, options);
		
		return ImageScaler;
	};
})(jQuery,window);