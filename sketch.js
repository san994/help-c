const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var player;

var word = ""

var LEVEL1 = 0,LEVEL2 = 1,LEVEL3 = 2

var LEVEL4 = 3,LEVEL5 = 4,LEVEL = 5

var gameState = LEVEL1

var canvas
function preload(){

    
}

function setup(){
  canvas =  createCanvas(1500,600)  
   engine = Engine.create()
   world = engine.world

   player = new Player(100,300)

   
   keyPressed();
    

}

function draw(){
  background(0);

  Engine.update(engine);

  player.display()

 //camera.x = player.body.position.x
 //camera.y = displayHeight/2

  if(gameState === LEVEL1){
 
   // keyPressed();

    ground = new Ground(1000,500)

      platform = new Platform(200,450,600,300)

      platform2 = new Platform(1000,450,600,300)

      platform3 = new Platform(1500,450,600,500)


   ground.display();
   platform.display()
   platform2.display()

   platform3.display()


   if(player !=null){
    if(player.body.position.x >= 1500){

     gameState = LEVEL2

   }
 }
     

  }else if(gameState === LEVEL2){

   // keyPressed();
  
    ground2 = new Ground(2000,550)

    ground.display()

    player.body.position.x = 450;
    player.body.position.y = 450
  

  }

}

 
  function keyPressed(){

  

  if( keyCode === 37){

     Matter.Body.applyForce(player.body,player.body.position,{x:-60,y:65})

  }

  if( keyCode === 39){

    Matter.Body.applyForce(player.body,player.body.position,{x:60,y:65})

 }

 if( keyCode === 32){

  Matter.Body.applyForce(player.body,player.body.position,{x:60,y:-65})

}



  }
 

