class Slingshot {
constructor(bodyA,bodyB){
 var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.04,
    length:10 
 }   
this.Sling = Constraint.create(options)
 World.add(world,this.Sling)
}

display(){
strokeWeight4
line (this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.bodyB.position.x,this.Sling.bodyB.position.y)
}

}