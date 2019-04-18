$(function() {
  console.log('Create Map!')
  createMap();
});
function createMap() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([0.128,51.1]),
            zoom: 8
        })
    });
}