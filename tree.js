class Tree {
    constructor(){

        var options = {
            isStatic : true
        }

        this.image = loadImage("tree.png");
      //  this.body = Bodies.rectangle(700,200,10,10,options);
        World.add(world,this.image);
    }

    display(){
        image(this.image,700,20);
       // push()
        //translate(pos.x,pos.y);
        //imageMode(CENTER);
        //image(this.image,0,0);
        //pop()
    }
}