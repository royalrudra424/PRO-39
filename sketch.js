
var play=1;
var end=2;
var gamestate=play;
var store=3
var me=0
var DT=0
var DDT=0
var hi=0
var jump=0
var coine=3
var ground8
var LocalStorage=["0"]
var hiTime=0
var op1,op2,op3,op4,op5,op6,op7,op8,op9,op10
var aaaaa=1
var sc=0
var ende=4
function preload(){

p1=loadImage("p1.png")
p2=loadImage("p2.png")

  p4=loadImage("p4.png")

    p14=loadImage("p14.png")
  p8=loadImage("p8.png")
  p10=loadImage("p10.png")
  p11=loadImage("p11.png")
   p12=loadImage("p12.png")
     p13=loadImage("p13.png")
  p15=loadImage("p15.png")
coinimg=loadImage("coin.png")
runimg=loadImage("run.png")
op1b=loadImage("op1.png")
op2b=loadImage("op2.png")
op4r=loadImage("op4.png")
op5r=loadImage("op5.png")
op3r=loadImage("op3.png")
op6b=loadAnimation("op61.png","op62.png","op63.png")
rs=loadImage("restart1.png")
ru=loadImage("pesume.png")
    music=loadSound("melodyloops-changes.mp3")
}
function setup() {
createCanvas(displayWidth,displayHeight);
ground8=createSprite(width/2,height/1.25,width+width+width+width,20)
ground1=createSprite(width/2,height-(height/height),width+width,height-(height/1.6))
player1=createSprite(width-(width/1.5),ground8.y-(ground8.height/10),20,20)

player1.scale=0.4
INground2=createSprite(width+(20),ground8.y-(ground8.height/14),width+(50),110)
INground=createSprite(width-(width/1.5),ground8.y-(ground8.height/14),3,3)
ground2=createSprite(width/2,height/1.1,width,10)
ground3=createSprite(width/2,height/1.1,10,(height/5))
ground4=createSprite(width/4,height/1.1,10,(height/5))
ground5=createSprite(width/1.3,height/1.1,10,(height/5))
ground6=createSprite(width/1,height/1.1,10,(height/5))
ground7=createSprite(width/width,height/1.1,10,height/5)
coin=createSprite(width/1.4,height/3,20,20)
coin.addImage(coinimg)
coin.scale=0.055
score=createSprite(width/1.4,height/3.5,20,20)
score.addImage(runimg)
score.scale=0.05
op1=createSprite (width+(20),height*2,200,200)  
op2=createSprite (width+(20),height*5,200,200) 
op3=createSprite (width+(20),height*5,200,200) 
op4=createSprite (width+(20),height*5,200,200) 
op5=createSprite (width+(20),height*5,200,200) 
op6=createSprite (width+(20),height*5,200,200) 
op7=createSprite (width+(20),height*5,200,200) 
op8=createSprite (width+(20),height*5,200,200) 
op9=createSprite (width+(20),height*5,200,200) 
op10=createSprite (width+(20),height*5,200,200) 
op11=createSprite (width+(20),height*2,200,200)  
op12=createSprite (width+(20),height*5,200,200) 
op13=createSprite (width+(20),height*5,200,200) 
op14=createSprite (width+(20),height*5,200,200) 
op15=createSprite (width+(20),height*5,200,200) 
op16=createSprite (width+(20),height*5,200,200) 
op17=createSprite (width+(20),height*5,200,200) 
op18=createSprite (width+(20),height*5,200,200) 
coin1=createSprite (width+(20),height*5,200,200)
INground3=createSprite(width/2,height/2,width,height)
resume=createSprite(width/2,ground8.y-height/4,200,200)
restart=createSprite(width/2,resume.y,200,200) 
coin2=createSprite((width/2)-20,restart.y-35,20,20)
coin2.addImage(coinimg)
music.play()

coin2.scale=0.04
restart.addImage(rs)
resume.addImage(ru)
restart.scale=0.7
resume.scale=0.7

}
function draw() {

  camera.y=player1.y
background(128,0,0)
INground.visible=false
INground3.shapeColor='green'
INground2.visible=false
player1.collide(ground1)
player1.collide(ground8)
INground.collide(ground8)
player1.velocityY=player1.velocityY+0.5
INground.velocityY=INground.velocityY+0.5
INground.collide(ground1)

textSize(17)
fill('yellow')
text(me,score.x+20,score.y+5)
text(coine,coin.x+20,coin.y+5) 
if (gamestate===play){ 
INground3.visible=false
resume.visible=false
restart.visible=false
coin2.visible=false
endlessGround()
me = me + Math.round(getFrameRate()/60);
if (player1.isTouching(INground)&&keyDown("w")){
player1.velocityY=-11      
jump=jump+1
}   
if (player1.isTouching(INground)&&keyDown("space")){
player1.velocityY=-11  
jump=jump+1
}   
if (player1.isTouching(INground)&&keyDown(UP_ARROW)){
player1.velocityY=-11
jump=jump+1
}   
if (player1.isTouching(INground)&&touches.length>0){
player1.velocityY=-11    
jump=jump+1
touches=[]
}    
if (mousePressedOver(INground3)&&player1.isTouching(INground)){
player1.velocityY=-11  
jump=jump+1  
}   
ground1.shapeColor="blue"
ground8.shapeColor="red"
if(frameCount%5===0){
ground2.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%7===0){
ground3.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%9===0){
ground4.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%11===0){
ground5.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%13===0){
ground6.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%15===0){
ground7.shapeColor=(Math.round(random(0,400)))     
}
var A=frameCount%140===0
var B=frameCount%70===0
var   CA=frameCount%3000===0
var CB=frameCount%1500===0
if(Math.round (random(CA,CB))){
coinf() 
}
if (Math.round (random(A,B))){
var selectop=Math.round(random(1,20));
if (selectop===1){
op1f()
}
if (selectop===2){
op2f()  
}
if (selectop===3){
op3f()
}
if (selectop===4){
op4f()
}
if (selectop===5){
op5f() 
}
if (selectop===6){
op6f()
}
if (selectop===7){
 op7f() 
}
if (selectop===8){
op8f()
}
if (selectop===9){
op9f()
}
if (selectop===10){
op10f()
}
if (selectop===11){
op11f()  
}
if (selectop===12){
op12f()   
}
if (selectop===13){
op13f()
}
if (selectop===14){
op14f()
}
if (selectop===15){
op15f() 
}
if (selectop===16){
op16f()
}
if (selectop===17){
 op17f() 
}
if (selectop===18){
op18f()
}  
}  
if (player1.isTouching(op1))  {
 gamestate=end 
}
if (player1.isTouching(op2))  {
 gamestate=end 
}  
if (player1.isTouching(op3))  {
 gamestate=end 
}  
if (player1.isTouching(op4))  {
 gamestate=end 
}  
if (player1.isTouching(op5))  {
 gamestate=end 
}  
if (player1.isTouching(op6))  {
 gamestate=end 
}  
if (player1.isTouching(op7))  {
 gamestate=end 
}  
  
if (player1.isTouching(op8))  {
 gamestate=end 
} 
if (player1.isTouching(op9))  {
 gamestate=end 
}   
if (player1.isTouching(op10))  {
 gamestate=end 
}  
  
if (player1.isTouching(op11))  {
 gamestate=end 
}  
if (player1.isTouching(op12))  {
 gamestate=end 
}   
if (player1.isTouching(op13))  {
 gamestate=end 
}   
if (player1.isTouching(op14))  {
 gamestate=end 
}  
  
if (player1.isTouching(op15))  {
 gamestate=end 
}  
if (player1.isTouching(op16))  {
 gamestate=end 
}  
if (player1.isTouching(op17))  {
 gamestate=end 
}  
if (player1.isTouching(op18))  {
 gamestate=end 
}  
if (player1.isTouching(coin1))  {
coine=coine+1
coin1.lifetime=0
}  
  

  

  
  
  
  
  
  
  


 
    
    
    
    
    
    
    
 
  if (gamestate===end){
    
    op1.lifetime=0
      op2.lifetime=0
      op3.lifetime=0
      op4.lifetime=0
      op5.lifetime=0
      op6.lifetime=0
      op7.lifetime=0
      op8.lifetime=0
      op9.lifetime=0
      op10.lifetime=0
      op11.lifetime=0
      op12.lifetime=0
      op13.lifetime=0
      op14.lifetime=0
      op15.lifetime=0
      op16.lifetime=0
      op17.lifetime=0
      op18.lifetime=0
      coin1.lifetime=0
    coine=coine-1
    gamestate=play
  }
  
  

if (coine===0)  {
  gamestate=ende
  
}
  

  
  
  
  
  
  
  
  
  
  
  
  
  


   if (me > 0 && me % 80 === 0) {
   sc=  Math.round(random(1,12))
   }
  if (sc===0){
      player1.addImage(p1)  
    
    
    
  }

  
  
  
  if (sc===1 ) {
    
  player1.addImage(p1)  
    
    
    
  }
    
    
     if (sc===2)  {
    
  player1.addImage(p2)  
    
    
    
  }
   
   
   if (sc===3)  {
    
  player1.addImage(p4)  
    
    
    
  }
    
  if (sc===4)  {
    
  player1.addImage(p8)  
    
    
    
  }
    
     if (sc===5)  {
    
  player1.addImage(p10)  
    
    
    
  }
    
        if (sc===6)  {
    
  player1.addImage(p11)  
    
    
    
  }  
          if (sc===7)  {
    
  player1.addImage(p12)  
    
    
    
  }  
            if (sc===8)  {
    
  player1.addImage(p13)  
    
    
    
  }  
   if (sc===9)  {
    
  player1.addImage(p15)  
    
    
    
  }  
if (sc===10)  {
    
  player1.addImage(p14)  
    
    
    
  }  
  if (sc===11)  {
    
  player1.addImage(p14)  
    
    
    
  }  
  if (sc===12)  {
    
  player1.addImage(p13)  
    
    
    
  }  
  
}
  
  
  
  
  op1.collide(ground8)
  op2.collide(ground8)
  op3.collide(ground8)
  op4.collide(INground2)
  
  op5.collide(INground2)
  op6.collide(INground2)
  op7.collide(ground8)
  op8.collide(ground8)
  op9.collide(ground8)
  op10.collide(ground8)
  op11.collide(ground8)
  op12.collide(ground8)
  op13.collide(ground8)
  op14.collide(INground2)
  
  op15.collide(INground2)
  op16.collide(INground2)
  op17.collide(ground8)
  op18.collide(ground8)
  coin1.collide(ground8)
  //text(LocalStorage,200,200)
  op18.setCollider('circle',0,0,40)
  op12.setCollider("rectangle",-10,10,165,70)
  op8.setCollider('circle',0,0,40)
  op9.setCollider('circle',0,0,30)
  op10.setCollider('circle',0,0,28)
  op2.setCollider("rectangle",-10,10,165,70)
  
  if (gamestate===ende){

fill('yellow')
textSize(24)

if (LocalStorage<me){
LocalStorage=me
hi=1
  
}

 textSize(24)
if (hi===1){


text("NewHiScore["+LocalStorage+"]",width/2-85,coin2.y)
}
   
    
    
    if (mousePressedOver(restart)||touches.length>0){
         DT=0
         touches=[]
         hi=0
         coine=3
         DDT=0
         me=0
         player1.addImage(p1)
         hiTime=0
         gamestate=play
         restart.visible=false
         //resume.visible=false
       life=1
      op1.lifetime=0
      op2.lifetime=0
      op3.lifetime=0
      op4.lifetime=0
      op5.lifetime=0
      op6.lifetime=0
      op7.lifetime=0
      op8.lifetime=0
      op9.lifetime=0
      op10.lifetime=0
      op11.lifetime=0
      op12.lifetime=0
      op13.lifetime=0
      op14.lifetime=0
      op15.lifetime=0
      op16.lifetime=0
      op17.lifetime=0
      op18.lifetime=0
      coin1.lifetime=0
      op1.velocityX=-4;
       op2.velocityX=-4;
       op3.velocityX=-4;
       op4.velocityX=-4;
       op5.velocityX=-4;
       op6.velocityX=-4;
       op7.velocityX=-4;
       op8.velocityX=-4;
       op9.velocityX=-4;
       op10.velocityX=-4;
     op11.velocityX=-4;
       op12.velocityX=-4;
       op13.velocityX=-4;
       op14.velocityX=-4;
       op15.velocityX=-4;
       op16.velocityX=-4;
       op17.velocityX=-4;
       op18.velocityX=-4;
      
      
      
      
        }
      INground3.visible=false
      ground8.velocityX=-0
ground7.velocityX=-0
  ground6.velocityX=-0
  ground5.velocityX=-0
  ground4.velocityX=-0
  ground3.velocityX=-0
    ground2.velocityX=-0
   
   op1.velocityX=-0;
       op2.velocityX=-0;
       op3.velocityX=-0;
       op4.velocityX=-0;
       op5.velocityX=-0;
       op6.velocityX=-0;
       op7.velocityX=-0;
       op8.velocityX=-0;
       op9.velocityX=-0;
       op10.velocityX=-0;
     op11.velocityX=-0;
       op12.velocityX=-0;
       op13.velocityX=-0;
       op14.velocityX=-0;
       op15.velocityX=-0;
       op16.velocityX=-0;
       op17.velocityX=-0;
       op18.velocityX=-0;
 coin1.velocityX=-0;
    
    resume.visible=true
    restart.visible=true
    
    
    
    
    
    
    player1.velocityY=-0;
    
    
      }
  
   if (op4.x<0){
  
  
  op4.lifetime=0
}
 if (op14.x<0){
  
  
  op14.lifetime=0
}
   
  if (coin1.x<0){
  
  
  coin1.lifetime=0
}
  
  if (op1.x<0){
  
  
  op1.lifetime=0
}
 
if (op2.x<0){
  
  
  op2.lifetime=0
}
 if (op3.x<0){
  
  
  op3.lifetime=0
}
 if (op5.x<0){
  
  
  op5.lifetime=0
}
 if (op6.x<0){
  
  
  op6.lifetime=0
}
  
  if (op7.x<0){
  
  
  op7.lifetime=0
}
 if (op8.x<0){
  
  
  op8.lifetime=0
}
 if (op9.x<0){
  
  
  op9.lifetime=0
}
  if (op10.x<0){
  
  
  op10.lifetime=0
}
 
 
   if (op11.x<0){
  
  
  op11.lifetime=0
}
 
if (op12.x<0){
  
  
  op12.lifetime=0
}
 if (op13.x<0){
  
  
  op13.lifetime=0
}
 if (op15.x<0){
  
  
  op15.lifetime=0
}
 if (op16.x<0){
  
  
  op16.lifetime=0
}
  
  if (op17.x<0){
  
  
  op17.lifetime=0
}
 if (op18.x<0){
  
  
  op18.lifetime=0
} 
 

    coin1.scale=0.09
  
drawSprites()  
}



