/**
 *   NSHotels is namespace for all NSHotels attributes and property
 *   this common need to include in all html pages
 *   @author: Saorabh Kumar
 */

var  NSHotels = NSHotels || {};

var Hotels = {
    homePageUrl: 'index.html'
};
/**
 *   NSHotels.Util is contain utility methods
 *   @author: Saorabh Kumar
 */
NSHotels.Util = {
    /**
     *   @method: getTopCitiesDetails
     *   @description: this method to fetch product details
     *   @author: Saorabh Kumar
     */
    getTopCitiesDetails: function(url) {
        var promise = $.getJSON(url);
        return promise;
    }
}
