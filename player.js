class Player{

    constructor(x,y){
  
      var options={
  
         isStatic : false,
         density : 1.5,
         friction : 0,
         restitution : 0.02
  
      }
  
      this.body = Bodies.circle(x,y,20,options)
      this.width = 20
      this.height =  20
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      ellipseMode(RADIUS)
      fill("lightBlue")
      ellipse(pos.x,pos.y,this.width,this.height);
      pop()
  
   }
  
  
  }