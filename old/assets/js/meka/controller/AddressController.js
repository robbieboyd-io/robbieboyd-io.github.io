/*
	Meka JS javascript framework
	Version 1.0
	RAPPTribal
	Author: Robbie Boyd

	AddressController
	Handle all the JQuery Address and page error checking
	
*/

jsrobbieboyd.site.addresscontroller = function()
{
	// consts
	
	// Public vars
	
	// Private vars
	
	// Constructor
	var AddressController = function()
	{
		return this;
	}
	
	/*
		public
		Any object that will handle a 'page change' calls this. The id will be a the id of the element
		
		@param		to		String page to browse to
	*/
	var changePage = function(to)
	{
		//console.log('AddressController : changePage : to = ' + to);
		$.address.value(to);
	}
	
	var initJAddress = function()
	{
		$.address.init(function(event) {
		
		}).change(function(event) {
		  jAddressChange();
		});
		
		jAddressChange();
	}
	
	/*
		private
		Handles the JQuery Address. 
		Checks the query string to see if any page is after the #/ and if not reverts to use the 
		default START_PAGE that has been declared in the MainModel
	*/
	function jAddressChange()
	{
		//console.log($.address.value());
		var queryString = $.address.value().substring(1);
		//console.log(queryString);
		var pageName = (queryString.length > 0) ? queryString : jsrobbieboyd.settings.PAGE_DEFAULT ;
		//console.log('AddressController : pageName  = ' + pageName);
		var exists = jsPageUtils.utils.existsInArray(jsrobbieboyd.settings.allPageNames, pageName);
		if(exists.bool)
		{
			pageName = jsrobbieboyd.settings.allPageNames[exists.key];
		} else {
			pageName = jsrobbieboyd.settings.PAGE_404;	
		}
		
		$.address.title(jsrobbieboyd.settings.siteName + ' /' + pageName);
		$.address.value(pageName);
		
		$('body').trigger(jsrobbieboyd.events.ADDRESSCONTROLLER_UPDATE, queryString);
	}
	
	return {
		AddressController : AddressController,
		
		// return Public functions
		initJAddress : initJAddress,
		changePage : changePage
		
		// return 'static' consts
		
		// return Public vars
	}
};