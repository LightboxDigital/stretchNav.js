/**
 * stretchNav.js
 * Copyright (C) 2014 Warren Bickley & Lightbox Creative Studio Ltd
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
(function( $ ) {

	$.fn.stretchNav = function( options ) {

		var args 		= {},
			room 		= 0,
			output 		= 0,
			navWidth 	= 0,
			count 		= 0,
			objects 	= this,
			width 		= $( this ).width(),
			settings 	= $.extend({
				// These are the defaults
				applyEnds: 	false,		// Whether or not to add the same space to the end
				target: 	'li',		// The element to target, could be "> li > a"
				mode: 		'margin',	// Can be margin or padding
				round: 		true,		// Whether or not to round the value down
				threshold: 	100			// How long to wait before recalculating on resize
			}, options );

		settings.elements = $( this ).children( settings.target );

		// Remove spaces between inline elements
		$( this ).contents().filter(function() { return this.nodeType === 3; }).remove();

		// Set the CSS args to margin/padding 0 on the left and right
		args[settings.mode + "Left"] = 0;
		args[settings.mode + "Right"] = 0;

		// Apply args to element
		$( settings.elements ).css( args );

		// Add the width of all the elements and count the elements
		$( settings.elements ).each(function(){
			navWidth += $(this).outerWidth();
			count ++;
		});

		// The amount of space left to fill is the containers width minus the
		// combined width of all the elements
		room = width - navWidth;

		// If we do not wish to add padding/margin to the beginning and end
		if( !settings.applyEnds )
		{
			// Then remove one from the count and process
			output = (room / 2 ) / (count - 1);	
		}
		else
		{
			// Process - divide the amount of room by two and then divide by
			// the amount of elements
			output = (room / 2 ) / count;
		}

		// If we have set it to round, then round the amount of padding/margin down
		if( settings.round )
		{
			output = Math.floor( output );
		}

		// Set up the CSS args
		args[settings.mode + "Left"] = '+=' + output;
		args[settings.mode + "Right"] = '+=' + output;

		// Apply the CSS args
		$( settings.elements ).css( args );

		// If we don't want to apply the ends then remove them
		if( !settings.applyEnds )
		{
			args = {};
			args[settings.mode + "Left"] = 0;
			$( settings.elements ).first().css( args );

			args = {};
			args[settings.mode + "Right"] = 0;
			$( settings.elements ).last().css( args );
		}

		// Set up the resize timer, using the threshold timer
		var resizeFitNavTimer;
		$(window).resize(function(){
			clearTimeout(resizeFitNavTimer);
			resizeFitNavTimer = setTimeout(function(){$(objects).stretchNav( options );}, settings.threshold);
		});

		// Recalculate when the page is fully loaded, this is useful for when images exist
		$(window).load(function(){$(objects).stretchNav( options );});

		return this;

	};

}( jQuery, window ));