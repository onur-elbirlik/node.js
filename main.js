var http = require("http");
http.createServer(function (request, response) {

    // a function to load json data from a file
    var fs = require('fs');
    function loadJSONfile (filename, encoding) {
        try {
            // default encoding is utf8
            if (typeof (encoding) == 'undefined') encoding = 'utf8';

            // read file synchroneously
            var contents = fs.readFileSync(filename, encoding);

            // parse contents as JSON
            return JSON.parse(contents);

        } catch (err) {
            // an error occurred
            throw err;
        }
    } // loadJSONfile




    if (request.url == "/word25.json") {
        // this is what we needed to do now
        var myData = loadJSONfile('word25.json');

        response.setHeader('Access-Control-Allow-Origin', '*');
        response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"} );
        response.write(JSON.stringify(myData));
        response.end();
    }
    else{
        var connect = require('connect');
        var fs = require('fs');
        var filename='index.html';
        var data = fs.readFileSync(filename,'utf8');
        response.write(data);
        response.end();
    }



}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
