const { app } = require('./app')
const http = require('http')

const httpServer = http.createServer(app)
const package = require('./package.json')

const httpListener = httpServer.listen(3000)

if(httpListener.address() != null) {
    //console.log( '  ' )
    console.log( ' My First API ')
    //console.log( '  ' )
    console.log( ' Rest API: \x1b[30m\x1b[4m\x1b[42mRunning\x1b[0m')
    console.log( ' Running with version \x1b[30m\x1b[4m\x1b[42m' + package.version + "\x1b[0m" )
    //console.log( '  ' )
}