// Print the country which uses US dollar as currency

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.responseText);
  printData(data);
};

function printData(data) {
    let dollars = data.filter(country => {
      for (const currency of country.currencies) {
        if (currency.code === "USD") {
          return true;
        }
      }
      return false;
    });
    console.log(dollars);
  }
  
        
    


  
