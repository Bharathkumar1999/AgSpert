(function () {
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 13.0827, lng: 80.2707 }, // Chennai
            zoom: 14
        });

        var pathCoordinates = [
            { lat: 13.0827, lng: 80.2707 }, // Chennai
            { lat: 12.9716, lng: 77.5946 }  // Bangalore
        ];

        var path = new google.maps.Polyline({
            path: pathCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        path.setMap(map);

        // Add a marker at the start and end points
        var walkerIcon = {
            url: 'https://maps.gstatic.com/mapfiles/ms2/micons/walking.png', // You can use your own walking icon
            scaledSize: new google.maps.Size(30, 30)
        };

        var startMarker = new google.maps.Marker({
            position: { lat: 13.0827, lng: 80.2707 }, // Chennai
            map: map,
            title: 'Start'
        });

        var endMarker = new google.maps.Marker({
            position: { lat: 12.9716, lng: 77.5946 }, // Bangalore
            map: map,
            title: 'End'
        });

        startMarker.setIcon(walkerIcon);

        animateWalker(startMarker, path);
    }

    function animateWalker(marker, path) {
        var count = 0;
        var route = path.getPath();
        var speed = 50; // Adjust this value for animation speed

        function moveWalker() {
            count = (count + 1) % route.getLength();
            var nextPosition = route.getAt(count);
            marker.setPosition(nextPosition);
            setTimeout(moveWalker, speed);
        }

        moveWalker();
    }

    // Initialize the map when the page loads
    window.initMap = initMap;
})();
