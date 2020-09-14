class Bob{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'density':0.3,
            'friction':0.5,
            'restitution':1.2
        }
        this.x=x
        this.y=y
        this.r=70
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);    
    }
    display(){
	
    var paperpos=this.body.position;		
    this.image = loadImage("sprites/paper.png");
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
    pop()

    }
}