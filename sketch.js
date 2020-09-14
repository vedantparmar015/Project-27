
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
	bobObject1 = new Bob(100,250,50,50);
	bobObject2 = new Bob(150,250,50,50);
	bobObject3 = new Bob(200,250,50,50);
	bobObject4 = new Bob(250,250,50,50);
	bobObject5 = new Bob(300,250,50,50);
	roof = new Roof(200,50,200,30);
	rope1 = new rope(bobObject1.body,roof.body,+bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roof.body,+bobDiameter*2,0);
	rope3 = new rope(bobObject3.body,roof.body,+bobDiameter*2,0);
	rope4 = new rope(bobObject4.body,roof.body,+bobDiameter*2,0);
	rope5 = new rope(bobObject5.body,roof.body,+bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



