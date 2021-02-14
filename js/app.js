// 'use strict';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let seattle = {
    name: 'Seattle',
    minimumCustomersPerHour: 0,
    maximumCustomersPerHour: 0,
    averageCookiesPerCustomer: 0,
    setMinimumCustomersPerHour: function (min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); },
    setMaximumCustomersPerHour: function (min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); },
    setAverageCookiesPerCustomer: function (min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); },
    render: function () {
        let container = document.getElementById('Branches');

        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;

        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);

        for (let i = 06; i < 20; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.setMinimumCustomersPerHour(0, 5);
            this.setMaximumCustomersPerHour(6, 20);
            this.setAverageCookiesPerCustomer(1, 5);

            averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

            averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

            liEl.textContent = `${i}:00 -> ${averageCookiesPerHour} cookies.`;
        }
    },
};


let tokyo = {
    name: 'Tokyo',
    minimumCustomersPerHour: 0,
    maximumCustomersPerHour: 0,
    averageCookiesPerCustomer: 0,
    setMinimumCustomersPerHour: function (min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); },
    setMaximumCustomersPerHour: function (min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); },
    setAverageCookiesPerCustomer: function (min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); },
    render: function () {
        let container = document.getElementById('Branches');

        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;

        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);

        for (let i = 06; i < 20; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.setMinimumCustomersPerHour(0, 5);
            this.setMaximumCustomersPerHour(6, 20);
            this.setAverageCookiesPerCustomer(1, 5);

            averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

            averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

            liEl.textContent = `${i}:00 -> ${averageCookiesPerHour} cookies.`;
        }
    },
};


let dubai = {
    name: 'Dubai',
    minimumCustomersPerHour: 0,
    maximumCustomersPerHour: 0,
    averageCookiesPerCustomer: 0,
    setMinimumCustomersPerHour: function (min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); },
    setMaximumCustomersPerHour: function (min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); },
    setAverageCookiesPerCustomer: function (min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); },
    render: function () {
        let container = document.getElementById('Branches');

        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;

        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);

        for (let i = 06; i < 20; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.setMinimumCustomersPerHour(0, 5);
            this.setMaximumCustomersPerHour(6, 20);
            this.setAverageCookiesPerCustomer(1, 5);

            averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

            averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

            liEl.textContent = `${i}:00 -> ${averageCookiesPerHour} cookies.`;
        }
    },
};


let paris = {
    name: 'Paris',
    minimumCustomersPerHour: 0,
    maximumCustomersPerHour: 0,
    averageCookiesPerCustomer: 0,
    setMinimumCustomersPerHour: function (min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); },
    setMaximumCustomersPerHour: function (min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); },
    setAverageCookiesPerCustomer: function (min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); },
    render: function () {
        let container = document.getElementById('Branches');

        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;

        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);

        for (let i = 06; i < 20; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.setMinimumCustomersPerHour(0, 5);
            this.setMaximumCustomersPerHour(6, 20);
            this.setAverageCookiesPerCustomer(1, 5);

            averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

            averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

            liEl.textContent = `${i}:00 -> ${averageCookiesPerHour} cookies.`;
        }
    },
};


let lima = {
    name: 'Lima',
    minimumCustomersPerHour: 0,
    maximumCustomersPerHour: 0,
    averageCookiesPerCustomer: 0,
    setMinimumCustomersPerHour: function (min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); },
    setMaximumCustomersPerHour: function (min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); },
    setAverageCookiesPerCustomer: function (min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); },
    render: function () {
        let container = document.getElementById('Branches');

        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;

        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);

        for (let i = 06; i < 20; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.setMinimumCustomersPerHour(0, 5);
            this.setMaximumCustomersPerHour(6, 20);
            this.setAverageCookiesPerCustomer(1, 5);

            averageCustomersPerHour = (this.maximumCustomersPerHour - this.minimumCustomersPerHour) / 2;

            averageCookiesPerHour = Math.floor(averageCustomersPerHour * this.averageCookiesPerCustomer);

            liEl.textContent = `${i}:00 -> ${averageCookiesPerHour} cookies.`;
        }
    },
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();