ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([105.337093, 10.544096, 108.305168, 12.099967]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_rg_tinh_4326_2 = new ol.format.GeoJSON();
var features_rg_tinh_4326_2 = format_rg_tinh_4326_2.readFeatures(json_rg_tinh_4326_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rg_tinh_4326_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rg_tinh_4326_2.addFeatures(features_rg_tinh_4326_2);
var lyr_rg_tinh_4326_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rg_tinh_4326_2, 
                style: style_rg_tinh_4326_2,
                popuplayertitle: 'rg_tinh_4326',
                interactive: false,
                title: '<img src="styles/legend/rg_tinh_4326_2.png" /> rg_tinh_4326'
            });
var format_buf_4326_3 = new ol.format.GeoJSON();
var features_buf_4326_3 = format_buf_4326_3.readFeatures(json_buf_4326_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_buf_4326_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buf_4326_3.addFeatures(features_buf_4326_3);
var lyr_buf_4326_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buf_4326_3, 
                style: style_buf_4326_3,
                popuplayertitle: 'buf_4326',
                interactive: false,
    title: 'buf_4326<br />\
    <img src="styles/legend/buf_4326_3_0.png" /> 1<br />\
    <img src="styles/legend/buf_4326_3_1.png" /> 2<br />'
        });
var format_ranhgioi_4326_4 = new ol.format.GeoJSON();
var features_ranhgioi_4326_4 = format_ranhgioi_4326_4.readFeatures(json_ranhgioi_4326_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ranhgioi_4326_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ranhgioi_4326_4.addFeatures(features_ranhgioi_4326_4);
var lyr_ranhgioi_4326_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ranhgioi_4326_4, 
                style: style_ranhgioi_4326_4,
                popuplayertitle: 'ranhgioi_4326',
                interactive: false,
                title: '<img src="styles/legend/ranhgioi_4326_4.png" /> ranhgioi_4326'
            });
var format_phanvung_thang10_5 = new ol.format.GeoJSON();
var features_phanvung_thang10_5 = format_phanvung_thang10_5.readFeatures(json_phanvung_thang10_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_phanvung_thang10_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phanvung_thang10_5.addFeatures(features_phanvung_thang10_5);
var lyr_phanvung_thang10_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phanvung_thang10_5, 
                style: style_phanvung_thang10_5,
                popuplayertitle: 'phanvung_thang10',
                interactive: true,
    title: 'phanvung_thang10<br />\
    <img src="styles/legend/phanvung_thang10_5_0.png" /> rất tốt<br />\
    <img src="styles/legend/phanvung_thang10_5_1.png" /> tốt<br />\
    <img src="styles/legend/phanvung_thang10_5_2.png" /> trung bình<br />'
        });
var format_diem_thang10_6 = new ol.format.GeoJSON();
var features_diem_thang10_6 = format_diem_thang10_6.readFeatures(json_diem_thang10_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_diem_thang10_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diem_thang10_6.addFeatures(features_diem_thang10_6);
cluster_diem_thang10_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_diem_thang10_6
});
var lyr_diem_thang10_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_diem_thang10_6, 
                style: style_diem_thang10_6,
                popuplayertitle: 'diem_thang10',
                interactive: true,
                title: '<img src="styles/legend/diem_thang10_6.png" /> diem_thang10'
            });
var format_phanvung_thang1_7 = new ol.format.GeoJSON();
var features_phanvung_thang1_7 = format_phanvung_thang1_7.readFeatures(json_phanvung_thang1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_phanvung_thang1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phanvung_thang1_7.addFeatures(features_phanvung_thang1_7);
var lyr_phanvung_thang1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phanvung_thang1_7, 
                style: style_phanvung_thang1_7,
                popuplayertitle: 'phanvung_thang1',
                interactive: true,
    title: 'phanvung_thang1<br />\
    <img src="styles/legend/phanvung_thang1_7_0.png" /> rất tốt<br />\
    <img src="styles/legend/phanvung_thang1_7_1.png" /> tốt<br />\
    <img src="styles/legend/phanvung_thang1_7_2.png" /> trung bình<br />'
        });
