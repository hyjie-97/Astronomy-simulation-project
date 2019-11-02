//By Yingjie Huang.

var particles;//Juno
//var pl1;//Mercury
//var pl2;//Venus
var pl3;//Earth
var pl4;//Mars
var pl5;//Sun
var pl6;//Jupiter
var massRatio = 100;

//I also include some other planets in the code, but for the purpose of convinient, I droped them off. But the code is still here.  


function setup() {
  createCanvas(600, 600);
  background(0);
  particles=new Particle(260,324,1,0); //Set the spacecraft near the Earth to simulate the launching from the Earth.

//  pl1 =new Planet(0.39,1/0.241,0,0.0553*massRatio);
//  pl2 =new Planet(0.723,1/0.615,0,0.815*massRatio);
  pl3 =new Planet(1.,1/1.,2.6,1*massRatio);
  pl4= new Planet(1.52,1/1.881,0.25,0.11*massRatio);
  pl5 = new Planet(0,0,0,332946*massRatio);
  pl6 = new Planet(5.203,1/11.862,1,317.8*massRatio/50);

//The arguments of Planet include radius, angular speed, initial angle, and mass.
//Those number are base on the ratio with the Earth's. Most of them are the actual ratio, only the mass of Jupiter decrease 50 times. That is for the purpose of convinient.
}

function draw() {
  background(0);
    push();
    fill(255);
    noStroke();
    textSize(15);
    text('Path of the Juno spacecraft bases on gravity assist.',20,20);
    text('It is not the actual path.',20,40);
    pop();

//The code from above is the part of the explanation about the simulation.
    
//    pl1.update();
//    pl1.show();
//    pl2.update();
//    pl2.show();
    pl3.update();
    pl3.show(51,153,255,51,51,255);
    pl4.update();
    pl4.show(255,128,0,204,102,0);
    pl5.update();
    pl5.show(255,255,0);
    pl6.update();
    pl6.show(255,229,204,255,178,102);
 
    push();
    stroke(140);
    text('Earth',pl3.x-15,pl3.y-15);
    text('Mars',pl4.x-15,pl4.y-15);
    text('Jupiter',pl6.x-15,pl6.y-15);
    text('Sun',pl5.x-15,pl5.y-15);
    pop();
//The name tags of each planet.    
      
//    particles.motion(createVector(pl1.x,pl1.y),pl1.mass);
//    particles.motion(createVector(pl2.x,pl2.y),pl2.mass);
//    particles.motion(createVector(pl3.x,pl3.y),pl3.mass);
    particles.motion(createVector(pl4.x,pl4.y),pl4.mass);
//    particles.motion(createVector(pl5.x,pl5.y),pl5.mass);
    particles.motion(createVector(pl6.x,pl6.y),pl6.mass);
//Only two planets are involving in the interaction. That is because I can't manipulate the force from the Sun and the Earth. Due to the limit of pixel counting, I can only get some kind of approximation about the distance in a certain range. If the spacecraft launch from the same point as the Earth, the distance would be too close which will cause the spacecraft to fly away. That is why I limit the interaction between the Earth. Similarly, the Sun has a large mass compare to other planets, the interaction would be too strong to overcome the effect from others. Also, the actual path of the spacecraft would not depend only on the gavity assist, it would also depend on its own source of power. I eliminated that part to get a path only depend on the gravity assist. Therefore, the path is only a simulation of how to get to the Jupiter.


    particles.update(0.98);
    particles.show(pl6.x,pl6.y);
    stroke(140);
    text('Juno',particles.position.x-15,particles.position.y-15);

}