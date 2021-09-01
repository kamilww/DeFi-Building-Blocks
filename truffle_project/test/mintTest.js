const PumpToken = artifacts.require("PumpToken")
const PumpFarm = artifacts.require("PumpFarm")

module.exports = async function (callback) {
    pumpToken = await PumpToken.deployed()
    await pumpToken.mint("0x27D20d1F2c257f58DFeDdFf4bAE9928f5191C4Bb", 1000000000000000)
    balance = await pumpToken.balanceOf("0x27D20d1F2c257f58DFeDdFf4bAE9928f5191C4Bb")
    console.log(balance.words[0])
    callback()
}