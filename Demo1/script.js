let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });
}

document.getElementById("search-button").addEventListener("click", () => {
  const city = document.getElementById("search-input").value;
  if (city.trim() !== "") {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: city }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        map.setCenter(location);
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
        document.getElementById("search-input").value = "";
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
});

