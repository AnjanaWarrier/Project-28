class Mango{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.image = loadImage("Sprites/mango.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        var pos = this.body.position;        
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();
      }
}