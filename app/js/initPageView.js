/**
 *   @description: This is a self exectuing method which is being used for pass the data to loadTopCityData Class
 *   @author: Saorabh Kumar
 */

(function ( ns ) {
    function init (url) {
      loadTopCityData(url);
    }
    function loadTopCityData(url){
      var topCityDetails = NSHotels.Util.getTopCitiesDetails(url);
      //On success mering data for rating and updating the UI
      topCityDetails.done(function (jsonData) {
        //Exposing topCityView init with Json data
        topCityView.init( jsonData.hotelsData );
      })
      .fail(function () {
        console.log("error");
      })
      .always(function () {
        console.log("complete");
      });
    }
  ns.init = init;

})( this.loadTopCitiesPageData = this.loadTopCitiesPageData || {} )
