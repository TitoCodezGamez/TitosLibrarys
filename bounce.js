var movingRect, fixedRect;
function setup() {
  createCanvas(600,600);
  movingRect = createSprite(100, 200, 50, 50);
  fixedRect = createSprite(500,200, 60,70);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor= "green";

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
  movingRect.velocityY = 5;
  fixedRect.velocityY = -5;
  
}

function draw() {
  background(0);  
 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

  console.log(fixedRect.width/2 + movingRect.width/2);
  console.log(movingRect.x - fixedRect.x);

 /* if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){

    movingRect.shapeColor= "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor= "green";
  }*/

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityX = -movingRect.velocityX;
        fixedRect.velocityX = -fixedRect.velocityX; 
  }

  if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
       movingRect.velocityY = -movingRect.velocityY;
       fixedRect.velocityY = -fixedRect.velocityY; 
 }
  
  drawSprites();
}

