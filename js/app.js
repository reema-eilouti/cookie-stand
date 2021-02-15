// 'use strict';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function Branch(name) {
    this.name = name;
    this.minimumCustomersPerHour = 0;
    this.maximumCustomersPerHour = 0;
    this.averageCookiesPerCustomer = 0;
};

Branch.prototype.setMinimumCustomersPerHour = function (min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); };

Branch.prototype.setMaximumCustomersPerHour = function (min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); };

Branch.prototype.setAverageCookiesPerCustomer = function (min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); };

Branch.prototype.render = function () {

    let dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);

    let td1El = document.createElement('td');
    dataRowEl.appendChild(td1El);
    td1El.textContent = this.name;

    let totalCookies = 0;

    for (let i = 06; i < 20; i++) {

        this.setMinimumCustomersPerHour(0, 5);
        this.setMaximumCustomersPerHour(6, 20);
        this.setAverageCookiesPerCustomer(1, 5);

        averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

        averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

        totalCookies += averageCookiesPerHour;

        let td2El = document.createElement('td');
        dataRowEl.appendChild(td2El);
        td2El.textContent = averageCookiesPerHour;
    }

    let td3El = document.createElement('td');
    dataRowEl.appendChild(td3El);
    td3El.textContent = `${totalCookies} cookies`;

};

let container = document.getElementById('Branches');

let tableEl = document.createElement('table');
container.appendChild(tableEl);

let headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);

let th0El = document.createElement('th');
headerRowEl.appendChild(th0El);
th0El.textContent = 'Branch';

for (let i = 06; i < 20; i++) {

    let thEl = document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = `${i}:00`;

}

let th14El = document.createElement('th');
headerRowEl.appendChild(th14El);
th14El.textContent = 'Daily Branch Total';


let seattle = new Branch('Seattle');
let tokyo = new Branch('Tokyo');
let dubai = new Branch('Dubai');
let paris = new Branch('Paris');
let lima = new Branch('Lima');

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


let footerRowEl = document.createElement('tr');
tableEl.appendChild(footerRowEl);
// footerRowEl.textContent = 'Totals';

let tfEl = document.createElement('th');
footerRowEl.appendChild(tfEl);
tfEl.textContent = 'Totals';