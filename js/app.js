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
    let container = document.getElementById('Branches');

    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;

    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);

    let totalCookies = 0;

    for (let i = 06; i < 20; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);

        this.setMinimumCustomersPerHour(0, 5);
        this.setMaximumCustomersPerHour(6, 20);
        this.setAverageCookiesPerCustomer(1, 5);

        averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

        averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

        totalCookies += averageCookiesPerHour;

        liEl.textContent = `${i}:00 -> ${averageCookiesPerHour} cookies.`;
    }

    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${totalCookies} cookies.`;

};


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