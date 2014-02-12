

var messages = ['Cool it Worked', 'Yikes I am Awesome', 'super cool messages', 'nice messages dude'];


createServer = function(req,res){
    res.writeHead(200, {
        'Connection': 'close',
        'Content-type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });
    if(req.method == 'GET'){
        res.end(JSON.stringify(messages));
    }

    if (req.method == 'POST') {
        var postData = '';
        req.on('data', function(chunk) {
            postData += chunk.toString();
        });
        req.on('end', function() {
            console.log("Got POST data:");
            console.log(JSON.parse(postData));
        });
    }

};

var port = 12200;
http = require('http');
http.createServer(createServer).listen(port);

console.log('listening on port:' + port);


