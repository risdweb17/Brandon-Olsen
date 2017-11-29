
var layerTwo;
var poopArray = [];
var poops1;
var poops2;
var poops3;
var poops4;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  layerTwo = createGraphics(windowWidth, windowHeight);
  imageMode(CENTER);
  poops1 = loadImage("img/poops1.png");
  poops2 = loadImage("img/poops2.png");
  poops3 = loadImage("img/poops3.png");
  poops4 = loadImage("img/poops4.png");
  poopArray.push(poops1,poops2,poops3,poops4);

}



function draw() {
  image(layerTwo, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  

}


function mouseClicked() {
    layerTwo.image(random(poopArray), mouseX/2, mouseY/2, 50, 50);
    
}