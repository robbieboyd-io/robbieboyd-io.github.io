/*
	Meka JS javascript framework
	Version 1.0
	DDB NZ
	Author: Robbie Boyd

	MainView
	Handle all View 
*/

jsrobbieboyd.site.view = function()
{	
	// Private vars
	var _mainModel;
	var _addressController;
	var _scenes;
	
	// Public vars
	var background;
	var landing;
	
	// Constructor
	var MainView = function(ac, mm)
	{
		_addressController = ac;
		_mainModel = mm;
		
		background = new jsrobbieboyd.site.background().Background();
		landing = new jsrobbieboyd.site.landing().Landing(_addressController, _mainModel);
		
		_scenes = [landing];
		
		background.init();
		
		var isMobile = jsrobbieboyd.settings.isMobile; // ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) );
		//alert('MainView : isMobile = '+isMobile);
		
		$('body').bind(jsrobbieboyd.events.INIT_VIEW, init);
		
		return this;
	}
	
	/*
		public
		Show/Hide the preloader if loading in dynamic content
	*/
	var handlePreloader = function(show)
	{
		if(show)
		{
			$("#preloader").show();
		} else {
			$("#preloader").hide();
		}
	}
	
	/*
		public
		Fired from the Model once all data has been loaded. Start displaying elements
	*/
	var init = function()
	{
		$('body').unbind(jsrobbieboyd.events.INIT_VIEW, init); 
		
		// Set the defaultTransofrmPerspective
		CSSPlugin.defaultTransformPerspective = 600;
		
		handlePreloader(false);
		addListeners();	
		_addressController.initJAddress();
		
		landing.init();
		
		/**
			Check for IE < 8
		*/
		var isLessThanIE8 = $('html').hasClass('lt-ie8');
		if(isLessThanIE8)
		{
			lessThanIE8();
		}
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
		$('body').bind(jsrobbieboyd.events.ADDRESSCONTROLLER_UPDATE, handleMainContent);
	}
	
	/*
		public
		Remove event listeners
	*/
	var removeListeners = function()
	{
		
	}
	
	/*
		public
		Update page content.
		
		@param		pageID		The Page ID to update the content from. Usually will be called from the AddressController but 
								can be updated from anywhere. The advantage with using the AddressController is the URL will be updated
	*/
	var handleMainContent = function(ev, pageID)
	{
		for(var i = 0; i < _scenes.length; i++)
		{
			_scenes[i].die();
			$(_scenes[i].module).hide();
		}
		
		initNewPage(getPage(pageID));	
	}	
	
	/**
		private
		Get the page Object
		@param		pageID		String The string name of the page Object (usually the div id)
		
	*/
	function getPage(pageID)
	{
		var page = null;
		for(var i = 0; i < _scenes.length; i++)
		{
			if(String(pageID) == $(_scenes[i].module).attr('id'))
			{
				page = _scenes[i];
				
				break;
			} else {
				page = _scenes[0];
			}
		}
		
		return page;
	}
	
	function lessThanIE8()
	{
		var ieHTML = '<div id="ie_fixer">\
						<div class="inner">\
							<h2>Your browser may not display this website&nbsp;properly</h2>\
							<p>You are using a very old version of Internet Explorer so some features may not exist and your experience will be limited. Please update to a more recent&nbsp;version.<br />\
							View more browser choices at <a href="http://www.browsehappy.com/" title="Browse Happy - more options!" class="text">Browse&nbsp;Happy</a><br />\
							<span class="icons"><a href="http://www.browsehappy.com/" title="Get Google Chrome" target=""><img src="assets/images/browsers/browser_chrome.png" alt="Get Google Chrome" /><a/>&nbsp;<a href="http://www.browsehappy.com/" title="Get Mozilla Firefox" target=""><img src="assets/images/browsers/browser_firefox.png" alt="Get Mozilla Firefox" /><a/>&nbsp;<a href="http://www.browsehappy.com/" title="Get Opera" target=""><img src="assets/images/browsers/browser_opera.png" alt="Get Opera" /><a/>&nbsp;<a href="http://www.browsehappy.com/" title="Get Apple Safari" target=""><img src="assets/images/browsers/browser_safari.png" alt="Get Apple Safari" /><a/>&nbsp;<a href="http://www.browsehappy.com/" title="Get Mirosoft Internet Explorer" target=""><img src="assets/images/browsers/browser_internetexplorer.png" alt="Get Mirosoft Internet Explorer" /><a/></span></p>\
						</div>\
						<a href="javascript:(0);" title="Close" class="close"><span class="closeX"></span></a>\
					\</div>';
		
		$('#wrapper').prepend(ieHTML);
		
		$('#ie_fixer .close').bind('click', function()
		{
			$('#ie_fixer .close').unbind('click');
			TweenMax.to($('#ie_fixer'), 0.3, {height:0, onComplete:function()
			{
				
				$('#ie_fixer').remove();
			}});
			
			return false;
		});
	}
	
	/**
		private
		Init the new page 
		@param		page		Object The new page we are showing
		
	*/
	function initNewPage(page)
	{
		page.addListeners();
		$(page.module).show();
		page.update();
	}
	
	return {
		MainView : MainView, 
		
		// Public Functions
		init : init,
		handlePreloader : handlePreloader,
		animateIn : animateIn,
		animateOut : animateOut,
		addListeners : addListeners,
		removeListeners : removeListeners,
		handleMainContent : handleMainContent
		
		// public vars
	}
};