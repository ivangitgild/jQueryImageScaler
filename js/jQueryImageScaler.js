(function($, window){
	"use strict";
	$.ImageScaler = {};
	
	
	
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
			var size = {}
			$(el).load(function(){
				
				size.w = $(el).width();
				size.h  = $(el).height();
			});
			this.SIZE = size;
		},
		_getImageSize : function() {
			return this.SIZE;
		},
		createTracker : function(el) {
			console.log($(this.el));
			console.log(this._getImageSize());
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