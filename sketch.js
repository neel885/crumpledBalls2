
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var Ground;
var Dustbin;

function preload()
{
  	
}

function setup() {
	createCanvas(1600,700);

	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
     
	Engine.run(engine);

	Dustbin=new dustbin(1200,650); 
	paperObject=new paper(200,450,70);
	Ground=new ground(width/2,670,width,20);


	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  //keyPressed();

  paperObject.display();
  Ground.display();
  Dustbin.display();
   
  //drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paperObject.body , paperObject.body.position , {x:130 , y:-145});
	}
}



