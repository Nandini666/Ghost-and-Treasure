const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var treasure;
var canvas, backgroundImage;
var treasureImage,shieldImage;
//var database;

var zombies,bg,shield;
var zombie;
function preload(){
 zombies=loadImage("zombie game pic.jpg");
 bg=loadImage("background pic.jpg");
 treasureImage=loadImage("treasure pic.jpg");
 shieldImage=loadImage("fighter shield pic.jpg");
}

function setup(){
  canvas = createCanvas(1200,550);
  engine = Engine.create();
    world = engine.world;
  //database = firebase.database();
  zombieGroup=createGroup();
  shield=createSprite(700,400,130,130);
 ground1 = new ground(800,height,1650,50);
 treasure=createSprite(1000,350,140,140);

 treasure.addImage("money", treasureImage);
 shield.addImage("fighter",shieldImage)

 //sheild=new fighter(700,400,130,130);
 //treasure1=new treasure(1000,350,140,140);


}

function draw(){
  background(bg);
  ground1.display();
 // sheild.display();
  //treasure1.display();
  spawnzombies();

  if(ground.x<0){
    ground.x=225;
  }
 if(zombieGroup.isTouching(shield)){
   //tint(255,0);
    zombie.destroy(true);
   //zombieGroup.visible=false;
  }

 shield.x=mouseX;
 shield.y=mouseY;

  drawSprites();
}
function spawnzombies(){
  if (frameCount % 20 === 0){
    rand= random (0,550)
    zombie = createSprite(100,rand);
    zombie.addAnimation("monster",zombies);
    zombie.velocityX=5;
    zombie.scale = 0.1;
    zombieGroup.add(zombie);
  }
 
}
