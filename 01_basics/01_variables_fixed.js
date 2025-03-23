const accountID = 144553
let accountEmail = "archisha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountID = 2;// not allowed

accountEmail = "hc@hc.com"
accountPssword = "212121"
accountCity = "Mumbai"

console.log(accountID);


/*
Prefer not to use var because of the issue in block scope 
and functional scope.
*/

console.table([accountID,accountEmail,accountPassword,accountCity]);
  