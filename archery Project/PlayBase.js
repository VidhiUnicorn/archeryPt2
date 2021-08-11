class PlayerBase {


    constructor (x,y,width,height){

        var options = {
            isStatic : true,
        }

        this.body = Bodies.rectangle (x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/base1.png");

        World.add (world,this.body);

    }

    display (){

        var position = this.body.position;
        var angle = this.body.position;

        push ();

        translate (position.x,position.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image,0,0,this.width,this.height);

        pop (); 



    }

}