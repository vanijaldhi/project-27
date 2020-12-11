class Chain{
    constructor(bodyA, bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            length: 10,
            stiffness:0.3
        }
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
    }
    display(){
      push();
      strokeWeight(5);
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
      pop()
    }
}