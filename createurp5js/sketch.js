var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  
  
  
}

function draw() {
  var redColor = map(mouseX,0,width,238,181);
  var greenColor = map(mouseX,0,height,28,42);
  var blueColor = map(mouseY,0,width,74,80);
 
  
  background(redColor, greenColor, blueColor);
  
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};