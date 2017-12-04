
var layerTwo;
var poopArray = [];
var poops1;
var poops2;
var poops3;
var poops4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  layerTwo = createGraphics(windowWidth, windowHeight);
  imageMode(CENTER);
  fig1 = loadImage("img/dronebaby.png");
  fig2 = loadImage("img/monsterTruckWheelchair.png");
  fig3 = loadImage("img/robotLegs.png");
  fig4 = loadImage("img/miniHorseMan.png");
  poopArray.push(fig1,fig2,fig3,fig4);

}



function draw() {
  image(layerTwo, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
}


function mouseClicked() {
    layerTwo.image(random(poopArray), mouseX/2-57.1, mouseY/2-75,114.213, 150);
}