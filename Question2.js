//Get all the countries population of less than 2 lakhs using filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all");
request.send();
request.onload = function () {
    var data = JSON.parse(this.responseText);
    printData(data);
 
}

function printData(data){
    const population = data.filter((country)=>{return country.population<=200000});
     console.log(population);   
   
}