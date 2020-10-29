
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
}

var ground;
var w1,w2,w3;
var paper, packageBody;

function setup() 
{
	createCanvas(1200, 1000);

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color("white");    
	
    //CreatingSpritesForWallsOfDustbin
    w1=createSprite(1000, height-50, 200, 20);
	w1.shapeColor=color("red");    
    w2=createSprite(900, height-90, 20, 100);
	w2.shapeColor=color("red");    
    w3=createSprite(1100, height-90, 20, 100);
    w3.shapeColor=color("red");   
     
    engine = Engine.create();
	world = engine.world;

    ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
    
    //Create the Bodies Here.
    w1 = Bodies.rectangle(1000, height-50, 200, 20 , {isStatic:true} );
    World.add(world, w1);
    
    w2 = Bodies.rectangle(900, height-90, 20, 100 , {isStatic:true} );
    World.add(world, w2);
    
    w3 = Bodies.rectangle(1100, height-90, 20, 100 , {isStatic:true} );
    World.add(world, w3);
    
    packageBody = Bodies.circle(100, height-55, 20,{ 'restitution':0.3, 'friction':0.5, 'density':1.2, isStatic:false}, 5);
	World.add(world, packageBody);
    
	Engine.run(engine);
  
}


function draw() 
{
    background(0);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,width,10);

    rectMode(CENTER);
    rect(w1.position.x,w1.position.y,200,20);

    rectMode(CENTER);
    rect(w2.position.x,w2.position.y,20,100);

    rectMode(CENTER);
    rect(w3.position.x,w3.position.y,20,100);

    ellipseMode(RADIUS);
    ellipse(packageBody.position.x, packageBody.position.y, 20 , 20);
    
    drawSprites();

    keyPressed();
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.applyForce(packageBody.body,packageBody.body.position,{x:85,y:-85});
 }
}

/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var log1,log2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
    
    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();
}*/

