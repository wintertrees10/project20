var car, wall;
var speed, weight;
function setup() {
  createCanvas(1000,400);
  speed= 20;
  weight = random(400,1500);
  car= createSprite(200,200,50,50)
  wall=createSprite(800,200,30,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;
}

function draw() {
  background("blue");  
   
  
if((car.x+car.width)>= wall.x){ 
  
    car.velocityX=0;
  var deformation = 0.5* (weight*speed*speed)/22500
  if(deformation < 100) {
    car.shapeColor=color(0,255,0);
  }
  if(deformation > 100 && deformation <180) {
    car.shapeColor=color(230,230,0);

  }
  if(deformation >180) {
    car.shapeColor=color(255,0,0);

  } 
    
}
  drawSprites();
}