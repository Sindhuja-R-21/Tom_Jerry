
var cat, mouse, garden;

var catImg1, catImg2, catImg3, catImg4, mouseImg1, mouseImg2, mouseImg3, mouseImg4, gardenImg;

function preload() {
   //load the images here
  catImg1 = loadImage("images/cat1.png");
  catImg2 = loadImage("images/cat2.png");
  catImg3 = loadImage("images/cat3.png");
  catImg4 = loadImage("images/cat4.png");
  

  mouseImg1 = loadImage("images/mouse1.png");
  mouseImg2 = loadImage("images/mouse2.png");
  mouseImg3 = loadImage("images/mouse3.png");
  mouseImg4 = loadImage("images/mouse4.png");

  gardenImg = loadImage("images/garden.png");
  
 

}

function setup(){
   createCanvas(1000,800);
   //create tom and jerry sprites here
   garden = createSprite(500,400,500,500);
   garden.addImage("gardenImage", gardenImg);

   cat = createSprite(700,588,50,80);
   cat.addImage("catImage", catImg1);
   cat.scale = 0.15;

   mouse = createSprite(150,600,20,20);
   mouse.addImage("mouseImage", mouseImg1);
   mouse.scale = 0.1;
 
 

}

function draw() {

   background(225);

   text(mouseX + ',' + mouseY,10, 45);

   keyPressed();

   //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      

       cat.addAnimation("catLastImage",catImg4);
       cat.changeAnimation("catLastImage");
       cat.velocityX = 0;

       mouse.addAnimation("mouseLastImage",mouseImg4);
       mouse.changeAnimation("mouseLastImage");
    }

   drawSprites();
}

function keyPressed(){
  
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2, catImg3);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseRunning", mouseImg2, mouseImg3);
        mouse.changeAnimation("mouseRunning");

    }
}