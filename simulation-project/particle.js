function Particle(x,y,vx,vy,mass=0){
    this.position=createVector(x,y);
    this.velocity=createVector(vx,vy);
    this.acceleration=createVector();
    this.mass=mass;
    this.d1=0;
    
    this.update=function(dtime){
        this.position.add(this.velocity.mult(dtime).mult(.5));
        this.velocity.add(this.acceleration.mult(dtime));
        
    //These are the motion equation. I add a factor of 0.5 to the velocity term to lower the effect of changing position. That is for slowing down the motion to get a better view of the path.
        
        
    }
    
    this.show=function(otherX,otherY){
           fill(255);

       if (this.d1<20){
           push();
           stroke(255,0,200);
           strokeWeight(8);
           this.position=createVector(otherX,otherY);
           point(otherX,otherY);
           pop();
           push(); 
           fill('gold');
           stroke('gold');
           textSize(16);
           text('Land!!!',this.position.x-20,this.position.y-40);
           pop();
//This if statement is for displaying the fact that the spacecraft reach to its destiny. If I do not add this term, the particle will fly away. "Land!!!" does not mean the spacecraft land on the Jupiter, but to the orbit around the Jupiter.
       }else{
           push();
           stroke(255,0,200);
           strokeWeight(8);
           point(this.position.x,this.position.y);
           pop();
           push();
           fill(204,0,204);
           stroke(204,0,204);
           textSize(16);
           text('Launch!!!',this.position.x-30,this.position.y-30);
           pop();
//This is the maojor path the spacecraft will follow.

       }
    }
    
    this.motion=function(otherPosition,otherMass){
        var d=p5.Vector.sub(otherPosition, this.position);
        this.d1=d.mag();
        var d2=d.magSq();
        var G=1;
        var magnitude=G *otherMass / d2;
        d.setMag(magnitude);
        
        this.acceleration.add(d);
//This is the key point of the whole system, which is the creating a gravity system. I use Newton's law of gravity to get the acceleration of the particle due to other mass. By doing this, I need an argument of other mass, which I posed in the sketch.
    }
    
}