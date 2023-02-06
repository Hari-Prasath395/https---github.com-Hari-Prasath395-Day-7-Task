//Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.responseText);
  printData(data);
};

function printData(data) {
  data.forEach((country) => {
    let {name={}}=country;
    console.log("Name: " +  name.common);
    console.log("Capital: " + country.capital);
    console.log("Flag: " + country.flag);
    
  });
}
