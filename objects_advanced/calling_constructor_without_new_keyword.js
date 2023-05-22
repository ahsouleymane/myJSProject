/*
Calling a constructor function without 'new' keyword
Significance of 'new.target'
 */

function AppleDevice(deviceName, deviceOS){
    if (!new.target){
        return `Get an ${deviceName} with ${deviceOS}`
    }
    this.deviceName = deviceName
    this.deviceOS = deviceOS
}

const device1 = AppleDevice("iPhone 13", "iOS 14")
const device2 = new AppleDevice("iPhone 14", "iOS 16")

console.log(device1)
console.log(device2)