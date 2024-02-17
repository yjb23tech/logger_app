const logger = require('./logger.js') //loading a module i.e. loading the vars and functions chained to the exports object module.exports

const os = require('os')

const fs = require('fs')

const EventEmitter = require('events'); 
const emitter = new EventEmitter()

emitter.on('logging', (arg) => {
    console.log(arg.data)
})

emitter.on('messageLogged', (arg) => {
    console.log("Listening", arg)
})

emitter.emit('logging', {data: 'Live from the 5 hunnid and 4'})
emitter.emit('messageLogged', {id: 1, url: 'wunna gunna'})

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

const files = fs.readdirSync('./')
const filesSync = fs.readdir('$', (err, files) => {
    if (err) {
        console.log('Error', err)
    } else {
        console.log('Result', files)
    }
})

console.log('Total Memory:' + totalMemory)
console.log(`Total Memory: ${totalMemory}}`)
console.log(`Free Memory: ${freeMemory}`)
// console.log(files)
