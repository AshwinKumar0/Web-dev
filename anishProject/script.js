
const form = document.getElementById('location-form');
const mapDiv = document.getElementById('map');
const heritagePlacesDiv = document.getElementById('heritage-places');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = document.getElementById('location').value;
  searchLocation(location);
});

function searchLocation(location) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b613986a7mshf5d74bb567bfb52p102307jsn1bb787a74b6d',
            'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
    };
    
    fetch('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=Eiffel%20Tower', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  // Use a geocoding API to convert the location to latitude and longitude
  // For example, you could use the Google Maps Geocoding API:
  // https://developers.google.com/maps/documentation/geocoding/start
  //const latitude = https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY; 
  //const longitude =https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY ; 
  displayMap(latitude, longitude);
  displayHeritagePlaces(latitude, longitude);
}

function displayMap(latitude, longitude) {
  // Use a mapping API to display a map centered on the specified latitude and longitude
  // For example, you could use the Google Maps JavaScript API:
  // https://developers.google.com/maps/documentation/javascript/overview
  const map = new google.maps.Map(mapDiv, {
    center: { lat: latitude, lng: longitude },
    zoom: 10
  });
}

function displayHeritagePlaces(latitude, longitude) {
  // Use a heritage places API to get a list of heritage places near the specified latitude and longitude
  // For example, you could use the UNESCO World Heritage API:
  // https://whc.unesco.org/en/api/
  }