var bullet,wall,thickness;
var speed,weight;
function setup() {
  
 var canvas = createCanvas(1600,400);
  
  speed= random (223,321);
  weight= random(30,52);
  thickness=random(22,83);

  bullet = createSprite(400, 200, 50, 20);
  bullet.shapeColor="white"

  wall = createSprite(1500, 200, thickness,200);
  wall.shapeColor="grey"
 
  bullet.velocityX= speed;
}

function draw() {
  background("black"); 
   
    



  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet +lbullet.width;
  wallLeftEdge=lwall;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
  

if(hasCollided(wall,bullet)){

  bullet.velocityX=0;

  var damage=0.5* weight * speed * speed/thickness * thickness * thickness;
  if(damage>10){
    wall.shapeColor=("red")
  }
  if(damage<10){
    wall.shapeColor=("green")
  }
  
}
}
