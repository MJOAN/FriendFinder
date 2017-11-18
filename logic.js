// ===============================================================================
// LOGIC
// ===============================================================================




var arr = $.makeArray();
var arr = [];
var arr = new Array();

$.each(data.personnes, function (index, personne) {
    arr[index] = personne.departement;
});

var arr = personnes.personnes.map(function (element) {
    return element.departement;
});

for(var i = 0;  i < data.user.length; i++) {
    arr[arr.length] = data.user[0].scores;
}


  $.getJSON( "/survey", function( data ) {
        console.log('loaded');
        var user = [];
        $.each(data.personnes, function (index, personne) {
            user[scores.length] = user.departement;
        });
        console.log(arr);
    });

// 

var arr = new Array();
$.each( user, function(i, obj) {
      arr.push( obj.user)
});

// 

var arr = $.map( user, function( obj, i ) { 
  return obj.user; 
}); 

//

var friendArray = function (friends) {
    var friendsArray = [];
    for (var scores in friends) 
      if (friends.hasOwnProperty(scores)) {
        friendsArray.push(friends[scores]);
    }
    return friendsArray;
}

var compareProperties = function(friendsArray) {
   var compare = true;
   for(var scores in friendsArray) {
      if(friendsArray[scores] !== user[scores]) {
         compare = false;
         break;
      }
   }
   return compare;
}










module.exports = logic;