
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score =0;

var thor1,,villan5, strombreaker, backiground;
var gunImg,bubbleImg, bulletImg, blastImg, backgroundImg;
var villan5Group, villan4Group, Group;

var life =20;
var score=0;
var gameState=1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



