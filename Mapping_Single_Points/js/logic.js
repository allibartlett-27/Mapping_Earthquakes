// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// another option is 
//let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

//  Add a marker to the map for Los Angeles, California.
let marker = L.circleMarker([34.0522, -118.2437], {
    color: "black",
    fillColor: "#ffffa1",
    radius: 300
}).addTo(map);

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
//Then we add our gray map tile layer
streets.addTo(map);