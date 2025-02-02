// var,let,const
const accountId = 1445
let accountEmail = "arnav@gmail.com"
var accountPassword = "123456"

// accountId = 2; not allowed
accountEmail = "arnavsh@gmail.com"
accountPassword = "2121212"

/* let and const is block scope and var is a functional scope that why we don't use var now a days. */

console.log(accountId);
console.table([accountEmail,accountId,accountPassword]);
