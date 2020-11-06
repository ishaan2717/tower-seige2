const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var stand1 , stand2;
var engine,world;
var polygon,polygonimage;
var ss;

function preload(){

polygonimage=loadImage("polygon.png");
  
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  stand1 = new Ground(400,360,210,10);
  stand2 = new Ground(660,260,210,10);



  box1 = new Box(325,350,30,35);
  box2 = new Box(355,350,30,35);
  box3 = new Box(385,350,30,35);
  box4 = new Box(415,350,30,35);
  box5 = new Box(445,350,30,35);
  box6 = new Box(475,350,30,35);

  box7=new Box(355,320,30,35);
  box8=new Box(385,320,30,35);
  box9=new Box(415,320,30,35);
  box10=new Box(445,320,30,35);

  box11=new Box(385,290,30,35);
  box12=new Box(415,290,30,35);
  
  box13=new Box(399,260,30,35);

  box14=new Box(635,250,30,35);
  box15=new Box(655,250,30,35);
  box16=new Box(685,250,30,35);
  box17=new Box(625,250,30,35);
  box18=new Box(645,250,30,35);

  box19=new Box(655,220,30,35);
  box20=new Box(675,220,30,35);
  box21=new Box(625,220,30,35);

  box22=new Box(650,190,30,35);

  polygon = Bodies.rectangle(100,100,10,10);
  World.add(world,polygon);

  ss = new SlingShot(polygon,{ x:200, y:150});
}

  

function draw() {

  background("black");

Engine.update(engine);

stand1.display();
stand2.display();
fill("aqua");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
fill("pink");
box7.display();
box8.display();
box9.display();
box10.display();
fill("aqua");
box11.display();
box12.display()
fill("grey");
box13.display();
fill("aqua");
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
fill("blue");
box19.display();
box20.display();
box21.display();
fill("pink");
box22.display();

ss.display();

imageMode(CENTER);
image(polygonimage,polygon.position.x,polygon.position.y,50,50);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  ss.fly();
}