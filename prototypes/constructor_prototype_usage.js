/**
 All objects created by a constructor share same prototype
 */

 function Phone(make){
    this.make = make

    /* this.getMake = function(){
        return this.make
    }

    this.switchOn = function(){
        console.log("Device switched On")
    } */
 }

 Phone.prototype.getMake = function(){
    return this.make
}

Phone.prototype.switchOn = function(){
    console.log("Device switched On")
}

 let iPhone = new Phone("Apple")
 let nexus = new Phone("Google")

 console.log(iPhone)
 console.log(iPhone.getMake())
 nexus.switchOn()