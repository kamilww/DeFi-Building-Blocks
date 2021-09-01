const PumpToken = artifacts.require("PumpToken")
const PumpFarm = artifacts.require("PumpFarm")

module.exports = async function (deployer, network, accounts) {
  // Deploy PumpToken
  await deployer.deploy(PumpToken)
  const pumpToken = await PumpToken.deployed()

  //Deploy Farm
  await deployer.deploy(PumpFarm, "0x4e99615101ccbb83a462dc4de2bc1362ef1365e5" , pumpToken.address)
  const pumpFarm = await PumpFarm.deployed()
}