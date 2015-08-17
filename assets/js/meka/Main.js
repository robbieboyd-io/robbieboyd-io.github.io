/*
	Meka JS javascript framework
	Version 1.0
	DDB NZ
	Author: Robbie Boyd
*/

var jsrobbieboyd = window.jsrobbieboyd || {};

jsrobbieboyd.site = (function()
{
	// Public vars
	var mainModel;
	var mainView;
	var addressController;
	
	// Private vars
	
	// Constructor
	var Main = function()
	{
		/*
			Init Class paths
		*/
		addressController = new jsrobbieboyd.site.addresscontroller().AddressController();
		mainModel = new jsrobbieboyd.site.model().MainModel(addressController);
		mainView = new jsrobbieboyd.site.view().MainView(addressController, mainModel);
		
		// Tell Model to load the initial data
		mainModel.init();
	}
	
	return {
		Main : Main, 
		
		addressController : addressController,
		mainModel : mainModel,
		mainView : mainView
	}
}());