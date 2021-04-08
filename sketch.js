const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;
var walkingPersonimg , walkingPerson;
var snowfallimg,snowfall;

function preload(){
bg = loadImage("snow3.jpg")
walkingPersonimg = loadImage("walkingsnow.jpg")
snowfallimg = loadImage("snow4.webp");
}


function setup() {
  createCanvas(1200,800);
  
  
  for (var i = 0; i < 20; i++) {
    snowfall =createSprite(random(100,1100), random(100,200), 50, 50 );
    snowfall.isstatic = false;
    snowfall.addImage(snowfallimg);
    snowfall.scale = 0.15;
  }
  

  
  
}



function draw() {
  background(bg);  
 
 
 
  drawSprites();
}