function endlessGround(){
 
  ground8.velocityX=-8
ground7.velocityX=-8
  ground6.velocityX=-8
  ground5.velocityX=-8
  ground4.velocityX=-8
  ground3.velocityX=-8
    ground2.velocityX=-8
   
    
  
  if (ground8.x < -200) {
           ground8.x = ground8.width /2;

    

  }

  if (ground2.x < -10) {
           ground2.x = ground2.width /2;

    

  }

  

  
  if (ground4.x < -10) {
  ground4.x = ground2.width /2;
  }
    
 if (ground3.x < -10) {
  ground3.x = ground2.width /2;
  }
  
coin1.scale=0.05;  
  
  
  


  }
function op1f(){
op1=createSprite (width+(20),20,200,200) 
op1.velocityX=-(4 + me/250);
op1.y=height/1.30
op1.addImage(op1b)
op1.scale=0.5;  
op1.lifetime=-1



}

function op2f(){
  
op2=createSprite (width+(20),20,200,200) 
op2.velocityX=-(4 + me/250); 
op2.y=height/1.30
op2.addImage(op2b)
op2.scale=0.5;    

op2.lifetime=-1
  


  
  
  
}


function op3f(){

op3=createSprite (width+(20),20,200,200) 
op3.velocityX=-(4 + me/250);
op3.y=height/1.33
op3.addImage(op3r)
op3.scale=0.35;
  
op3.lifetime=-1
}


  
function op4f(){
op4=createSprite (width+(20),20,200,200) 
op4.velocityX=-(4 + me/250);
op4.y=height/1.40
op4.addImage(op4r)
op4.scale=0.35;
    op4.lifetime=-1

  
  
}


