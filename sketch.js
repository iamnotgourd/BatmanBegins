const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
    walk = loadImage("Walking Frame/walking_1.png")
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(500,1000)
   engine = Engine.create();
   world = engine.world;
    umbrella = new Umbrella(215,535,100) 
    drops = []
    for(var a = 0;a<100;a++){
        drops.push(new Drops(random(0,500),random(0,1000)))
    }
}

function draw(){
    background("black")
    Engine.update(engine);
    rand = Math.round(random(1,4))
    if (frameCount%60 === 0){

        thunder = createSprite(random(50,450),0)
        switch(rand){
            case 1:thunder.addImage(thunder1)
            break;
            case 2:thunder.addImage(thunder2)
            break;
            case 3:thunder.addImage(thunder3)
            break;
            case 4:thunder.addImage(thunder4)
            break;
        }
        thunder.lifetime = Math.round(random(14,15))
    }
       image(walk,0,390,400,400)
    for(var i = 0;i<drops.length;i++){
        drops[i].display()
        drops[i].update()
    }
    drawSprites()
}   