var format_diem_thang1_8 = new ol.format.GeoJSON();
var features_diem_thang1_8 = format_diem_thang1_8.readFeatures(json_diem_thang1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_diem_thang1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diem_thang1_8.addFeatures(features_diem_thang1_8);
cluster_diem_thang1_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_diem_thang1_8
});
var lyr_diem_thang1_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_diem_thang1_8, 
                style: style_diem_thang1_8,
                popuplayertitle: 'diem_thang1',
                interactive: true,
                title: '<img src="styles/legend/diem_thang1_8.png" /> diem_thang1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_rg_tinh_4326_2.setVisible(false);lyr_buf_4326_3.setVisible(false);lyr_ranhgioi_4326_4.setVisible(true);lyr_phanvung_thang10_5.setVisible(true);lyr_diem_thang10_6.setVisible(true);lyr_phanvung_thang1_7.setVisible(true);lyr_diem_thang1_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_rg_tinh_4326_2,lyr_buf_4326_3,lyr_ranhgioi_4326_4,lyr_phanvung_thang10_5,lyr_diem_thang10_6,lyr_phanvung_thang1_7,lyr_diem_thang1_8];
lyr_rg_tinh_4326_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TENTINH': 'TENTINH', 'MATINH': 'MATINH', });
lyr_buf_4326_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_ranhgioi_4326_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TENTINH': 'TENTINH', 'MATINH': 'MATINH', });
lyr_phanvung_thang10_5.set('fieldAliases', {'fid': 'fid', 'TINH': 'TINH', 'CLN': 'CLN', });
lyr_diem_thang10_6.set('fieldAliases', {'ten_diem': 'ten_diem', 'WQI': 'WQI', 'CLN': 'CLN', 'kinhdo': 'kinhdo', 'vido': 'vido', 'kinhdo_deg': 'kinhdo_deg', 'vido_deg': 'vido_deg', 'layer': 'layer', 'ghichu': 'ghichu', });
lyr_phanvung_thang1_7.set('fieldAliases', {'fid': 'fid', 'TINH': 'TINH', 'CLN': 'CLN', });
lyr_diem_thang1_8.set('fieldAliases', {'ten_diem': 'ten_diem', 'thang': 'thang', 'WQI': 'WQI', 'CLN': 'CLN', 'kinhdo': 'kinhdo', 'vido': 'vido', 'kinhdo_deg': 'kinhdo_deg', 'vido_deg': 'vido_deg', 'layer': 'layer', });
lyr_rg_tinh_4326_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TENTINH': 'TextEdit', 'MATINH': 'TextEdit', });
lyr_buf_4326_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', });
lyr_ranhgioi_4326_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TENTINH': 'TextEdit', 'MATINH': 'TextEdit', });
lyr_phanvung_thang10_5.set('fieldImages', {'fid': 'TextEdit', 'TINH': 'TextEdit', 'CLN': 'TextEdit', });
lyr_diem_thang10_6.set('fieldImages', {'ten_diem': 'TextEdit', 'WQI': 'TextEdit', 'CLN': 'TextEdit', 'kinhdo': 'TextEdit', 'vido': 'TextEdit', 'kinhdo_deg': 'TextEdit', 'vido_deg': 'TextEdit', 'layer': 'TextEdit', 'ghichu': 'TextEdit', });
lyr_phanvung_thang1_7.set('fieldImages', {'fid': 'TextEdit', 'TINH': 'TextEdit', 'CLN': 'TextEdit', });
lyr_diem_thang1_8.set('fieldImages', {'ten_diem': 'TextEdit', 'thang': 'TextEdit', 'WQI': 'TextEdit', 'CLN': 'TextEdit', 'kinhdo': 'TextEdit', 'vido': 'TextEdit', 'kinhdo_deg': 'TextEdit', 'vido_deg': 'TextEdit', 'layer': 'TextEdit', });
lyr_rg_tinh_4326_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TENTINH': 'no label', 'MATINH': 'no label', });
lyr_buf_4326_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_ranhgioi_4326_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TENTINH': 'no label', 'MATINH': 'no label', });
lyr_phanvung_thang10_5.set('fieldLabels', {'fid': 'no label', 'TINH': 'no label', 'CLN': 'header label - visible with data', });
lyr_diem_thang10_6.set('fieldLabels', {'ten_diem': 'inline label - always visible', 'WQI': 'inline label - always visible', 'CLN': 'inline label - always visible', 'kinhdo': 'no label', 'vido': 'no label', 'kinhdo_deg': 'no label', 'vido_deg': 'inline label - always visible', 'layer': 'no label', 'ghichu': 'no label', });
lyr_phanvung_thang1_7.set('fieldLabels', {'fid': 'no label', 'TINH': 'no label', 'CLN': 'inline label - always visible', });
lyr_diem_thang1_8.set('fieldLabels', {'ten_diem': 'inline label - always visible', 'thang': 'inline label - always visible', 'WQI': 'inline label - always visible', 'CLN': 'inline label - always visible', 'kinhdo': 'no label', 'vido': 'no label', 'kinhdo_deg': 'no label', 'vido_deg': 'no label', 'layer': 'no label', });
lyr_diem_thang1_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});