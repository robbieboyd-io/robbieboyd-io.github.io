/*
	Meka JS javascript framework
	Version 1.0
	DDB NZ
	Author: Robbie Boyd
*/

jsrobbieboyd.site.background = function()
{	
	// Private vars
	var _backgroundLoader;
	
	// Public vars
	var module = '#background';
	
	// consts
	var BACKGROUND_PATH = 'media/images/IMG_0396.jpg';
	
	// Constructor
	var Background = function()
	{
		_backgroundLoader = new PreloadJS();
		
		return this;
	}
	
	function bgLoadProgress(ev)
	{
		//alert("bgLoadProgress " + ev.progress);
	}
	
	function bgLoadComplete(ev)
	{
		$(module).html("<img src='"+String(BACKGROUND_PATH)+"' id='bg_image' />");
		
		setTimeout(function()
		{
			_backgroundLoader = null;
			$(window).trigger('resize');
			
			TweenMax.to($('#bg_image'), 0, {alpha:0});
			$('#bg_image').show(); 
			
			TweenMax.to($('#bg_image'), 0.5, {alpha:1});
		}, 200);
	}
	
	function bgLoadError(ev)
	{
		console.log("Background : bgLoadError " + ev);
		
	}
	
	function scaleBackground()
	{
		if($(module +" img").length)
		{
			var sObject = jsRatioUtils.utils.scaleRatio(window, $('#bg_image'));
			$('#bg_image').css("width", String(sObject.width));
			$('#bg_image').css("height", String(sObject.height));
		} 
	}
	
	var update = function()
	{
		// Update the page
		
	}
	
	/*
		public
		Setup the grid and apply initial styles
	*/
	var init = function()
	{
		if(_backgroundLoader)
		{
			_backgroundLoader.onFileError = bgLoadError;
			_backgroundLoader.onFileProgress = bgLoadProgress;
			_backgroundLoader.onComplete = bgLoadComplete;
			_backgroundLoader.loadFile(BACKGROUND_PATH, true);
			
			addListeners();
		}		
	}
	
	var die = function()
	{
		removeListeners();
	}
	
	var animateIn = function()
	{
		
	}
	
	var animateOut = function()
	{
		
	}
	
	/*
		public
		Add event listeners
	*/
	var addListeners = function()
	{
		$(window).bind('resize', onWindowResize);
		$(window).trigger('resize');
	}
	
	/*
		public
		Remove event listeners
	*/
	var removeListeners = function()
	{		
		$(window).unbind('resize', onWindowResize);
	}
	
	function onWindowResize(ev)
	{
		scaleBackground();
	}
	
	return {
		Background : Background, 
		
		// Public Functions
		init : init,
		update : update,
		die : die,
		animateIn : animateIn,
		animateOut : animateOut,
		addListeners : addListeners,
		removeListeners : removeListeners,
		
		//vars
		module : module
	}
};