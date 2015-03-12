/*Assignment for Week 8*/
var createName = function(first,last){
    return(first+" "+last);
      };


var askName = function(){
  while (fullName !=="Greg Dillon"){
      var  first = prompt("What's your first name");
      var  last = prompt("What's your last name");
      var fullName = createName(first, last);
      alert("Your name is "+ fullName);
    };

}/();

// askName();

// document.getElementById("asker").onclick = askName();
document.getElementById("asker").onclick = alert("Thanks");


