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

firstAndPike.getCustomersPerHour(firstAndPike.minCust, firstAndPike.maxCust)
firstAndPike.getCookiesPerHour()
//console.log(firstAndPike);

firstAndPike.sumTotalCookie();
firstAndPike.render();



var SeaTacAirport = {
  name: 'SeaTac Airport',
  neighborhood: 'SeaTac',
  minCust: Math.ceil(3),
  maxCust: Math.floor(24),
  avgCookieSale: 1.2,
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

SeaTacAirport.sumTotalCookie = function () {
  for(var i = 0; i<this.cookiesPerHour.length; i++){
    this.totalCookies+= this.cookiesPerHour[i]
  }
  return this.totalCookies;
}

SeaTacAirport.render = function() {
  var pike = document.getElementById('SeaTac');

  for (var i = 0; i < this.cookiesPerHour.length; i++) {

    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
    pike.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalCookies}`;
  pike.appendChild(liEl);

}

SeaTacAirport.getCustomersPerHour(SeaTacAirport.minCust, SeaTacAirport.maxCust)
SeaTacAirport.getCookiesPerHour()

SeaTacAirport.sumTotalCookie();
SeaTacAirport.render();




var SeattleCenter = {
  name: 'Seattle Center',
  neighborhood: 'Seattle',
  minCust: Math.ceil(11),
  maxCust: Math.floor(38),
  avgCookieSale: 3.7,
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

SeattleCenter.sumTotalCookie = function () {
  for(var i = 0; i<this.cookiesPerHour.length; i++){
    this.totalCookies+= this.cookiesPerHour[i]
  }
  return this.totalCookies;
}

SeattleCenter.render = function() {
  var pike = document.getElementById('SeattleCenter');

  for (var i = 0; i < this.cookiesPerHour.length; i++) {

    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
    pike.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalCookies}`;
  pike.appendChild(liEl);

}

SeattleCenter.getCustomersPerHour(SeattleCenter.minCust, SeattleCenter.maxCust)
SeattleCenter.getCookiesPerHour()

SeattleCenter.sumTotalCookie();
SeattleCenter.render();




var CapitolHill = {
  name: 'Seattle Center',
  neighborhood: 'Seattle',
  minCust: Math.ceil(11),
  maxCust: Math.floor(38),
  avgCookieSale: 3.7,
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

CapitolHill.sumTotalCookie = function () {
  for(var i = 0; i<this.cookiesPerHour.length; i++){
    this.totalCookies+= this.cookiesPerHour[i]
  }
  return this.totalCookies;
}

CapitolHill.render = function() {
  var pike = document.getElementById('CapitolHill');

  for (var i = 0; i < this.cookiesPerHour.length; i++) {

    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
    pike.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalCookies}`;
  pike.appendChild(liEl);

}

CapitolHill.getCustomersPerHour(CapitolHill.minCust, CapitolHill.maxCust)
CapitolHill.getCookiesPerHour()

CapitolHill.sumTotalCookie();
CapitolHill.render();



var Alki = {
  name: 'Alki',
  neighborhood: 'Alki Beach',
  minCust: Math.ceil(2),
  maxCust: Math.floor(16),
  avgCookieSale: 4.6,
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

Alki.sumTotalCookie = function () {
  for(var i = 0; i<this.cookiesPerHour.length; i++){
    this.totalCookies+= this.cookiesPerHour[i]
  }
  return this.totalCookies;
}

Alki.render = function() {
  var pike = document.getElementById('Alki');

  for (var i = 0; i < this.cookiesPerHour.length; i++) {

    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
    pike.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalCookies}`;
  pike.appendChild(liEl);
}

Alki.getCustomersPerHour(Alki.minCust, Alki.maxCust)
Alki.getCookiesPerHour()

Alki.sumTotalCookie();
Alki.render();


// console.log(Alki.getCookiesPerHour())