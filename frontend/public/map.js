

var mymap;
var locations = [
    ["LOCATION_1",44.854031, -93.460167],
    ["LOCATION_2",60, -0.15],
    ["LOCATION_3",10.7202,122.5621],
    ["LOCATION_4",11.3889,122.6277],
    ["LOCATION_5",10.5929,122.6325]
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
    window.locations.push(["NewYork",40.712776,-74.005974]);
    updateMarker();

}



window.onload = function() {
    loadmap()
}