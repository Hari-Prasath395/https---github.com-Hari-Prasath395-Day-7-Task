//Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.responseText);
  printData(data);
};

function printData(data) {
  const totalPopulation = data.reduce(
    (acc, country) => acc + country.population,0
  );
  console.log(totalPopulation);
}

