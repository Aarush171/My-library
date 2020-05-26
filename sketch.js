var fixedRect, movingRect; 

function setup() {
  createCanvas(1200,800); 

  fixedRect = createSprite(200, 200, 50, 80); 
  fixedRect.shapeColor = "green";
  fixedRect.debug = true; 
  fixedRect.velocityY = 4;

  movingRect =createSprite(200,400,80,30); 
  movingRect.debug = true;
  movingRect.velocityY = -4;
} 

function draw() { 
  background(0);

  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX; 
  bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites(); 
}
