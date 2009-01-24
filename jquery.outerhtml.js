/*! Copyright (c) 2006 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

(function($) {  
 // Returns whether or not a result set has results in it
 $.fn.outerHTML = function() {
   return $('<div>').append( this.eq(0).clone() ).html();
 };
})(jQuery);