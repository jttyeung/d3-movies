// var quotes = [
//   "Go ahead, make my day.",
//   "I'll be back.",
//   "May the Force be with you.",
//   "There's no place like home.",
//   "You're gonna need a bigger boat."
// ];

var quotes = [{
  quote: "Go ahead, make my day.",
  color: "red",
  size: "20px"
}, {
  quote: "I'll be back.",
  color: "orange",
  size: "22px"
}, {
  quote: "May the Force be with you.",
  color: "yellow",
  size: "24px"
}, {
  quote: "There's no place like home.",
  color: "green",
  size: "26px"
}, {
  quote: "You're gonna need a bigger boat.",
  color: "blue",
  size: "28px"
}];


d3.select("body")
  .selectAll("p")
  .data(quotes)
  .enter()  // creates new lines if there doesn't exist one (<p>) and one needs to be created
  .append("p")
  .text(function(d) {  // callback with .data and executes/iterates through each item in data
    return d.quote;
  })
  .style("color", function(d) {
    return d.color;
  })
  .style("font-size", function(d) {
    return d.size;
  });



var width = 500;
var height = 500;
var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);
var padding = 30; // so dots don't get cut off

var data = movies

// since data is outside of our 500 x 500 width/height, we need to scale our data
// domain is the value range of the dataset
// add the x/yScale functions to the return functions below it


// the below functions grab the min/max of the data and dynamically put it in the x/yScale functions
var xMin = d3.min(data, function(d) {
  return d.daysOpen;
});

var xMax = d3.max(data, function(d) {
  return d.daysOpen;
});

var yMin = d3.min(data, function(d) {
  return d.total;
});

var yMax = d3.max(data, function(d) {
  return d.total;
});

var xScale = d3.scaleLinear()
               .domain([xMin, xMax])
               .range([padding, width - padding]);

var yScale = d3.scaleLinear()
               .domain([yMin, yMax])
               .range([height - padding, padding]);  // flip so the y starts from the bottom instead of the top

// auto color scale
var colorScale = d3.scaleLinear()
                   .domain([0,1])
                   .range(['red', 'green']);

var tooltip = d3.select('div#tooltip');

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d) { return xScale(d.daysOpen); })
  .attr('cy', function(d) { return yScale(d.total); })
  .attr('r', function(d) { return 5 * d.total/d.openingTotal; })
  .attr('fill', function(d) { return colorScale(d.freshness); })
  .on('mouseover', function(d) {
    tooltip.text(d.title)
    tooltip.style('left', d3.event.screenX + 'px');
    tooltip.style('top', d3.event.screenY + 'px');
    tooltip.style('opacity', 1);
  })
  ;


// div.selectAll('div')
//   .attr('left', function(d) { return d3.event.screenX; })
//   .attr('top', function(d) { return d3.event.screenX; });





