var iss,spacecraft
var hasDocked=false

function preload(){

  bg=loadImage('Docking-undocking/spacebg.jpg')
  issImg=loadImage('Docking-undocking/iss.png')
  ScImg=loadImage('Docking-undocking/spacecraft1.png')
  Sc1Img=loadImage('Docking-undocking/spacecraft2.png')
  Sc2Img=loadImage('Docking-undocking/spacecraft3.png')
  Sc3Img=loadImage('Docking-undocking/spacecraft4.png')
}
function setup() {
  createCanvas(600,350);
  iss = createSprite(300, 135, 50, 50);
  iss.addImage('iss',issImg)
  iss.scale=0.5

  spacecraft = createSprite(340, 240, 50, 50);
  spacecraft.addImage('Sc',ScImg)
  spacecraft.scale=0.15
}

function draw() {
  background(bg);
  
  if(!hasDocked){
    spacecraft.x+=random(-1,1)
    
    if(keyDown("LEFT_ARROW")){
       spacecraft.x-=1
      spacecraft.addImage('Sc',Sc2Img)
      }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=1
     spacecraft.addImage('Sc',Sc3Img)
     }

    if(keyDown("DOWN_ARROW")){
       spacecraft.addImage('Sc',Sc1Img)
      }

    if(keyDown("UP_ARROW")){
       spacecraft.y-=1
      }
  }

     if(spacecraft.x<=(iss.x-10) && spacecraft.y<=(iss.y+80) ){
       hasDocked=true
       fill('white')
       text('Docking Succesful !!', 100,200)
     }
  drawSprites();
}