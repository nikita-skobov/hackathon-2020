

var mymap;
var locations = [
    ["LOCATION_1",44.854031, -93.460167]
    ];


function update() {
   window.mymap = L.map('mapid').setView([44.854031, -93.460167], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(window.mymap);


}

function updateMarker(){
    
    for (var i = 0; i < window.locations.length; i++) {
        var marker = L.marker([window.locations[i][1],window.locations[i][2]]).addTo(window.mymap);
    }

}
function locateUser(){
    window.mymap.locate({setView : true});
    
}

function addMarker(){
    window.locations.push(["NewYork",44.846380,-93.442820]);
    updateMarker();

}



window.onload = function() {
    loadmap()
}