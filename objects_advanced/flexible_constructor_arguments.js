/*
Flexible constructor arguments
 */

function AppleDevice(deviceName, deviceOS, display){
    this.deviceName = deviceName
    this.deviceOS = deviceOS
    this.display = display
    console.log(`${deviceName} with ${deviceOS}`)
}

const device1 = new AppleDevice()
device1.deviceName = "iPhone 14"

console.log(device1)
