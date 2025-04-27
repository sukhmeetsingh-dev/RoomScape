mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: [77.209, 28.6139], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

console.log(coordinates);

// const marker = new mapboxgl.Marker()
//   .setLngLat((12.554729, 55.70651)) //Listing.geometery.coordinates
//   .addTo(map);
