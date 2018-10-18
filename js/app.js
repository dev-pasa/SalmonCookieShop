'use strict';

CookieShop.all =[];

//access table in the DOM
var cookieTable = document.getElementById('cookieTable');

function CookieShop(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, storeName) {
  this.minCustomersPerHour = Math.floor(minCustomersPerHour);
  this.maxCustomersPerHour = Math.floor(maxCustomersPerHour);
  this.avgCookiesPerCustomer = Math.ceil(avgCookiesPerCustomer);
  this.storeName = storeName;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am' , '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = 0;
  CookieShop.all.push(this)
}

function random(min,max){
  return Math.floor(Math.random() * (max - min +1)) + min;
}


CookieShop.prototype.getCustomersPerHour = function() {
  for(var i = 0; i < this.hours.length; i++){
    //calculate a random number
    var randomCustomers= random(this.minCustomersPerHour, this.maxCustomersPerHour);
    //push random number in an array
    this.customersEachHour.push(randomCustomers);
  }
}

CookieShop.prototype.getCookiesPerHour = function(){
  for(var j = 0; j < this.hours.length; j++){
    // calc the cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);

    // put the numbers into an array
    this.cookiesEachHour.push(hourlyCookies);
  }
}

CookieShop.prototype.getTotalCookies = function(){
  for(var k = 0; k < this.hours.length; k++){
    this.totalCookies += this.cookiesEachHour[k];
  }
}
new CookieShop(23, 65, 6.3, '1st and Pike');
new CookieShop(3, 24, 1.2, 'SeaTac Airport');
new CookieShop(11, 38, 3.7, 'Seattle Center');
new CookieShop(20, 38, 2.3, 'Capitol Hill');
new CookieShop(2, 16, 4.6, 'Alki');



CookieShop.prototype.render = function() {
  this.getCustomersPerHour();
  this.getCookiesPerHour();
  this.getTotalCookies();
  // make a tr
  var trEl = document.createElement('tr');
  //make a th
  var thEl = document.createElement('th');
  // make a td
  var tdEl = document.createElement('td');
  // give it name content
  tdEl.textContent = this.name;
  // append it to the tr
  trEl.appendChild(tdEl);

  for (var j = 0; j < this.storeName.length; j++){
    // thEl = document.createElement('th');
    thEl.textContent = this.storeName;
    trEl.appendChild(thEl);
  }

  for (var i = 0; i < this.hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);


  cookieTable.appendChild(trEl);
}



CookieShop.prototype.header = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = "Location";
  trEl.appendChild(thEl);

  for (var i = 0; i < this.hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = this.hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total ';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);
}



CookieShop.prototype.footer = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = '';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Hourly Total';
  trEl.appendChild(thEl);
  var addTotal = 0;

  for (var i = 0; i < this.cookiesEachHour.length; i++){
    var addall = 0;
    thEl = document.createElement('th');
    for (let j = 0; j < CookieShop.all.length; j++) {
      addall += CookieShop.all[j].cookiesEachHour[i];
      // console.log(addall, i)
    }
    addTotal += addall;
    // thEl = document.createElement('th')

    thEl.textContent = addall;
    trEl.appendChild(thEl);
  }
  // create new element for total of totals
  var thEl2 = document.createElement('th');
  // adding the total of totals to content
  thEl2.textContent = addTotal;
  trEl.appendChild(thEl2);
  cookieTable.appendChild(trEl);
}



function renderCookieStores() {
  console.log('in render cookie',CookieShop.all.length)

  for(var i = 0; i < CookieShop.all.length; i++) {
    if(i > 7) break;
    // console
    console.log('in for loop', i ,CookieShop.all[i])
    CookieShop.all[i].render();

  }
}
CookieShop.all[0].header();
renderCookieStores();
console.log('wont fire',CookieShop.all.length)
CookieShop.all[0].footer();




