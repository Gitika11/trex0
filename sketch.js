
var trex ,trexImage,ground,trex_running;
function preload(){
  
trexImage=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(45,155,20,10)
trex.addAnimation("ghost",trexImage)
trex.scale=0.9


ground=createSprite(300,190,600,20)

}

function draw(){
  background("lightBlue")
  if(keyDown("space")){
trex.velocityY=-2;
trex.velocityX=0;
  }
trex.velocityY=trex.velocityY+0.6
trex.collide(ground)

drawSprites()

}
