class Box{
    constructor(x, y, width, height, angle) {
        var options = {
           istatic : "true"
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
        
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y);
        
        pop();
      }
    }