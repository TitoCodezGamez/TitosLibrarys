var movingRect, fixedRect;
var o1, o2,o3,o4;
function setup() {
  createCanvas(800,600);
  movingRect = createSprite(100, 200, 50, 50);
  fixedRect = createSprite(200,200, 60,70);

  o1 = createSprite(100,100,50, 60);
  o2 = createSprite(300,100,60,50);
  o3 = createSprite(500,100,50,60);
  o4 = createSprite(700,100,60,50);

  o1.shapeColor = "blue";
  o2.shapeColor = "pink";
  o3.shapeColor = "orange";
  o4.shapeColor = "yellow";

  o1.velocityX = 2;
  o4.velocityX = -4;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor= "green";

  movingRect.debug = true;
  fixedRect.debug = true;
  
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(fixedRect.width/2 + movingRect.width/2);
  //console.log(movingRect.x - fixedRect.x);

  if(touching(movingRect, fixedRect)){
    fixedRect.x = random(50,550);
    fixedRect.y = random(50,550);
  }
  else{
    console.log("Moving rect is not touching FixedRect");
  }

  if(touching(movingRect, o3)){
    o3.shapeColor = "red";
  }
  else{
    o3.shapeColor = "orange";
}

  bounce(o1,o4);
  
  drawSprites();
}

function touching(object1, object2){

  if(object1.x - object2.x <= object2.width/2 + object1.width/2 &&
    object2.x - object1.x <= object2.width/2 + object1.width/2 && 
    object2.y - object1.y <= object2.height/2 + object1.height/2 &&
    object1.y - object2.y <= object2.height/2 + object1.height/2){

    return true;

  }
  else{
    return false;
  }

}

function bounce(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
     object2.x - object1.x <= object1.width/2 + object2.width/2){
      object1.velocityX = -object2.velocityX;
      object2.velocityX = -object1.velocityX;
     }

  if(object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2 ){
      object1.velocityY = -object1.velocityY;
      object2.velocityY = -object2.velocityY;
    }

}
