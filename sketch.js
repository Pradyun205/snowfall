var snow
var snowflake
var snowfall1,snowfall2,snowfall3,snowfall4,snowfall5,snowfall6

function preload(){

  snow=loadImage("snow2.jpg")
  snowflake=loadAnimation("Snow7.png","snow25.png")
  
  
  }

  function setup() {
  createCanvas(800,400);
  
snowfall1=createSprite(500,300,20,20)
snowfall1.addAnimation("snow",snowflake)
  snowfall1.scale=0.2

  snowfall2=createSprite(600,200,20,20)
snowfall2.addAnimation("snow",snowflake)
  snowfall2.scale=0.2

  snowfall3=createSprite(800,400,20,20)
snowfall3.addAnimation("snow",snowflake)
  snowfall3.scale=0.2

  snowfall4=createSprite(100,400,20,20)
snowfall4.addAnimation("snow",snowflake)
  snowfall4.scale=0.2

  snowfall5=createSprite(300,400,20,20)
snowfall5.addAnimation("snow",snowflake)
  snowfall5.scale=0.2

  snowfall6=createSprite(100,200,20,20)
snowfall6.addAnimation("snow",snowflake)
  snowfall6.scale=0.2
}




function draw() {

  background(snow)
  



  drawSprites();
}