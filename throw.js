class Throw {
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.01,
            length:10
        }
this.pointB=pointB;
this.throw = constraint.create(optons);
Worls.add(world,this.throw);
    }
fly(){
    this.throw.bodyA=null;
}

Launch(bodyA){
    this.throw.bodyA=bodyA;
}
display()

}