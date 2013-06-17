function MapManager() {
	 this.map = L.map('map');
	 this.init = function () {
	 	L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(this.map);
	 },
	 this.setView = function (lat, lgt, zoomLevel)
	 {
	 	this.map.setView([lat, lgt], zoomLevel);
	 },
	 this.addMarker = function (lat, lgt, htmlContent)
	 {
	  L.marker([lat, lgt]).addTo(this.map).bindPopup(htmlContent).openPopup();
	 }		 
}