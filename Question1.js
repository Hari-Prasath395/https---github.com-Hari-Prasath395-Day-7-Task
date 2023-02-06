/* Solving problems using array functions on the rest countries' data 
(https://restcountries.com/v3.1/all). */

//Get all the countries from the asia continent/region using the filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.responseText);
  printData(data);
};

function printData(data) {
  let countries = data.filter((country) => country.region === "Asia");
  console.log(countries);
}
