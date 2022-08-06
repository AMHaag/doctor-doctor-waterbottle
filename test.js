const timestamp = require ('date-fns/format');

let test = timestamp(Date.now(),'Pp')

console.log(test)