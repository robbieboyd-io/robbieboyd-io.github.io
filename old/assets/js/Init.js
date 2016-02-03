/*
	Meka JS javascript framework
	Version 1.0
	DDB NZ
	Author: Robbie Boyd
*/

var main;
var isLoggedIntoFacebook = false;
var baseUrl = 'http://www.robbieboyd.co.nz/';

$.ajaxSetup({ cache: true });
$('#preloader').show();

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function() {
  if (!window.console) {
    window.console = {};
  }
  // union of Chrome, FF, IE, and Safari console methods
  var m = [
    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
  ];
  // define undefined methods as noops to prevent errors
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) {
      window.console[m[i]] = function() {};
    }    
  } 
})();

Modernizr.load([
  {
	  // You can also give arrays of resources to load.
	  both : [
	  	// libs
		'assets/js/libs/jquery.pngFix.js',
        'assets/js/libs/tweenmax/TweenMax.min.js',
		'assets/js/libs/tweenmax/plugins/ScrollToPlugin.min.js',
        'assets/js/libs/tweenmax/TimelineMax.min.js',
		'assets/js/libs/tweenmax/plugins/CSSPlugin.min.js',
		'assets/js/libs/tweenmax/plugins/GreenProp.min.js',
		'assets/js/libs/detectmobilebrowser.js',
		'http://code.createjs.com/preloadjs-0.1.0.min.js',
		
		// Site Meka
		'assets/js/utils/StringUtils.js',
		'assets/js/utils/PageUtils.js',
		'assets/js/utils/NumberUtils.js',
		'assets/js/utils/DateUtils.js',
		'assets/js/utils/RatioUtils.js',
      	'assets/js/meka/Main.js',
		'assets/js/meka/Settings.js',
		'assets/js/meka/events/Events.js',
		'assets/js/meka/controller/AddressController.js',
        'assets/js/meka/model/MainModel.js',
		'assets/js/meka/view/MainView.js',
		'assets/js/meka/view/Landing.js',
		'assets/js/meka/view/Background.js'
	],
	complete : function () {
	  // Run this after everything in this group has downloaded
	  // and executed, as well everything in all previous groups
	  
	  init();
	}
  }
]);

function init()
{
	$(document).ready(function(e) {
		jsrobbieboyd.settings.isMobile = jQuery.browser.mobile;
		
		main = new jsrobbieboyd.site.Main();
		
		$('#preloader').hide();
					
		$(document).pngFix(); 
	});
}

(function ($) {
    $.fn.rotationDegrees = function () {
         var matrix = this.css("-webkit-transform") ||
    this.css("-moz-transform")    ||
    this.css("-ms-transform")     ||
    this.css("-o-transform")      ||
    this.css("transform");
    if(typeof matrix === 'string' && matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return angle;
   };
}(jQuery));