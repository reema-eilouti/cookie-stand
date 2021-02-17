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

    let totalColumns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (row = 1; row < tableEl.rows.length - 1; row++) {
        for (column = 1; column <= 15; column++) {
            switch (column) {
                case 1:
                    totalColumns[0] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 2:
                    totalColumns[1] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 3:
                    totalColumns[2] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 4:
                    totalColumns[3] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 5:
                    totalColumns[4] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 6:
                    totalColumns[5] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 7:
                    totalColumns[6] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 8:
                    totalColumns[7] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 9:
                    totalColumns[8] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 10:
                    totalColumns[9] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 11:
                    totalColumns[10] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 12:
                    totalColumns[11] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 13:
                    totalColumns[12] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 14:
                    totalColumns[13] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
                case 15:
                    totalColumns[14] += Number(tableEl.rows[row].cells[column].innerText);
                    break;
            }
        }
    }

    for (let counter = 0; counter < 15; counter++) {
        let tdElement = document.createElement('td');
        footerRowEl.appendChild(tdElement);
        tdElement.textContent = totalColumns[counter];
    }

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

Branch.prototype.setMinimumCustomersPerHour = function(min, max) { this.minimumCustomersPerHour = getRandomNumber(min, max); };

Branch.prototype.setMaximumCustomersPerHour = function(min, max) { this.maximumCustomersPerHour = getRandomNumber(min, max); };

Branch.prototype.setAverageCookiesPerCustomer = function(min, max) { this.averageCookiesPerCustomer = getRandomNumber(min, max); };

Branch.prototype.render = function() {

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


let form = document.getElementById("newBranch");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log(event.target);

    let name = event.target.branchName.value;

    let branch = new Branch(name);

    branch.render();

    form.reset();

    lastRowIndex = tableEl.rows.length - 2

    tableEl.deleteRow(lastRowIndex)

    createTableFooter();

})

createTableFooter();