function op5f (){
op5=createSprite (width+(20),20,200,200) 
op5.velocityX=-(4 + me/250); 
op5.y=height/1.40
op5.addImage(op4r)
op5.scale=0.35;
op5.lifetime=-1

}

function op6f(){
  
op6=createSprite (width+(20),20,200,200) 
op6.velocityX=-(4 + me/250); 
op6.y=height/1.40
op6.addImage(op5r)
op6.scale=0.35;
 op6.lifetime=-1
  
}
   



function op7f(){
op7=createSprite (width+(20),20,200,200) 
op7.velocityX=-(4 + me/250); 
op7.y=height/1.33
op7.addImage(op5r)
op7.scale=0.35;
op7.lifetime=-1  





}

function op8f(){
op8=createSprite (width+(20),20,200,200) 
op8.velocityX=-(4 + me/250);
op8.y=height/1.33
op8.addAnimation("fff",op6b)
op8.scale=0.7;
op8.lifetime=-1  





}

function op9f(){
op9=createSprite (width+(20),20,200,200) 
op9.velocityX=-(4 + me/250);
op9.y=height/1.33
op9.addAnimation("fff",op6b)
op9.scale=0.5;
 op9.lifetime=-1





}


function op10f(){
op10=createSprite (width+(20),20,200,200) 
op10.velocityX=-(4 + me/250);
op10.y=height/1.33
op10.addAnimation("fff",op6b)
op10.scale=0.3;
  
op10.lifetime=-1




}


