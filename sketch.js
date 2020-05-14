var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,100,50,70);
  fixedRect = createSprite(200,350,70,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "red";
  movingRect.velocityY = 3;
  fixedRect.velocityY = -3;
}


function draw() {
  background(255,255,255); 
 // movingRect.x = mouseX;
  //movingRect.y = mouseY; 
  if(movingRect.x - fixedRect.x <fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2 ){
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }
    if(movingRect.y - fixedRect.y <fixedRect.height/2 + movingRect.height/2 &&
      fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2  ){
        movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
      }
  drawSprites();
}
function isTouching(){
  if(movingRect.x - fixedRect.x <fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y <fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2  ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";   
  }
}