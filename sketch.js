const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0

function preload(){
 
  polygonimg = loadImage("Polygon.png")


}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    
  //level 1
  block2 = new box(430,235,30,40)
  block3 = new box(460,235,30,40);
  block4 = new box(490,235,30,40);
  block5 = new box(520,235,30,40);
  block6 = new box(550,235,30,40)
  //level 2
  block7 = new box(460,195,30,40)
  block8 = new box(490,195,30,40);
  block9 = new box(520,195,30,40)
  ground1 = new grounde(500,250,175,20)
  ground2 = new grounde(500,380,1000,50)
  //level 3
  block10 = new box(490,155,30,40)

  polygon = Bodies.circle(50,230,50,20);
  World.add(world,polygon)

  slingshot1 = new sLingShot(polygon,{x:200,y:200})

  polygon1 = createSprite(50,50,10,10)
    polygon1.addImage(polygonimg);
    polygon1.scale = 0.05
}

function draw() {
  Engine.update(engine);
  background("blue");
  polygon1.x = polygon.position.x
  polygon1.y = polygon.position.y
  text("Score:"+score,700,40)
  drawSprites();  
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  ground1.display();
  ground2.display();
  slingshot1.display();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  block9.Score();
  block10.Score();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){


  if(keyCode===32){

      slingshot1.attach(polygon);
  }
}