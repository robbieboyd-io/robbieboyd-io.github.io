/*
	Author:	Robbie Boyd
	Company:DDB New Zealand
	Version:1.0
*/

var jsRatioUtils = window.jsRatioUtils || {};

jsRatioUtils.utils = (function()
{
	var RatioUtils = function()
	{
		
	}
	
	var scaleRatio = function(container, img)
	{
		// Container vars
		var containerWidth = $(container).width();
		var containerHeight = $(container).height();
		var containerRatio = containerWidth / containerHeight;
		
		// Image vars
		var imageWidth = $(img).width();
		var imageHeight = $(img).height();
		var imageRatio = imageWidth / imageHeight;	
		
		var sizesObj = new Object();
		
		if(imageRatio < containerRatio){ //Width less than height
			sizesObj.width = containerWidth,
			sizesObj.height = containerWidth * (1/imageRatio);
		} 
		else if(imageRatio > containerRatio){ //Height less than width
			sizesObj.width = containerHeight * imageRatio,
			sizesObj.height = containerHeight
		} 
		else if(imageRatio == containerRatio){ // If the ratios are the same
			if(imageWidth <= imageHeight){
				sizesObj.width = containerWidth,
				sizesObj.height = containerWidth * (1/imageRatio)
			} else {
				sizesObj.width = containerHeight * imageRatio,
				sizesObj.height = containerHeight
			}
		}
		
		return sizesObj; 
	}
	
	return {
		RatioUtils : RatioUtils,
		
		scaleRatio : scaleRatio
	}
}());