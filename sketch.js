const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var bg;

var ground;

var pl1;
var pl2;

var box1,box2

var log1
function preload(){
  bg = loadImage("bg.png")
}
function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,30)
    pl1 = new Ground(+40,height-20,500,70)
    pl2 = new Ground(1000,height-20,500,70)
    box1 = new Box(830,100,70,70)
    box2 = new Box(1000,100,70,70)
    log1 = new Log(810,260,300, PI/2);



}

function draw() {
  background(bg);
  Engine.update(engine);
  console.log(log1.body.angle);

  ground.display();
  pl1.display();
  pl2.display();
  box1.display();
  box2.display();
  log1.display();
  drawSprites();
}