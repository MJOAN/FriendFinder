// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, matches and user
// ===============================================================================

var friends = require("..app/data/friends");

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
    res.json(friends);
    console.log("User Data: " + JSON.stringify(friends);
  });


  app.post("/survey", function(req, res) {  // redirect to successful match in matchModal
    
    console.log(req.body);
    console.log("User Data: " + 

    var user = req.body.user;
    var friends = [];  // is this how i reference ???

    var userArray = [];
    var friendArray = [];

    var scores = req.body.user[0].scores;
    var matchName = req.body.user.name;
    var matchPhoto = req.body.user.photo;
    
    var difference;
    var totalDifference = 0;


    for (scores in user) {   // using a for in  --- > not a for loop is that OK?! 
    userArray = user.scores;
    }

/// get JSON from friends file
    function getArray(){
    return $.getJSON('/app/data/friends.js');
    }
    getArray().done(function(data) {
///    

    for (scores in friends) {  // have to loop through ALL JSON objects in friends.js file!! 
      friendArray = friends.scores;
    }
  
    function subtractArrays (userArray, friendArray) {     // run subtratArrays for every possible friend 
        return arr2.map(function (el, i) {
        return Math.abs(el - userArray[i]);
        });
    }   

    subtractArrays(userArray, friendArray);    // [1, 2. 0, 0, 0, 3, 2, 0 , 1] for example

    var arrayResult = subtractArrays();

    for (var i = 0; i < arrayResult.length; i++) {
        difference = 50 - arrayResult[i];
        totalDifference = difference;
    }

    return totalDifference;    // set totalDifference variable to lowest number

    res.redirect("/");


  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
    user = [];

    console.log("Clearing!");
    res.redirect("/");

  });
};


