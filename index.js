var express = require('express');
var app = express();

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


app.get('/entry/:entryId', function(req, res) {


  if (req.params.entryId <= Object.keys(entries).length) {       //Object.keys makes object into array

    var entryId = req.params.entryId;
    res.json(entries[entryId]);
  }
  else {
    res.sendStatus(404);
  }


});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
