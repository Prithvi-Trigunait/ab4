class Slingshot{
    constructor(p,t){
        var options = {
            bodyA: p,
            pointB:t,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=t;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA=null
    }
    
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
   
    
        
    
    
}