
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	stone1 = new Stone(235,420,30);

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,100,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1120,50,40);
	mango12 = new Mango(900,160,40);
	mango13 = new Mango(900,130,30);
  
  tree1 = new Tree(1050,580);
	
	ground1 = new Ground(width/2,600,width,20);

	launcher1 = new Launcher(stone1.body,{x:235,y:420});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  textSize(25);
  text("Press 'Space' to get a second chance to play !!",50,50);
  image(boy,200,340,200,300);

  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  ground1.display();
  launcher1.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  detectCollision(stone1,mango11);
  detectCollision(stone1,mango12);
  detectCollision(stone1,mango13);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x : mouseX,y:mouseY});
}

function mouseReleased(){
	launcher1.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}