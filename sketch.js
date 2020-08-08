
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob
	bobObject2 = new bob
	bobObject3 = new bob
	bobObject4 = new bob
	bobObject5 = new bob

	slingshot = new slingshot (bob.body,{x:200,y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display
  bobObject2.display
  bobObject3.display
  bobObject4.display
  bobObject5.display

  slingshot.display
  drawSprites();
 
}



