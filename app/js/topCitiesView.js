/**
 *   @class: topCityView
 *   @description: this class have a topCityView constructor who is responsible to return a topCityView refrence
 *   @author: Saorabh Kumar
 */
var topCityView = (function() {

    var TopCityView = function() {};

    TopCityView.prototype = {
        util: NSHotels.Util,
        /**
         *   @method: init
         *   @description: Responsible to get the modal methods
         *   @author: Saorabh Kumar
         */
        init: function( data ) {
            var oThis = this
                ;
            oThis.buildTopCitiesWidget ( data );
        },
        buildTopCitiesWidget : function( data ){
          var oThis = this
              ,jQCityWrapper = $('#top-city-wrapper')
              ;
            $.get("templates/topCities.html", function( htmlFormFile ) {
            jQCityWrapper.append( htmlFormFile );
            var templateId  =  jQCityWrapper.find('#top-city-inner-wrapper');
            var template = Mustache.render( $(templateId).html(), { data : data });
            jQCityWrapper.html( template );
            setTimeout(function () {
              oThis.handleExpanCollapse();  
            },1 );

          });
        },
        
        handleExpanCollapse: function () {
          var collapseEl = $('a[data-toggle="collapse"]')
              ,expandAll  = $('#expandAll')
              ,collapseAll = $('#collapseAll')
              ;

          collapseEl.on('click',function(){
            var objectID=$(this).attr('href');
            if($(objectID).hasClass('in')){
              $(objectID).collapse('hide');
            } else{
              $(objectID).collapse('show');
            }
          });

          expandAll.on('click',function(){
            collapseEl.each(function(){
              var objectID=$(this).attr('href');
              if($(objectID).hasClass('in') === false){
                $(objectID).collapse('show');
              }
            });
          });

          collapseAll.on('click',function(){
            collapseEl.each(function(){
              var objectID=$(this).attr('href');
              $(objectID).collapse('hide');
            });
          });
            
        }

    }
    //Returing a topCityView refrence from here to expose it.
    return new TopCityView();
})();
