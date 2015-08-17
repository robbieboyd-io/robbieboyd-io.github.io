/*
	Author:	Robbie Boyd
	Company:RAPP Tribal
	Version:1.0
	
	Some of these functions have been ported from the Casalib libraries for AS3. See http://casalib.org/
*/

var jsDateUtils = window.jsDateUtils || {};

jsDateUtils.utils = (function()
{
	var DateUtils = function()
	{
		
	}
	
	var monthStringToNumber = function(month)
	{
		var returnNumber = 0;
		
		switch(month.toLowerCase())
		{
			case 'jan' :
			case 'january' :
				returnNumber = 1;
			break;
			
			case 'feb' :
			case 'february' :
				returnNumber = 2;
			break;
			
			case 'mar' :
			case 'march' :
				returnNumber = 3;
			break;
			
			case 'apr' :
			case 'april' :
				returnNumber = 4;
			break;
			
			case 'may' :
				returnNumber = 5;
			break;
			
			case 'jun' :
			case 'june' :
				returnNumber = 6;
			break;
			
			case 'jul' :
			case 'july' :
				returnNumber = 7;
			break;
			
			case 'aug' :
			case 'august' :
				returnNumber = 8;
			break;
			
			case 'sep' :
			case 'september' :
				returnNumber = 9;
			break;
			
			case 'oct' :
			case 'october' :
				returnNumber = 10;
			break;
			
			case 'nov' :
			case 'november' :
				returnNumber = 11;
			break;
			
			case 'dec' :
			case 'december' :
				returnNumber = 12;
			break;
			
			default :
				
			break;
		}
		
		return returnNumber;
	}
	
	var monthNumberToString = function(number)
	{
		var returnString = '';
		
		switch(number)
		{
			case 1 :
				returnString = 'january';
			break;
			
			case 2 :
				returnString = 'february';
			break;
			
			case 3 :
				returnString = 'march';
			break;
			
			case 4 :
				returnString = 'april';
			break;
			
			case 5 :
				returnString = 'may';
			break;
			
			case 6 :
				returnString = 'june';
			break;
			
			case 7 :
				returnString = 'july';
			break;
			
			case 8 :
				returnString = 'august';
			break;
			
			case 9 :
				returnString = 'september';
			break;
			
			case 10 :
				returnString = 'october';
			break;
			
			case 11 :
				returnString = 'november';
			break;
			
			case 12 :
				returnString = 'december';
			break;
			
			default :
				
			break;
		}
		
		return returnString;
	}
	
	return {
		DateUtils : DateUtils,
		
		monthStringToNumber : monthStringToNumber,
		monthNumberToString : monthNumberToString
	}
}());