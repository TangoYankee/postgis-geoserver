const HOST = 'http://localhost:5050';
const LAB_PATH = 'geoserver/lab_14';
const LAB_URL = `${HOST}/${LAB_PATH}`;
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

    const crs = new L.Proj.CRS('EPSG: 2261',
        '+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 \
        +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +datum=NAD83 \
        +to_meter=0.3048006096012192 +no_defs',
        {
            resolutions:[
                8192, 4096, 2048, 1024, 512, 256, 128
            ],
            origin: [0, 820208],
            bounds: L.bounds([503103.0219, 730813.7225], [1231541.2872, 1607028.5833])
        }
    );

    L.tileLayer.wms (
        `${LAB_URL}/wms`,
        {
            crs: crs,
            layers: 'lab_14:NYClandcover2010',
            format: 'image/png',
            transparent: true,
        }
    ).addTo(map);
}

window.addEventListener('DOMContentLoaded', app);
