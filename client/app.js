const DEFAULT_LAT = 40.7128;
const DEFAULT_LNG = -74.0060;
const DEFAULT_ZOOM = 11; 

const app = () => {
    const map = L.map('map').setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker ([40.7128, -74.0060]).addTo(map);
    L.circle ([40.7128, -74.0060], 2500, {
        color: 'red',
        fillColor: '# f03',
        fillOpacity: 0.5,
    }).addTo(map)
}

window.addEventListener('DOMContentLoaded', app);
