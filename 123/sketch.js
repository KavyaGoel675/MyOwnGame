var background1,background2;
var base;
var player;
var platform1,platform2,platform3,platform4,platform5,platform6,platform7;

var b1,b2;
var heading;
var play;
var instruction;
var inst;
var next;
var gameState=0;
function preload(){

background1Img=loadImage("background/1.png");
background2Img=loadImage("background/2.png");
baseImg=loadImage("base.png");
playerImg=loadImage("player/1.png");

p1Img=loadImage("platform/1.png");
p2Img=loadImage("platform/2.png");
p3Img=loadImage("platform/3.png");
p4Img=loadImage("platform/4.png");
p5Img=loadImage("platform/5.png"); 
p6Img=loadImage("platform/6.png");

headingImg=loadImage("heading.png");
playImg=loadImage("play.png");
instImg=loadImage("instruction.png");
instimg=loadImage("inst.png");
nextImg=loadImage("next.png");
}



function setup(){

createCanvas(800,400);
heading=createSprite(400,80);
heading.addImage(headingImg);

play=createSprite(400,240);
play.addImage(playImg);

instruction=createSprite(400,300);
instruction.addImage(instImg);

inst=createSprite(400,160);
inst.addImage(instimg);
inst.scale=0.5;
inst.visible=false;

next=createSprite(700,350);
next.addImage(nextImg);
next.scale=0.6;
next.visible=false;
}



function draw(){
background(background1Img);

if(mousePressedOver(play)){
  mousePress();
}

if(mousePressedOver(instruction)){
  mousePress();
  inst.visible=true;
  next.visible=true;
  
}
if(mousePressedOver(next)){
  next.visible=false;
  inst.visible=false;
  all();
  movement();
}
  //movement();
  drawSprites();
}

function movement(){
  if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+3;
    base.x=base.x-1;
    platform1.x=platform1.x-1;
    platform2.x=platform2.x-1;
    platform3.x=platform3.x-1;
    platform4.x=platform4.x-1;
    platform5.x=platform5.x-1;
    platform6.x=platform6.x-1;

    b1.x=b1.x-1;
    b2.x=b2.x-1;
  }

  if(keyIsDown(LEFT_ARROW)){
    player.x=player.x-3;
    base.x=base.x+1;
    platform1.x=platform1.x+1;
    platform2.x=platform2.x+1;
    platform3.x=platform3.x+1;
    platform4.x=platform4.x+1;
    platform5.x=platform5.x+1;
    platform6.x=platform6.x+1;
    b1.x=b1.x+1;
    b2.x=b2.x+1;
  }

  if(keyDown("space")) {
    player.velocityY = -12;
}

player.velocityY = player.velocityY + 0.8;

player.collide(base);
player.collide(platform1);
player.collide(platform2);
player.collide(platform4);
player.collide(platform5);
player.collide(platform6);
player.setCollider("rectangle",-20,20,40,50);


createEdgeSprites();
if(platform3.bounceOff(b1)){
  platform3.velocityX=2;
}

if(platform3.bounceOff(b2)){
  platform3.velocityX=-2;
}

if(player.collide(platform3)){
  player.x=platform3.x;
}
}
function all(){
  background1=createSprite(400, 200, 50, 50);
background1.addImage("img",background2Img);
background1.scale=0.6;

base=createSprite(210, 370);
base.addImage("img",baseImg);
base.scale=1.6;

player=createSprite(100,245);
player.addImage(playerImg);
player.scale=1.9;

platform1=createSprite(560,370);
platform1.addImage(p1Img);
platform1.scale=0.75;

platform2=createSprite(710,260);
platform2.addImage(p3Img);
platform2.scale=0.75;

platform3=createSprite(830,180);
platform3.addImage(p4Img);
platform3.scale=0.75;

platform4=createSprite(1150,280);
platform4.addImage(p4Img);
platform4.scale=0.75;

platform5=createSprite(1250,340);
platform5.addImage(p4Img);
platform5.scale=0.75;

platform6=createSprite(1360,410);
platform6.addImage(p4Img);
platform6.scale=0.75;

b1=createSprite(782,180,20,20);
b1.visible=false;

b2=createSprite(1082,180,20,20);
b2.visible=false;


}

function mousePress(){
  heading.visible=false;
  play.visible=false;
  instruction.visible=false;
}