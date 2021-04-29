// migrating the appropriate contracts
// var ERC721MintableComplete = artifacts.require('CustomERC721Token');
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  // deployer.deploy(ERC721MintableComplete);
  deployer.deploy(SquareVerifier).then(() =>{
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
  });
  ;
};
