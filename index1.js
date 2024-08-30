const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    //console.log(req.url)
    if(req.url == '/contactUs'){

        fs.readFile('./files/contactUs.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    } else if(req.url == '/aboutUs'){

        fs.readFile('./temp/about_us.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    } else if(req.url == '/claimInsur'){

        fs.readFile('./temp/gallery.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    } else if(req.url == '/research'){

        fs.readFile('./temp/faq.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    }
    else if(req.url == '/gallery'){

        fs.readFile('./temp/faq.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    }
    else if(req.url == '/login'){

        fs.readFile('./temp/faq.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    } else{

        fs.readFile('./files/Home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
        
    }
  
}).listen(8080);

