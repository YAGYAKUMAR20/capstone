const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var abox=[];
function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ball1= new Ball(500,200)
    ground = new Ground(600,height,1200,20)

    //box1 = new Box(700,320,70,70);
    for(var i=500;i>=0;i=i-70){
     abox.push(new Box(700,i,70,70)) 
    }


}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   for(var k=0;k<=abox.length;k++){
       abox[k].display();
   } 
   
    ball1.display();
    //ground.display();
    
}