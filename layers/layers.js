var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FranceAPL2021VSS_1 = new ol.format.GeoJSON();
var features_FranceAPL2021VSS_1 = format_FranceAPL2021VSS_1.readFeatures(json_FranceAPL2021VSS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FranceAPL2021VSS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FranceAPL2021VSS_1.addFeatures(features_FranceAPL2021VSS_1);
var lyr_FranceAPL2021VSS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FranceAPL2021VSS_1, 
                style: style_FranceAPL2021VSS_1,
                interactive: true,
    title: 'France APL 2021 VSS<br />\
    <img src="styles/legend/FranceAPL2021VSS_1_0.png" /> 0 - 2,5<br />\
    <img src="styles/legend/FranceAPL2021VSS_1_1.png" /> 2,5 - 3,8<br />\
    <img src="styles/legend/FranceAPL2021VSS_1_2.png" /> 3,8 - 5,1<br />\
    <img src="styles/legend/FranceAPL2021VSS_1_3.png" /> 5,1 - 100000000<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_FranceAPL2021VSS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FranceAPL2021VSS_1];
lyr_FranceAPL2021VSS_1.set('fieldAliases', {'NOM': 'NOM', 'INSEE_COM': 'INSEE_COM', 'POPULATION': 'POPULATION', 'APL_1': 'APL_1', 'APL_2': 'APL_2', });
lyr_FranceAPL2021VSS_1.set('fieldImages', {'NOM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'POPULATION': 'Range', 'APL_1': 'TextEdit', 'APL_2': 'TextEdit', });
lyr_FranceAPL2021VSS_1.set('fieldLabels', {'NOM': 'header label', 'INSEE_COM': 'no label', 'POPULATION': 'inline label', 'APL_1': 'inline label', 'APL_2': 'no label', });
lyr_FranceAPL2021VSS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});