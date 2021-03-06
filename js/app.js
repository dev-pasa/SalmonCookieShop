'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am' , '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var CookieShopAll =[];

//access table in the DOM HTML
var cookieTable = document.getElementById('cookieTable');
var addStore = document.getElementById('add-store');

function CookieShop(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, storeName) {
  this.storeName = storeName;
  this.minCustomersPerHour = Math.floor(minCustomersPerHour);
  this.maxCustomersPerHour = Math.floor(maxCustomersPerHour);
  this.avgCookiesPerCustomer = Math.ceil(avgCookiesPerCustomer);
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = 0;
  CookieShopAll.push(this)
  // CookieShopAll.unshift(this)
}

new CookieShop(23, 65, 6.3, '1st and Pike');
new CookieShop(3, 24, 1.2, 'SeaTac Airport');
new CookieShop(11, 38, 3.7, 'Seattle Center');
new CookieShop(20, 38, 2.3, 'Capitol Hill');
new CookieShop(2, 16, 4.6, 'Alki');

function random(min,max){
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function newElement(type, content, parent){
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

CookieShop.prototype.getCustomersPerHour = function() {
  for(var i = 0; i < hours.length; i++){
    //calculate a random number
    var randomCustomers= random(this.minCustomersPerHour, this.maxCustomersPerHour);
    //push random number in an array
    this.customersEachHour.push(randomCustomers);
  }
}

CookieShop.prototype.getCookiesPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    // calc the cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    // put the numbers into an array
    this.cookiesEachHour.push(hourlyCookies);
  }
}

CookieShop.prototype.getTotalCookies = function(){
  for(var i = 0; i < hours.length; i++){
    this.totalCookies += this.cookiesEachHour[i];
  }}

CookieShop.prototype.header = function() {
  var trEl = document.createElement('tr');
  newElement('th', '', trEl);
  newElement('th', 'Location', trEl);

  for (var i = 0; i < hours.length; i++){
    newElement('th', hours[i], trEl);
  }
  newElement('th', 'Total', trEl);
  cookieTable.appendChild(trEl);
}


CookieShop.prototype.render = function() {
  this.getCustomersPerHour();
  this.getCookiesPerHour();
  this.getTotalCookies();
  // make a tr
  var trEl = document.createElement('tr');
  //make a th
  var thEl = document.createElement('th');
  newElement('td', this.name, trEl);
  for (var j = 0; j < this.storeName.length; j++){
    thEl.textContent = this.storeName;
    trEl.appendChild(thEl);
  }
  for (var i = 0; i < hours.length; i++) {
    newElement('td', this.cookiesEachHour[i], trEl);
  }
  newElement('tb', this.totalCookies, trEl);
  cookieTable.appendChild(trEl);
}

CookieShop.prototype.footer = function() {
  // var tbEl = document.createElement('tr');
  var tfEl = document.createElement('tfoot');
  var tdEl = document.createElement('td');
  var tfoot = document.getElementById('cookieTableFoot');

  console.log(tfoot)
  // tfoot.innerHTML = '';
  // document.removeElement('cookieTableFoot')

  tfEl.appendChild(tdEl);
  newElement('th', 'Total', tfEl);

  var addTotal = 0;
  for (var i = 0; i < this.cookiesEachHour.length; i++){
    var addall = 0;
    tdEl = document.createElement('th');
    for (let j = 0; j < CookieShopAll.length; j++) {
      addall += CookieShopAll[j].cookiesEachHour[i];
    }
    addTotal += addall;
    tdEl.textContent = addall;
    tfEl.appendChild(tdEl);
  }
  newElement('th', addTotal, tfEl);

  // tfoot.innerHTML = "";
    
  var trow = document.getElementById('cookieTable');
  trow.appendChild(tfEl);
}

// function renderAllElements() {
//   CookieShop.header();
//   CookieShop.render();
//   CookieShop.footer();
// }

function handleForm(event){
  event.preventDefault();
  var oldFooter = cookieTable.querySelector('tfoot');
  cookieTable.removeChild(oldFooter);
  var minCust = event.target.MinCustomers.value;
  var maxCust = event.target.MaxCustomers.value;
  var avgCookiesCust = event.target.AvgCookiesPerCust.value;
  var storeInput = event.target.StoreNew.value;

  console.log(minCust,maxCust,avgCookiesCust, storeInput );
  new CookieShop(minCust, maxCust, avgCookiesCust, storeInput );
  // var tfoot = document.getElementById('cookieTableFoot');
  
  CookieShopAll[CookieShopAll.length-1].render();
  CookieShopAll[CookieShopAll.length-1].footer();
  event.preventDefault(); 

  // renderAllElements();

  event.target.MinCustomers.value = '';
  event.target.MaxCustomers.value = '';
  event.target.AvgCookiesPerCust.value = '';
  event.target.StoreNew.value = '';

}

addStore.addEventListener('submit', handleForm);


function renderCookieStores() {
  console.log('in render cookie',CookieShopAll.length)
  for(var i = 0; i < CookieShopAll.length; i++) {
    console.log('in for loop', i , CookieShopAll[i])
    CookieShopAll[i].render();
  }
}

// addStore.addEventListener('submit', handleForm);
CookieShopAll[0].header();
renderCookieStores();
CookieShopAll[0].footer();






