var initMap;

(function() {
    initMap = function()
    {
        var mapClassName = 'js-map';
        var moscowCoordinates = {
            zoom: 13,
            latitude: '55.751244',
            longitude: '37.618423'
        };
        var houseCoordinates = [
            {
                // walls
                color: '#593423',
                coordinates: [
                    {latitude: '55.751244', longitude: '37.618423'},
                    {latitude: '55.751244', longitude: '37.628423'},
                    {latitude: '55.757244', longitude: '37.628423'},
                    {latitude: '55.757244', longitude: '37.618423'},
                    {latitude: '55.751244', longitude: '37.618423'}
                ]
            },
            {
                // roof
                color: '#ce3423',
                coordinates: [
                    {latitude: '55.757444', longitude: '37.617423'},
                    {latitude: '55.761244', longitude: '37.623423'},
                    {latitude: '55.757444', longitude: '37.629423'},
                    {latitude: '55.757444', longitude: '37.617423'}

                ]
            }
        ];


        drawHouseOnTheMap(mapClassName, moscowCoordinates, houseCoordinates);
    }


    function drawHouseOnTheMap(mapClassName, cityCoordinates, houseCoordinates) {

        map = mapInit(mapClassName, cityCoordinates);
        if(map) {

            if(houseCoordinates.length) {

                for(var i= 0, l = houseCoordinates.length; i < l; i++) {

                    var LatLngs = [];
                    var element = houseCoordinates[i];

                    for(var i2= 0, l2 = element.coordinates.length; i2 < l2; i2++) {

                        LatLngs.push(new google.maps.LatLng(
                            element.coordinates[i2]['latitude'],
                            element.coordinates[i2]['longitude']
                        ));
                    }

                    if(LatLngs.length) {

                        var Polyline = new google.maps.Polyline({
                            path: LatLngs,
                            strokeColor: element.color,
                            strokeOpacity: 0.8,
                            strokeWeight: 5
                        });
                        Polyline.setMap(map);
                    }
                }
            }
        }
    }

    function mapInit(mapClassName, cityCoordinates) {

        var map;
        var mapOptions = {
            scaleControl: true,
            mapTypeControl: true,
            zoomControl: true,
            rotateControl: true,
            minZoom: 9,
            maxZoom: 18,
            zoom: cityCoordinates.zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(
                cityCoordinates.latitude,
                cityCoordinates.longitude
            )
        };
        var mapWrapper = document.getElementsByClassName(mapClassName)[0] || null;
        if(mapWrapper) {
            map = new google.maps.Map(mapWrapper, mapOptions);
        }

        return map;
    }
}());