// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, matches and user
// ===============================================================================

var friends = require("../app/data/friends");
var path = require('path');
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
    console.log("User Data: " + JSON.stringify(friends));
  });


  app.post("/api/friends", function(req, res) {  // redirect to successful match in matchModal
    
    console.log(req.body);
    console.log("User Data: " + userData);

    var difference = 0;
    var totalDifference = 50;

    var user = req.body;
    var scores = user.scores;
    console.log(scores);

    var matchName = "";
    var matchPhoto = "";

    var userArray = [];
    var friendArray = [];
    var arrayResult;

    // loop through friends and user scores length store in array variable
    for (var i = 0; i < friends.length;i++) {
        friendArray = friends[i].scores;    

         for (var j = 0; scores.length; j++ ) {    
            userArray = scores[j];
    } 

  
    function subtractArrays (userArray, friendArray) {     
        return arr2.map(function (el, i) {
        return Math.abs(el - userArray[i]);
        });
    }   

    arrayResult = subtractArrays(userArray, friendArray);   

    for (var i = 0; i < arrayResult.length; i++) {
        difference = totalDifference - arrayResult[i];   // 10 questions max * 5 highest rank === 50 
        console.log(difference);  
    }

    if (difference < totalDifference) {
      matchName = friends[i].name;
      matchPhoto = friends[i].photo; 
      }
      console.log(matchName);
    }  // end friends[i] loop

    friends.push(user);

    // Send back the name and photo of the new match result
    res.json({ matchResult: matchName, matchPhoto: matchPhoto  });
    console.log({ matchResult: matchName, matchPhoto: matchPhoto });

  });


};


