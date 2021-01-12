
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,tree_img;
var boy, boy_img;

function preload(){
tree_img = loadImage("Sprites/tree.png");
boy_img = loadImage("Sprites/boy.png");
	
}

function setup() {
	createCanvas(1600, 700);

	tree = createSprite(1400,400,30,30);
	tree.addImage("tree", tree_img)
	tree.scale=0.5
	
	boy = createSprite(400,570,30,30);
	boy.addImage("boy", boy_img)
	boy.scale=0.2

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,20);
	mango1 = new Mango(1250,350);
	mango2 = new Mango(1400,150);
	mango3 = new Mango(1550,250);
	mango4 = new Mango(1300,230);
	mango5 = new Mango(1450,240);
	mango6 = new Mango(1350,350);
	mango7 = new Mango(1200,280);
	mango8 = new Mango(1500,350);

	stone = new Stone(300,450,60,60);
    chain = new Slingshot(stone.body,{x:300,y:450})

	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 
  drawSprites();
 
 
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()

  stone.display();
  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x ,mangoBodyPosition.y)
		if(distance<=100){
			Matter.Body.setStatic(lmango.body,false);
			console.log(lmango.body);
		}

}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:300,y:450});
		chain.attach(stone.body);
	}
}