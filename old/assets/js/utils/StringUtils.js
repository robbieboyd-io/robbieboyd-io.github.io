/*
	Author:	Robbie Boyd
	Company:DDB NZ
	Version:1.0
	
	Some of these functions have been ported from the Casalib libraries for AS3. See http://casalib.org/
*/

var jsStringUtils = window.jsStringUtils || {};

jsStringUtils.utils = (function()
{
	var StringUtils = function()
	{
		
	}
	
	/**
		
	*/
	var textFillRect = function(element, maxHeight, minFontSize)
	{
		if(minFontSize == null) minFontSize = 55;
		
		$(element).css('font-size', '0');
		//$(element).css('font-size', 10);
		var prevSize = parseInt($(element).css('font-size'));
		
		while($(element).height() < maxHeight)
		{
			prevSize = parseInt($(element).css('font-size'));
			$(element).css('font-size', '+=1');
			
			if(parseInt($(element).css('font-size')) > minFontSize) {
				prevSize = minFontSize;
				break;
			}
		}
		
		$(element).css('fontSize', prevSize);
	}
	
	/*
		// Casalib
		Replaces target characters with new characters.
		
		@param source: 		String to replace characters from.
		@param remove: 		String describing characters to remove.
		@param replaceWith: String to replace removed characters.
		@return String with characters replaced.
	*/
	var replaceAll = function(source, remove, replaceWith)
	{
		return source.split(remove).join(replaceWith);
	}
	
	/**
		// Casalib
		Returns a shortened String.
		
		@param source: String to shorten.
		@param trailing: The number of characters to remove from the end of the String.
		@param leading: The number of characters to remove from the begining of the String.
		@param separator: Characters to seperate the begining and the end of the String.
		@return The shortened String.
		@example
			<code>
				trace(StringUtil.truncate('Mississippi', 2, 3, '...')); // Traces "Mis...pi"
			</code>
	*/
	var truncate = function(source, trailing, leading, separator)
	{
		if(leading == null) leading = 0;
		if(separator == null) separator = "";
		if(source.length < (trailing + leading)) return source;
		
		var lead  = source.substr(0, leading);
		var trail = source.substr(-trailing, trailing);
		
		return lead + separator + trail;
	}
	
	/**
		Determines if String contains search String.
		 
		@param source: String to search in.
		@param searchCompare: String to search for.
		@return Returns the frequency of the search term found in source String.
	*/
	var contains = function(source, searchCompare) 
	{
		var pattern = new RegExp(searchCompare, 'g');
		console.log(source);
		console.log(searchCompare);
		console.log(pattern);
		
		if(pattern == null) return 0;
		
		return source.match(pattern).length;
	}
	
	return {
		StringUtils : StringUtils,
		textFillRect : textFillRect,
		replaceAll : replaceAll,
		truncate : truncate,
		contains : contains
	}
}());