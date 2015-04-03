var http = require('http');
var fs = require('fs');
// var path = require('path');
module.exports = function(request, response) {
 console.log(request.url);
  if(request.url === '/') 
    {
    	// console.log('over here');
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/stylesheet.css") 
    {
        fs.readFile('./stylesheets/stylesheet.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
// Cat page  // 
    else if(request.url === '/cats') 
    {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Snoopy") 
    {
        fs.readFile('./images/Snoopy.png', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents); 
            response.end();
        });
    }   
// End Cats //  
    // request didn't match anything:
    else 
    {
        response.end('File not found!!!');
	}

};
