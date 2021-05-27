var Engine = Matter.Engine;
 var World = Matter.World; 
 var Bodies = Matter.Bodies;
 var Body = Matter.Body;
 var Matter;
 var Engine;

var divisions=[];
var divisionHeight=300;
var particles=[];
var plinkos=[];
var push;

function preload(){

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 
 
  Ground = new Ground(400,690,200,20);

  
  for (var i = 0; i<=width; i=i+80){
  divisions.Push(new Divisions(i,height=divisionsHeight/2,10,divisionsHeight));
  }

  for(var j=75; j<=width; j = j+50){
    plinkos.Push(new plinkos(j,75));
  }

  for(var j=50; j<=width-10; j = j+50){
    plinkos.Push(new plinkos(j,175));
  }

  for(var j=75; j<=width; j = j+50){
    plinkos.Push(new plinkos(j,275));
  }

  for(var j=50; j<=width-10; j = j+50){
    plinkos.push(new plinkos(j,375));
  }

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);  

  for(var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }

  if(frameCount%60===0); {
particles.Push(new Particles(random(width/2-30, width/2-30),10,10));
  }

for(var h = 0; h<particles.length; h++){
    particles[h].display();
}

for(var j = 0; j<plinkos.length; j++){
      plinkos[j].display();
}


Ground.display();

  drawSprites();
}
  
 