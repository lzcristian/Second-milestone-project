// Initialize and add the map
function initMap() {
  
  const europe = { lat: 53.0000, lng: 9.0000 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: europe,
  });
  
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });


new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 40.416775, lng: -3.703790 },    /*Madrid*/
  { lat: 28.521076, lng: -81.465523 },   /*Valencia*/
  { lat: 41.385063, lng: 2.173404 },     /*Barcelona*/
  { lat: 28.291565, lng: -16.629129 },   /*Tenerife*/
  { lat: 45.464203, lng: 9.189982 },     /*Milan*/
  { lat: 41.902782, lng: 12.496365 },    /*Rome*/
  { lat: 45.4371908, lng: 12.3345898 },  /*Venice*/
  { lat: 45.0677551, lng: 7.6824892 },   /*Torino*/
  { lat: 37.9839412, lng: 23.7283052 },  /*Athens*/
  { lat: 36.4071112, lng: 25.4566637 },  /*Santorini*/
  { lat: 37.4514226, lng: 25.3923032 },  /*Mykonos*/
  { lat: 39.591337, lng: 19.8596189 },   /*Corfu*/
  { lat: 38.7077507, lng: -9.1365919 },  /*Lisbon*/
  { lat: 41.1494512, lng: -8.6107884 },  /*Porto*/
  { lat: 32.7517488, lng: -16.981752 },  /*Madeira*/
  { lat: 37.1262493, lng: -7.6499121 },  /*Tavira*/
  { lat: 48.8566969, lng: 2.3514616 },   /*Paris*/
  { lat: 45.7578137, lng: 4.8320114 },   /*Lyon*/
  { lat: 43.7009358, lng: 7.2683912 },   /*Nice*/
  { lat: 43.2961743, lng: 5.3699525 },   /*Marseille*/
  { lat: 52.3727598, lng: 4.8936041 },   /*Amsterdam*/
  { lat: 51.9227828, lng: 4.4787454 },   /*Rotterdam*/
  { lat: 52.0799838, lng: 4.3113461 },   /*Hague*/
  { lat: 52.0809856, lng: 5.127684 },    /*Utrecht*/
  { lat: 48.1371079, lng: 11.5753822 },  /*Munich*/
  { lat: 52.5170365, lng: 13.3888599 },  /*Berlin*/
  { lat: 50.1106444, lng: 8.6820917 },   /*Frankfurt*/
  { lat: 53.550341, lng: 10.000654 },    /*Hamburg*/
  { lat: 34.9236095, lng: 33.6236184 },  /*Larnaca*/
  { lat: 35.1739302, lng: 33.364726 },   /*Nicosia*/
  { lat: 34.6852901, lng: 33.0332657 },  /*Limassol*/
  { lat: 34.7743988, lng: 32.4231586 },  /*Paphos*/
];

var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: `${js/m1.png}/m`});