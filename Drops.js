class createDrops {
    constructor (x,y){
        var options = {
            isStatic: true,
            friction: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options)
    }

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})

        }

    }
    display(){

        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,10,10)
    }
}