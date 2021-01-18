const Greeter = artifacts.require("Greeter");
const JurStatus = artifacts.require("JurStatus")
const SimpleStorage = artifacts.require("SimpleStorage")
module.exports = function(deployer) {
  deployer.deploy(JurStatus,);
  deployer.deploy(Greeter);
  deployer.deploy(SimpleStorage)
};
