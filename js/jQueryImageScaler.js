(function($, window){
	"use strict";
	$.ImageScaler = {};
	
	function getImageSize(el) {
		var size = {};
		size.w = $(el).width();
		size.h = $(el).height();
		
		return size;
	};
	
	var ImageScaler = function(el, options){
		this.SIZE = {};
		this.el = el;
		this.options = $.extend(true, $.ImageScaler.defaults, options);
		this.POSITIONS = { "N" : 0, "NW" : 0, "NE" : 0, "E" : 0, "W" : 0,
						   "S" : 0, "SW" : 0, "SE" : 0
						 };
		
		this._create(el, options);
	};
	
	$.extend(ImageScaler.prototype,{
		version  :  "1.0",
		
		_create: function(el, options) {
			
			this._setImageSize();
			this.createTracker(el);
			
		},
		_setImageSize : function() {
			var el = this.el;
			this.SIZE.w = $(el).width();
			this.SIZE.h = $(el).height();
			console.log($(el).width());
		},
		_getImageSize : function() {
			return this.SIZE;
		},
		createTracker : function(el) {
			console.log($(this.el));
			console.log(getImageSize(el));
			console.log('Tracker Create function');
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