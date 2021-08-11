class PlayerArrow {
    constructor (x,y,width,height){

        var props = {
            isStatic : true
        }

        this.playerArrow  = Bodies.rectangle(x,y,width,height,props)
        this.width = width;
        this.height = height;

        World.add (world,this.playerArrow);

        this.image = loadImage ("assets/arrow.png");

    
    
    }

    shoot (archerAngle){
        var velocity = p5.Vector.fromAngle(archerAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.playerArrow,false);
        Matter.Body.setVelocity(this.playerArrow,{x : velocity.x,y:velocity.y})
    }




    show (){
        push();
      translate(this.playerArrow.position.x, this.playerArrow.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}