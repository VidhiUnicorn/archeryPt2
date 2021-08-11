const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var playerArrow;

var arrow;

function preload(){

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, height - 300, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher( 340, playerBase.body.position.y - 180, 120,120);
   playerArrow = new PlayerArrow (370,playerBase.body.position.y - 180,50,15)

  computerBase = new ComputerBase( width - 300,  height - 300, 180,150 );
  computer = new ComputerPlayer( width - 280,computerBase.body.position.y - 153,50, 180);
  computerArcher = new ComputerArcher(width - 340,  computerBase.body.position.y - 180, 120,120 );
}

function draw() {
 background(170);
  Engine.update(engine);

  fill(255);
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();


  playerArrow.show ();
   loadArrow ();

 
}
 
function loadArrow (){
   if (keyCode === 32){
      playerArrow.shoot(playerArcher.body.angle);
   }
}


