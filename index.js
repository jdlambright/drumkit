// created variable to make for loop cleaner
var numDrumBtn = document.querySelectorAll(".drum").length;

// forloop to make the code apply to all buttons. it contains
// an anonymous function because it wants to call the function after
// the click has occured instead of when the page opens
// the eventlistener is what make it know what to action
// it needs to respond to.
for (var i = 0; i<numDrumBtn; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!!");

  });

}
