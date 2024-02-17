var url = 'http://mylogger.io/log'; 

function log(mesage) {
    //Send a HTTP Request 
    console.log(mesage)
}

module.exports.log = log //exporting; essentially creation of a new method on the exports object and pointing it at our function in this module
module.exports.endPoint = url //exporting; essentially creation of a new property on the exports object and pointing it at our var in this module 

// module.exports = log differs to the above (^^) in that you're resetting the entirety of the exports object to a single function; back in app.js logger is no longer an object
// but a function to be called directly 