// function headerCookieStores() {
//   for(var i = 4; i < CookieShop.all.length; i++) {
//     CookieShop.all[i].header();
//   }
// }
// headerCookieStores()

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am' , '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var firstAndPike = {
//   name: '1st and Pike',
//   neighborhood: 'Seattle',
//   minCust: Math.ceil(23),
//   maxCust: Math.floor(65),
//   avgCookieSale: 6.3,
//   totalCookies : 0,

//   getCustomersPerHour: function(min, max) {
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//   },
//   customersPerHour: [],

//   getCookiesPerHour: function() {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookieSale))
//     }
//   },
//   cookiesPerHour: [],
// }

// firstAndPike.sumTotalCookie = function () {
//   for(var i = 0; i<this.cookiesPerHour.length; i++){
//     this.totalCookies+= this.cookiesPerHour[i]
//   }
//   return this.totalCookies;
// }

// firstAndPike.render = function() {
//   var pike = document.getElementById('firstAndPike');

//   for (var i = 0; i < this.cookiesPerHour.length; i++) {

//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
//     pike.appendChild(liEl);
//   }
//   liEl.textContent = `Total Cookies : ${this.totalCookies}`;
//   pike.appendChild(liEl);

// }

// firstAndPike.getCustomersPerHour(firstAndPike.minCust, firstAndPike.maxCust)
// firstAndPike.getCookiesPerHour()
// //console.log(firstAndPike);

// firstAndPike.sumTotalCookie();
// firstAndPike.render();



// var SeaTacAirport = {
//   name: 'SeaTac Airport',
//   neighborhood: 'SeaTac',
//   minCust: Math.ceil(3),
//   maxCust: Math.floor(24),
//   avgCookieSale: 1.2,
//   totalCookies : 0,

//   getCustomersPerHour: function(min, max) {
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//   },
//   customersPerHour: [],
//   getCookiesPerHour: function() {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookieSale))
//     }
//   },
//   cookiesPerHour: [],
// }

// SeaTacAirport.sumTotalCookie = function () {
//   for(var i = 0; i<this.cookiesPerHour.length; i++){
//     this.totalCookies+= this.cookiesPerHour[i]
//   }
//   return this.totalCookies;
// }

// SeaTacAirport.render = function() {
//   var pike = document.getElementById('SeaTac');

//   for (var i = 0; i < this.cookiesPerHour.length; i++) {

//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
//     pike.appendChild(liEl);
//   }
//   liEl.textContent = `Total Cookies : ${this.totalCookies}`;
//   pike.appendChild(liEl);

// }

// SeaTacAirport.getCustomersPerHour(SeaTacAirport.minCust, SeaTacAirport.maxCust)
// SeaTacAirport.getCookiesPerHour()

// SeaTacAirport.sumTotalCookie();
// SeaTacAirport.render();




// var SeattleCenter = {
//   name: 'Seattle Center',
//   neighborhood: 'Seattle',
//   minCust: Math.ceil(11),
//   maxCust: Math.floor(38),
//   avgCookieSale: 3.7,
//   totalCookies : 0,

//   getCustomersPerHour: function(min, max) {
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//   },
//   customersPerHour: [],
//   getCookiesPerHour: function() {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookieSale))
//     }
//   },
//   cookiesPerHour: [],
// }

// SeattleCenter.sumTotalCookie = function () {
//   for(var i = 0; i<this.cookiesPerHour.length; i++){
//     this.totalCookies+= this.cookiesPerHour[i]
//   }
//   return this.totalCookies;
// }

// SeattleCenter.render = function() {
//   var pike = document.getElementById('SeattleCenter');

//   for (var i = 0; i < this.cookiesPerHour.length; i++) {

//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
//     pike.appendChild(liEl);
//   }
//   liEl.textContent = `Total Cookies : ${this.totalCookies}`;
//   pike.appendChild(liEl);

// }

// SeattleCenter.getCustomersPerHour(SeattleCenter.minCust, SeattleCenter.maxCust)
// SeattleCenter.getCookiesPerHour()

// SeattleCenter.sumTotalCookie();
// SeattleCenter.render();




// var CapitolHill = {
//   name: 'Seattle Center',
//   neighborhood: 'Seattle',
//   minCust: Math.ceil(11),
//   maxCust: Math.floor(38),
//   avgCookieSale: 3.7,
//   totalCookies : 0,

//   getCustomersPerHour: function(min, max) {
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//   },
//   customersPerHour: [],
//   getCookiesPerHour: function() {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookieSale))
//     }
//   },
//   cookiesPerHour: [],
// }

// CapitolHill.sumTotalCookie = function () {
//   for(var i = 0; i<this.cookiesPerHour.length; i++){
//     this.totalCookies+= this.cookiesPerHour[i]
//   }
//   return this.totalCookies;
// }

// CapitolHill.render = function() {
//   var pike = document.getElementById('CapitolHill');

//   for (var i = 0; i < this.cookiesPerHour.length; i++) {

//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
//     pike.appendChild(liEl);
//   }
//   liEl.textContent = `Total Cookies : ${this.totalCookies}`;
//   pike.appendChild(liEl);

// }

// CapitolHill.getCustomersPerHour(CapitolHill.minCust, CapitolHill.maxCust)
// CapitolHill.getCookiesPerHour()

// CapitolHill.sumTotalCookie();
// CapitolHill.render();



// var Alki = {
//   name: 'Alki',
//   neighborhood: 'Alki Beach',
//   minCust: Math.ceil(2),
//   maxCust: Math.floor(16),
//   avgCookieSale: 4.6,
//   totalCookies : 0,

//   getCustomersPerHour: function(min, max) {
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//   },
//   customersPerHour: [],
//   getCookiesPerHour: function() {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookieSale))
//     }
//   },
//   cookiesPerHour: [],
// }

// Alki.sumTotalCookie = function () {
//   for(var i = 0; i<this.cookiesPerHour.length; i++){
//     this.totalCookies+= this.cookiesPerHour[i]
//   }
//   return this.totalCookies;
// }

// Alki.render = function() {
//   var pike = document.getElementById('Alki');

//   for (var i = 0; i < this.cookiesPerHour.length; i++) {

//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]}`;
//     pike.appendChild(liEl);
//   }
//   liEl.textContent = `Total Cookies : ${this.totalCookies}`;
//   pike.appendChild(liEl);
// }

// Alki.getCustomersPerHour(Alki.minCust, Alki.maxCust)
// Alki.getCookiesPerHour()

// Alki.sumTotalCookie();
// Alki.render();


// // console.log(Alki.getCookiesPerHour())