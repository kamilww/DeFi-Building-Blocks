const PumpToken = artifacts.require("PumpToken")
const PumpFarm = artifacts.require("PumpFarm")

module.exports = async function (callback) {
    pumpToken = await PumpToken.deployed()
    balance = await pumpToken.balanceOf("0x27D20d1F2c257f58DFeDdFf4bAE9928f5191C4Bb")
    console.log("This address has a balance of: " + balance.words[0])
    transfer = pumpToken.transfer("0xD6Afe72f4b5d75D425D1F659Ba5e144747278D0a", 100000000000000)
    balance2 = await pumpToken.balanceOf("0xD6Afe72f4b5d75D425D1F659Ba5e144747278D0a")
    console.log("The reciever address has a balance of: " + balance2.words[0])
    callback()
}