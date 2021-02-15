// 'use strict';

let container = document.getElementById('Branches');

let tableEl = document.createElement('table');
container.appendChild(tableEl);

function createTableHeaders() {

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

}

function createTableFooter() {

    let footerRowEl = document.createElement('tr');
    tableEl.appendChild(footerRowEl);

    let tfEl = document.createElement('th');
    footerRowEl.appendChild(tfEl);
    tfEl.textContent = 'Totals';

    let totalColumn1 = 0;
    let totalColumn2 = 0;
    let totalColumn3 = 0;
    let totalColumn4 = 0;
    let totalColumn5 = 0;
    let totalColumn6 = 0;
    let totalColumn7 = 0;
    let totalColumn8 = 0;
    let totalColumn9 = 0;
    let totalColumn10 = 0;
    let totalColumn11 = 0;
    let totalColumn12 = 0;
    let totalColumn13 = 0;
    let totalColumn14 = 0;
    let totalColumn15 = 0;

    for (row = 1; row < tableEl.rows.length - 1; row++) {
        for (column = 1; column <= 15; column++) {
            console.log(tableEl.rows[row].cells[column].innerText);
            switch (column) {
                case 1: totalColumn1 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 2: totalColumn2 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 3: totalColumn3 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 4: totalColumn4 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 5: totalColumn5 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 6: totalColumn6 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 7: totalColumn7 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 8: totalColumn8 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 9: totalColumn9 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 10: totalColumn10 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 11: totalColumn11 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 12: totalColumn12 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 13: totalColumn13 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 14: totalColumn14 += Number(tableEl.rows[row].cells[column].innerText); break;
                case 15: totalColumn15 += Number(tableEl.rows[row].cells[column].innerText); break;
            }
        }
    }

    let td01El = document.createElement('td');
    footerRowEl.appendChild(td01El);
    td01El.textContent = totalColumn1;

    let td02El = document.createElement('td');
    footerRowEl.appendChild(td02El);
    td02El.textContent = totalColumn2;

    let td03El = document.createElement('td');
    footerRowEl.appendChild(td03El);
    td03El.textContent = totalColumn3;

    let td04El = document.createElement('td');
    footerRowEl.appendChild(td04El);
    td04El.textContent = totalColumn4;

    let td05El = document.createElement('td');
    footerRowEl.appendChild(td05El);
    td05El.textContent = totalColumn5;

    let td06El = document.createElement('td');
    footerRowEl.appendChild(td06El);
    td06El.textContent = totalColumn6;

    let td07El = document.createElement('td');
    footerRowEl.appendChild(td07El);
    td07El.textContent = totalColumn7;

    let td08El = document.createElement('td');
    footerRowEl.appendChild(td08El);
    td08El.textContent = totalColumn8;

    let td09El = document.createElement('td');
    footerRowEl.appendChild(td09El);
    td09El.textContent = totalColumn9;

    let td10El = document.createElement('td');
    footerRowEl.appendChild(td10El);
    td10El.textContent = totalColumn10;

    let td11El = document.createElement('td');
    footerRowEl.appendChild(td11El);
    td11El.textContent = totalColumn11;

    let td12El = document.createElement('td');
    footerRowEl.appendChild(td12El);
    td12El.textContent = totalColumn12;

    let td13El = document.createElement('td');
    footerRowEl.appendChild(td13El);
    td13El.textContent = totalColumn13;

    let td14El = document.createElement('td');
    footerRowEl.appendChild(td14El);
    td14El.textContent = totalColumn14;

    let td15El = document.createElement('td');
    footerRowEl.appendChild(td15El);
    td15El.textContent = totalColumn15;
}

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
    td3El.textContent = totalCookies;

};


let seattle = new Branch('Seattle');
let tokyo = new Branch('Tokyo');
let dubai = new Branch('Dubai');
let paris = new Branch('Paris');
let lima = new Branch('Lima');


createTableHeaders();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

createTableFooter();