function op11f(){
op11=createSprite (width+(20),20,200,200) 
op11.velocityX=-(4 + me/250); 
op11.y=height/1.30
op11.addImage(op1b)
op11.scale=0.5;  
op11.lifetime=-1
  

}

function op12f(){
  
op12=createSprite (width+(20),20,200,200) 
op12.velocityX=-(4 + me/250);
op12.y=height/1.30
op12.addImage(op2b)
op12.scale=0.5;    

op12.lifetime=-1
  


  
  
  
}


function op13f(){

op13=createSprite (width+(20),20,200,200) 
op13.velocityX=-(4 + me/250);
op13.y=height/1.33
op13.addImage(op3r)
op13.scale=0.35;
  
op13.lifetime=-1
}


  
function op14f(){
op14=createSprite (width+(20),20,200,200) 
op14.velocityX=-(4 + me/250); 
op14.y=height/1.40
op14.addImage(op4r)
op14.scale=0.35;
    op4.lifetime=-1

  
  
}


function op15f (){
op15=createSprite (width+(20),20,200,200) 
op15.velocityX=-(4 + me/250);
op15.y=height/1.40
op15.addImage(op4r)
op15.scale=0.35;
op15.lifetime=-1

}

function op16f(){
  
op16=createSprite (width+(20),20,200,200) 
op16.velocityX=-(4 + me/250);
op16.y=height/1.40
op16.addImage(op5r)
op16.scale=0.35;
 op16.lifetime=-1
  
}
   



function op17f(){
op17=createSprite (width+(20),20,200,200) 
op17.velocityX=-(4 + me/250); 
op17.y=height/1.33
op17.addImage(op5r)
op17.scale=0.35;
op17.lifetime=-1  





}

function op18f(){
op18=createSprite (width+(20),20,200,200) 
op18.velocityX=-(4 + me/250);
op18.y=height/1.33
op18.addAnimation("fff",op6b)
op18.scale=0.7;
op18.lifetime=-1  





}

function coinf(){
  
  coin1=createSprite (width+(20),20,200,200) 
coin1.velocityX=-(4 + me/250);
coin1.y=height/1.33
coin1.addImage(coinimg)
coin1.scale=0.05;
coin1.lifetime=-1  

  
  
  
  
}

  



