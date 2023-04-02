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

  // Use a geocoding API to convert the location to latitude and longitude
  // For example, you could use the Google Maps Geocoding API:
  // https://developers.google.com/maps/documentation/geocoding/start
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBBHWfC_ITH6XVxpcQfxwSN1CmXCAQPPEw`)
    .then(response => response.json())
    .then(response => {
      const latitude = response.results[0].geometry.location.lat;
      const longitude = response.results[0].geometry.location.lng;
      displayMap(latitude, longitude);
      displayHeritagePlaces(latitude, longitude);
    })
    .catch(err => console.error(err));
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
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };

  fetch(`https://whc.unesco.org/en/list/json/?lat=${latitude}&lon=${longitude}&radius=50&max=10`, options)
    .then(response => response.json())
    .then(response => {
      const heritagePlaces = response.map(place => ({
        name: place.name_en,
        description: place.short_description_en,
        image: place.image_url,
        location: {
          latitude: place.latitude,
          longitude: place.longitude
        }
      }));
      renderHeritagePlaces(heritagePlaces);
    })
    .catch(err => console.error(err));
}

function renderHeritagePlaces(heritagePlaces) {
  const heritagePlacesHTML = heritagePlaces.map(place => `
    <div class="heritage-place">
      <h2>${place.name}</h2>
      <img src="${place.image}" alt="${place.name}">
      <p>${place.description}</p>
      <p>Latitude: ${place.location.latitude}</p>
      <p>Longitude: ${place.location.longitude}</p>
    </div>
  `).join('');
  heritagePlacesDiv.innerHTML = heritagePlacesHTML;
}
