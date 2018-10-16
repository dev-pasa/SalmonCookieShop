'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am' , '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: '1st and Pike',
  neighborhood: 'Seattle',
  minCust: Math.ceil(23),
  maxCust: Math.floor(65),
  avgCookieSale: 6.3,
  totalCookies : 0,
  
  getCustomersPerHour: function(min, max) {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
  },
  customersPerHour: [],
  getCookiesPerHour: function() {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookieSale))
    }
  },
  cookiesPerHour: [],
}

firstAndPike.getCustomersPerHour(firstAndPike.minCust, firstAndPike.maxCust)
firstAndPike.getCookiesPerHour()
console.log(firstAndPike);

firstAndPike.sumTotalCookie = function () {
  for(var i = 0; i<this.cookiesPerHour.length; i++){
    this.totalCookies+= this.cookiesPerHour[i]
  }
  return this.totalCookies;
}

firstAndPike.render = function() {
  var pike = document.getElementById('firstAndPike');

  for (var i = 0; i < this.cookiesPerHour.length; i++) {

    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
    pike.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalCookies}`;
  pike.appendChild(liEl);

}

firstAndPike.sumTotalCookie();
firstAndPike.render();

