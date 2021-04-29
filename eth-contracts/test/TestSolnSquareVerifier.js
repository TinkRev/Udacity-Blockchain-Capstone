var Verifier = artifacts.require('Verifier');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const fs = require('fs');

contract('ERCContractWithVerifier', accounts => {

    const account_one = accounts[0];

    describe('test contract with verifier', function () {
        beforeEach(async function () { 
            this.verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(this.verifier.address, {from: account_one});
            
            this.proofData = JSON.parse(fs.readFileSync("./test/proof.json"));
        })

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('test add solution', async function () { 
            // Declare and Initialize a variable for event
            var eventEmitted = false
            
            // Watch the emitted event Purchased()
            this.contract.SolutionAdded({},function(error, result){
                eventEmitted = true;
            });
            await this.contract.addSolution(1, this.proofData.proof.a, this.proofData.proof.b, this.proofData.proof.c, this.proofData.inputs);

            assert.equal(eventEmitted, true, "Should trigger Transfer event.");

        })
            
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('test verification with incorrect proof', async function () { 
            let result = false;
            try {
                result = await this.contract.mintNFT(1, this.proofData.proof.a, this.proofData.proof.b, this.proofData.proof.c, this.proofData.inputs, {from: account_one, gas: 8500000});
            
            } catch (error) {
                result = false;
            }
             
            assert.equal(result, false, "Should Mint NFT failuare.");
        })
    });
    

    
})