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

