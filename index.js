// Write your solution in this file!
var customerName = `bob`;
const leastFavoriteCustomer = 'steve';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = `not bob`;
}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`;
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = `not steve`;
}
