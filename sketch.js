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
var zomies1,zombie1;
var score;

function preload(){
 zombies=loadImage("zombie game pic.jpg");
 zombies1=loadImage("zombie game pic.jpg");
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
  zombieGroup1=createGroup();
  shield=createSprite(700,400,130,130);
 ground1 = new ground(800,height,1650,50);
 treasure=createSprite(1000,350,140,140);

 treasure.addImage("money", treasureImage);
 shield.addImage("fighter",shieldImage);

 score = 0;

 //sheild=new fighter(700,400,130,130);
 //treasure1=new treasure(1000,350,140,140);


}

function draw(){
  background(bg);
  ground1.display();
 // sheild.display();
  //treasure1.display();

  //displaying score
  text("Score: "+ score, 500,50);

  spawnzombies();
  spawnzombies1();

  if(ground.x<0){
    ground.x=225;
  }
 

 shield.x=mouseX;
 shield.y=mouseY;

 if(zombieGroup.isTouching(shield)){
  //tint(255,0);
   zombie.destroy(true);
   score=score+10;
  //zombieGroup.visible=false;
 }

 if(zombieGroup1.isTouching(shield)){
  //tint(255,0);
   zombie1.destroy(true);
   score=score+10;
  //zombieGroup.visible=false;
 }

  drawSprites();

  
   if (zombieGroup1.isTouching(treasure)){
     //clear();
     shield.visible=false;
     zombie.velocityX=0;
     treasure.visible=false;
     background("black")
     fill("white")
     textSize(40);
     text("YOU LOST",250, 200);
     
   }
   
   
   if (zombieGroup.isTouching(treasure)){
    // clear();
    shield.visible=false;
     zombie.velocityX=0;
     treasure.visible=false;
     background("black")
     fill("white")
     textSize(40);
     text("YOU LOST",250, 200);
     
   }

   if (score===500){
    clear();
    background("black")
    fill("white")
    textSize(40);
    text("YOU WON! ALL ZOMBIES ARE DEAD!",250, 200);
  }

}


function spawnzombies(){
  if (frameCount % 60 === 0){
    rand= random (0,530)
    zombie = createSprite(100,rand);
    zombie.addAnimation("monster",zombies);
    zombie.velocityX=20;
    zombie.scale = 0.1;
    zombieGroup.add(zombie);
  }
 
}

function spawnzombies1(){
  if (frameCount % 30 === 0){
    rand= random (0,530)
    zombie1 = createSprite(100,rand);
    zombie1.addAnimation("monsters",zombies1);
    zombie1.velocityX=20;
    zombie1.scale = 0.1;
    zombieGroup1.add(zombie1);
  }
}
