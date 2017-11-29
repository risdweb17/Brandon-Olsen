var nounJunk = ["space","atmosphere", "Titan", "Viking 1","sputnik", "cosmonaut","payload", "astronaut", "mercury", "challenger", "satellite", "UFO", "orbiter", "moon", "alien", "Voyager", "solar system", "International Space Station", "SkyLab", "cryotank", "command module", "Eugene Cernan", "EVA", "spacecraft", "rocket man", "inhabitants", "extraterrestrial"];
var pastVerbJunk = ["blasted", "ejected", "launched", "beamed", "burned", "expelled", "stirred", "aborted", "spacewalked", "moonwalked", "orbited", "landed", "rocketed", "operated", "piloted", "floated", "careened", "bolted", "zoomed", "whizzed", "streaked", "reentered"];
var adjJunk = ["retrograde", "American", "Soviet", "weightless", "lunar", "Martian", "unmanned", "planetary", "galatic", "cosmic", "celestial", "intergalactic", "stellar", "solar" ];
var startingJunk = ["The","The","The", "A", "Also,", "Therefore,", "One", "Then,", "Furthermore,"];
var articleJunk = ["the", "the", "the", "the", "the", "the", "a","a","a", "one"];
var puncJunk = [".", ".", ".", ".", ".", ".", ".", "!", "?"];
var conJunk = ["and", "and", "and", "and", "and", "or", "&"];

var canvas;
var clickCounter = 0;
var spaceRaceTypeFace;

function preload() {
  
}

function setup() {
  canvas = createCanvas(0, 0-(0*(3/10)));
  frameRate(6);
  imageMode(CENTER);
  canvas.parent('sketch-holder');
}



function keyPressed(SPACE) {
  
  if (clickCounter % 2){
  loremSentance2();
  clickCounter= clickCounter + 3;
  console.log(clickCounter);
  }
  else {
    loremSentance();
    clickCounter= clickCounter + 1;
    console.log(clickCounter);
  }


}

function loremSentance() {
  

  var noun = random(nounJunk);
  var noun2 = random(nounJunk);
  var noun3 = random(nounJunk);
  var noun4 = random(nounJunk);
  var noun5 = random(nounJunk);
  var noun6 = random(nounJunk);
  var starter = random(startingJunk);
  var starter2 = random(startingJunk);
  var verb = random(pastVerbJunk);
  var verb2 = random(pastVerbJunk);
  var article = random(articleJunk);
  var article2 = random(articleJunk);
  var article3 = random(articleJunk);
  var article4 = random(articleJunk);
  var adjective = random(adjJunk);
  var adjective2 = random(adjJunk);
  var punc = random(puncJunk);
  var punc2 = random(puncJunk);
  var conjunct = random(conJunk);
  var conjunct2 = random(conJunk);


  var sentance = starter + " " + noun + " " + verb + " " + article + " " + adjective + " " +
    noun2 + " " + conjunct + " " + article2 + " " + noun3 + punc + " " + starter2 + " " + noun4 + " " + verb2 + " " + article3 + " " + adjective2 + " " +
    noun5 + " " + conjunct2 + " " + article4 + " " + noun6 + punc2 + " ";
  createP(sentance).parent('p5input');
  
}

function loremSentance2() {
  

  var noun = random(nounJunk);
  var noun2 = random(nounJunk);
  var noun3 = random(nounJunk);
  var noun4 = random(nounJunk);
  var noun5 = random(nounJunk);
  var noun6 = random(nounJunk);
  var noun7 = random(nounJunk);
  var noun8 = random(nounJunk);
  var starter = random(startingJunk);
  var starter2 = random(startingJunk);
  var starter3 = random(startingJunk);
  var verb = random(pastVerbJunk);
  var verb2 = random(pastVerbJunk);
  var verb3 = random(pastVerbJunk);
  var verb4 = random(pastVerbJunk);
  var article = random(articleJunk);
  var article2 = random(articleJunk);
  var article3 = random(articleJunk);
  var article4 = random(articleJunk);
  var article5 = random(articleJunk);
  var article6 = random(articleJunk);
  var adjective = random(adjJunk);
  var adjective2 = random(adjJunk);
  var adjective3 = random(adjJunk);
  var adjective4 = random(adjJunk);
  var punc = random(puncJunk);
  var punc2 = random(puncJunk);
  var punc3 = random(puncJunk);
  var conjunct = random(conJunk);
  var conjunct2 = random(conJunk);
  var conjunct3 = random(conJunk);


  var sentance = starter + " " + noun + " " + verb + " " + article + " " + adjective + " " +
    noun2 + " " + conjunct + " " + article2 + " " + noun3 + punc + " " + starter2 + " " + noun4 + " " + verb2 + " " + article3 + " " + adjective2 + " " +
    noun5 + " " + conjunct2 + " " + article4 + " " + noun6 + punc2 + " " + starter3 + " " + article5 + " "+ adjective3 + " " + noun7 +" "+ verb3 +" "+ conjunct3 +" "+ article6 +" "+ adjective4 + " "+ noun8 +" "+ verb4 + punc3 + " ";
  createP(sentance).parent('p5input');
  
  
}







