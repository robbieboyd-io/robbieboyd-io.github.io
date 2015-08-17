/*
	Meka JS javascript framework
	Version 1.0
	DDB NZ
	Author: Robbie Boyd

	MainModel
	Handle all the external data loads. 
	Static 'consts' are here as well.
*/

jsrobbieboyd.site.model = function()
{
	// consts
	var DOMAIN = String("");
	
	// Public vars
	var pagesData = [];
	
	// Private vars
	var _addressController;
	var _dataPath = ["data/data.json"];
	var _hasStartedUp = false;
	
	// Constructor
	var MainModel = function(ac)
	{
		DOMAIN = baseUrl;
		
		_addressController = ac;
		
		return this;
	}
	
	var init = function()
	{
		loadData();
	}
	
	/**
		public
		Load the init data. eg. Pages or config
	*/
	var loadData = function(path, onSuccess, onError)
	{
		if(path == null) path = _dataPath[0];
		if(onSuccess == null) onSuccess = loadDataSuccess;
		if(onError == null) onError = loadError;
		
		$.ajax({
		 url: path,
		 dataType: 'json',
		 contentType: 'application/json',
		 success: onSuccess,
		 error : onError
		});
	}
	
	function loadError(jqXHR, textStatus, errorThrown)
	{
		loadDataError(errorThrown);
	}
	
	/**
		private
		Called if the init data fails to load
		@param		error		Error message	
	*/
	function loadDataError(error)
	{
		console.log('Load Error : ' + error);
	}
	
	/**
		private
		Called when the init data successfully loads
		@param		data 		Data Object, most likely a JSON Object	
	*/
	function loadDataSuccess(data)
	{
		if(_hasStartedUp)
		{
			// Application has already started up. 	
		} else {
			// Tell View to init
			_hasStartedUp = true;
		
			// Tell View to init
			$('body').trigger(jsrobbieboyd.events.INIT_VIEW);
		}
	}
	
	return {
		MainModel : MainModel,
		
		// return Public functions
		init : init,
		loadData : loadData,
		
		// return 'static' consts
		DOMAIN : DOMAIN,
		
		// return Public vars
		pagesData : pagesData
	}
};