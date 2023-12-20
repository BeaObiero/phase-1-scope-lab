//declaring the global scope
var customerName = 'BOB';

console.log(window.customerName);

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

var bestCustomer;

    function setBestCustomer() {
    bestCustomer = 'not bob';
    }

    
function overwriteBestCustomer(){
    bestCustomer = 'new customer';
}
console.log(window.bestCustomer);

const leastFavoriteCustomer = 'unknown';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'new person'
}