/*
	Meka JS javascript framework
	Version 1.0
	DDB NZ
	Author: Robbie Boyd
*/

jsrobbieboyd.site.landing = function()
{	
	// Private vars
	var _mainModel;
	var _addressController;
	var _behanceClicked = false;
	var _portfolioLink = 'http://cargocollective.com/robbieboyd';
	
	// Public vars
	var module = '#landing'; 
	
	// Constructor
	var Landing = function(ac, mm)
	{
		_addressController = ac;
		_mainModel = mm;
		
		return this;
	}
	
	var update = function()
	{
		// Update the page
		
	}
	
	function onPortfolioClick(ev)
	{
		if(_behanceClicked) return false;
		
		_behanceClicked = true;
		
		TweenMax.to($('#wrapper'), 0.6, {alpha:0, onComplete:function()
		{
			window.location.href = _portfolioLink;	
		}});
		
		return false;
	}
	
	/*
		public
		Setup the grid and apply initial styles
	*/
	var init = function()
	{
		addListeners();
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
		$('a.behance').bind('click', onPortfolioClick);
		
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
		
		$('a.behance').unbind('click', onPortfolioClick);
	}
	
	function onWindowResize(ev)
	{
		
	}
	
	return {
		Landing : Landing, 
		
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