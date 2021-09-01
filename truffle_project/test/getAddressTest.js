const PumpToken = artifacts.require("PumpToken")
const PumpFarm = artifacts.require("PumpFarm")

module.exports = async function (callback) {
  pumpToken = await PumpToken.deployed()
  pumpFarm = await PumpFarm.deployed()
  tokenAddress = await pumpToken.address
  farmAddress = await pumpFarm.address
  console.log("Token Contract:" + tokenAddress)
  console.log("Farm Contract:" + farmAddress)
  callback()
}