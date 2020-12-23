
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime,score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup(); 
 // console.log(ground.x);
  
  survivalTime=0;
  score = 0;
  
}


function draw() {
background(220);
  stroke("black");
  textSize(20);
  fill("red");
  text("Score:"+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("red");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  ground.x = ground.width/2;
  
  if(keyDown("space") && monkey.y>=260){
    monkey.velocityY=-12;
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score = score+1;
  }
  
  monkey.velocityY = monkey.velocityY+0.8
  
  monkey.collide(ground);
  
  
  food();
  stones();
  
  drawSprites();
}

function food(){
  if(frameCount%100===0){
    banana = createSprite(500,200,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=100;
    banana.y=Math.round(random(180,240));
    FoodGroup.add(banana);
  }
}

function stones(){
  if(frameCount%300===0){
    obstacle = createSprite(500,335,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.11;
    obstacle.velocityX=-5;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
}






