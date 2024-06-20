d3.csv('https://raw.githubusercontent.com/rajeevhans/AaxisWheel/main/wheel.csv', function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) {return row[key]})
}

  var data = [{
        type: "sunburst",
        maxdepth: 3,
        ids: unpack(rows, 'ids'),
        labels: unpack(rows, 'labels'),
        parents: unpack(rows, 'parents'),
        textposition: 'auto',
        insidetextorientation: 'radial',
        marker: {line: {width: 5}},
        size: 4
  }]

  var layout = {

    margin: {l: 0, r: 0, b: 0, t:0},
    
    width: 1200,
    height: 1200,

    sunburstcolorway:[
  
      "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
  
      "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
  
    ],
    // extendsunburstcolorway: false

  
  };

  Plotly.newPlot('myDiv', data, layout, {responsive: true})
})
