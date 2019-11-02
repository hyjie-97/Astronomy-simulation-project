function Planet(radius,speed,angle=0,mass=0){
    this.angle=angle;
    this.speed=map(speed,0,3,0,0.19);
    this.radius=map(radius,0,6.5,0,width/2);
    this.centerX=width/2;
    this.centerY=height/2;
    this.x=0;
    this.y=0;
    this.mass=mass;
    
    this.update=function(){
        this.x=this.centerX+this.radius*cos(this.angle);
        this.y=this.centerY+this.radius*sin(this.angle);
        this.angle=this.angle-this.speed;
//I don't need to calculate the effect of the planet due to the gravity, because it is neglagible compare to their orbitting motion. Therefore, I only consider the orbital motion of the planets.
    }
    
    this.show=function(r,g,b,r2,g2,b2){
        push(); 
        stroke(r2,g2,b2);
        strokeWeight(1);
        fill(0,0,0,0);
        ellipse(width/2,height/2,this.radius*2);
        pop();       
        push();
        stroke(r,g,b);
        strokeWeight(8);
        point(this.x,this.y);
        pop();
    }

}