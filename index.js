var express = require('express');
var app = express();


app.get('/op/:operation/:num1/:num2', function(request, response) {

  var add = Number(request.params.num1) + Number(request.params.num2);
  var sub = Number(request.params.num1) - Number(request.params.num2);
  var mult = Number(request.params.num1) * Number(request.params.num2);
  var div = Number(request.params.num1) / Number(request.params.num2);

  var result = {

    "operator": request.params.operation,
    "firstOperand": request.params.num1,
    "secondOperand": request.params.num2,
    "solution": ''

  };

  if (request.params.operation === 'add') {
    result.solution = add;
    response.json(result);
  }
  else if (request.params.operation === 'sub') {
    result.solution = sub;
    response.json(result);
  }
  else if (request.params.operation === 'mult') {
    result.solution = mult;
    response.json(result);
  }
  else if (request.params.operation === 'div') {
    result.solution = div;
    response.json(result);
  }
  else if (result.solution === '') {
    response.send('403');
  }
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
