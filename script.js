
var startButton = document.getElementById("start");



startButton.addEventListener("click", function() {
    // Your code to be executed when the button is clicked
    var count = 30;
var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}
});




