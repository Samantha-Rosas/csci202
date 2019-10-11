var slider;
var c1; // color variable
var c2; // color variable
var c3; // color variable


// setting up the canvas
function setup() {
 
  slider = createSlider(0, 255, 50);
  slider.position(10, 510);
  slider.style('width', '180px');
  
  createCanvas(displayWidth, 500);
  background(250);
  c1 = 200;
  c2 = 200;
  c3 = 255;
}


function draw() {
  var val = slider.value();
  //background(val);
  strokeWeight(15);
  stroke(val, c2, c3);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
}


// double click and it randomly changes the color value.  
function doubleClicked() {
 c1 = random(0, 255);
 c2 = random(0, 255);
 c3 = random(0, 255);
}
