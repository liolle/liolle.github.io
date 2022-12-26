var map = L.map('map').setView([51.51906167701499, -0.10033834908181087], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.51906167701499, -0.10033834908181087]).addTo(map);