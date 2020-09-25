var car,wall,speed,weight,deformation;


function setup() {

  createCanvas(1600,400);
  wall=createSprite(1500,200,10,50);
  car=createSprite(20, 200, 20, 20);
  speed=random(45,60);
  weight=random(1533,2260);
  deformation=(0.5*weight*Math.pow(speed,2))/22500;
}

function draw() {
  background("black");
  wall.shapeColor="red" ;
  car.shapeColor="white" ;
  car.velocityX=speed;

  if(wall.x-car.x<=(car.width+wall.width)/2)
  {
    car.velocityX=0;


if(deformation<100)
{


car.shapeColor="green";



}
else if(deformation>99 && deformation<+180)
{


  car.shapeColor="yellow";




}
else
{


  car.shapeColor="red";



}



  }
  else
  {


car.velocityX=speed;


  }
  drawSprites();
}