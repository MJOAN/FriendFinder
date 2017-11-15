// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friend = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/friends", function(req, res) {
    res.json(waitListData);

    // Our "server" will respond to requests and let users know if they have a match or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

    if (friend.length < 5) {
      friend.push(req.body);
      res.json(true);
    }
    else {
      friend.push(req.body);
      res.json(false);
    }
  });


  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friend = [];

    console.log(friend);
  });
};


