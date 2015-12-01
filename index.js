var express = require('express');
var app = express();
var parser = require('body-parser');

var entries = {
  1: {
    firstName: "Karl",
    lastName: "Marx",
    emails: [{
      type: "home",
      address: "karl@communist.com"
    }, {
      type: "work",
      address: "ihateto@work.com"
    }]
  },
  2: {
    firstName: "Edith",
    lastName: "Wharton",
    emails: [{
      type: "home",
      address: "edith@themanse.com"
    }, {
      type: "work",
      address: "misswharton@writer.com"
    }]
  },
  3: {
    firstName: "Martin",
    lastName: "Amis",
    emails: [{
      type: "home",
      address: "smartymarty@nicerthanyours.com"
    }, {
      type: "work",
      address: "notmydad@britwriter.com"
    }]
  },
  4: {
    firstName: "Louisa May",
    lastName: "Alcott",
    emails: [{
      type: "home",
      address: "lm@alcotthouse.com"
    }, {
      type: "work",
      address: "lmalcott@concord.com"
    }]
  },
  5: {
    firstName: "Ralph Waldo",
    lastName: "Emerson",
    emails: [{
      type: "home",
      address: "ralph@oldmanse.com"
    }, {
      type: "work",
      address: "rwemerson@concord.com"
    }]
  },
};



app.use(parser.json());


app.post('/entry', function(req, res) {
  //console.log(req.body);
  var newId = Date.now();
  
  entries[newId] = req.body;
  
  res.end();
});

function checkEmails(email, emails){  //check if email is part of emails
  for (var i=0; i < emails.length; i++){
    if (email === emails[i].address) {
      return true;
      
    }
  }
  return false;
}

app.get('/entry/search', function(req, res) {
  var results = [];

  for (var entryId in entries) {

    var lastName = req.query.lastName === entries[entryId].lastName;
    var firstName = req.query.firstName === entries[entryId].firstName;
    var emailMatches = checkEmails(req.query.email, entries[entryId].emails);
   

    if (lastName || firstName || emailMatches) {
      results.push(entries[entryId]);
    }
  }
  res.json(results);
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
