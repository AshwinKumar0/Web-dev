const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const API_KEY = 'AIzaSyBBHWfC_ITH6XVxpcQfxwSN1CmXCAQPPEw';
const HERITAGE_API_KEY = '08f84305c02a41059ad868164dbc7293';

searchButton.addEventListener('click', searchForHeritageSites);

async function searchForHeritageSites() {
  const location = locationInput.value;
  try {
    const coordinates = await getCoordinates(location);
    const sites = await getHeritageSites(coordinates);
    displayHeritageSites(sites);
  } catch (error) {
    console.error(error);
    resultsContainer.innerHTML = '<p>Error searching for UNESCO World Heritage Sites.</p>';
  }
}

async function getCoordinates(location) {
    try{
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`);
  const data = await response.json();
  if (data.status === 'OK' && data.results.length) {
    const coordinates = data.results[0].geometry.location;
    return coordinates;
  } else {
    throw new Error('Location not found.');
  }
}
catch (error) {
    console.error(error);
    throw new Error('Error getting coordinates.');
  }
}

async function getHeritageSites(coordinates) {
    try{
  const response = await fetch(`https://api.unescoheritage.org/v1/sites?lat=${coordinates.lat}&lng=${coordinates.lng}&radius=10000&fields=name,category,short_description,thumbnail_url&limit=10&api_key=${HERITAGE_API_KEY}`);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  } else {
    throw new Error('Unable to fetch UNESCO World Heritage Sites.');
  }
}
catch (error) {
    console.error(error);
    throw new Error('Error getting heritage sites.');
  }
}


function displayHeritageSites(sites) {
  let html = '';
  if (sites.length) {
    html += '<ul>';
    sites.forEach(site => {
      html += `<li>
          <h2>${site.name}</h2>
          <img src="${site.thumbnail_url}" alt="${site.name}">
          <p>${site.short_description}</p>
          <p><strong>Category:</strong> ${site.category}</p>
      </li>`;
    });
    html += '</ul>';
  } else {
    html += '<p>No UNESCO World Heritage Sites found.</p>';
  }
  resultsContainer.innerHTML = html;
}

