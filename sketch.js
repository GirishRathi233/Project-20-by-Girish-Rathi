var car, weight;

function setup() {  
  createCanvas(800,400);
  speed = random(55,90)
  weigth = random(400,1500)

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapecolor=color(255);
  createSprite(400, 200, 50, 50);

  wall=createSprite(1500,200,60,height/2);
  wall.shapecolor = color(80,80,80)
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x < car.x < (car.width+wall.width)/2){
    car.setVeloctiyX=0
    var deformation = 0.5 * width * speed * speed/22509;
  }
  if(deformation<180 && deformation>100){
    car.shapecolor(230,230,0);
  }
  if(deformation<100){
    car.shapecolor(0,255,0);
  } 

  drawSprites();
}