var trex, trex_running, edges;
var groundImage;
var invisibleGround
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")
}


function setup(){
  createCanvas(600,200);
  
  // creating trex
 trex=createSprite(60,165,10,10)
 trex.addAnimation("running",trex_running)  
 trex.scale=0.5
invisibleGround=createSprite(300,185,1200,5)
invisibleGround.visible=false
 edges=createEdgeSprites()

ground=createSprite(300,180,1200,10)
ground.addImage(groundImage)
}


function draw(){
  //set background color 
  background(180);
  
  if(keyDown("space")){
trex.velocityY=-10

  }
  
trex.velocityY=trex.velocityY+0.8
trex.collide(invisibleGround)
ground.velocityX=-10
if (ground.x<0) {
  ground.x=ground.width/2
}
  drawSprites();
}