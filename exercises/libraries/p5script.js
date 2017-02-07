var y = 100;
var x = 200;
var r = 150;
var q = 300;
var t = 700;
var v = 20;

function setup() {
  createCanvas(1200, 480);
	stroke(255);     // Set line drawing color to white
  frameRate(30);
}

function draw() { 
  background(0);   
  y = y - 5; 
  x = x + 3;
  r = r - 1;
  q = q + 10;
  t = t - 20;
  v = v - 12;
 
  if (y < 0) { 
    y = height; 
  } 
  if (x > height) {
  	x = 0;
  }
   if (r < 0) { 
    r = height; 
  } 
  if (q > height) {
  	q = 0;
  }
  if (t < 0) {
  	t = height;
  }
  if (v < 0) { 
    v = height; 
  } 
 
  line(0, y, width, y);  
  line(0, x, width, x); 
  line(0, r, height, r); 
  line(0, q, width, r); 
  line(0, t, width, q); 
  line(0, v, q, q); 
} 
