var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Building_Perkotaan_Purworejo_1 = new ol.format.GeoJSON();
var features_Building_Perkotaan_Purworejo_1 = format_Building_Perkotaan_Purworejo_1.readFeatures(json_Building_Perkotaan_Purworejo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_Perkotaan_Purworejo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_Perkotaan_Purworejo_1.addFeatures(features_Building_Perkotaan_Purworejo_1);
var lyr_Building_Perkotaan_Purworejo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_Perkotaan_Purworejo_1, 
                style: style_Building_Perkotaan_Purworejo_1,
                popuplayertitle: "Building_Perkotaan_Purworejo",
                interactive: true,
                title: '<img src="styles/legend/Building_Perkotaan_Purworejo_1.png" /> Building_Perkotaan_Purworejo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Building_Perkotaan_Purworejo_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Building_Perkotaan_Purworejo_1];
lyr_Building_Perkotaan_Purworejo_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Building_Perkotaan_Purworejo_1.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_leve': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_Building_Perkotaan_Purworejo_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Building_Perkotaan_Purworejo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});