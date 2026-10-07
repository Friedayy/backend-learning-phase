const {log} = require("./logger");

function add(a , b){
    const result = a + b ;
    log(result);
}

module.exports = {add}