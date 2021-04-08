class Drops {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.1
        }
        this.ball = Bodies.circle(x,y,5,options)
        World.add(world,this.ball)
    }
    display(){
        var pos = this.ball.position
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,10)
      }
      update(){
        if(this.ball.position.y>height){
            Matter.Body.setPosition(this.ball,{x:random(0,500),y:random(0,1000)})
        }
      }
}