// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require('Verifier');
const fs = require('fs');
var proofData = JSON.parse(fs.readFileSync("./test/proof1/proof.json"));
var proofData2 = JSON.parse(fs.readFileSync("./test/proof2.json"));

contract('Verifier', accounts => {

    const account_one = accounts[0];

    describe('test verifier', function () {
        beforeEach(async function () { 
            this.contract = await Verifier.new({from: account_one});
        })
        // Test verification with correct proof
        // - use the contents from proof.json generated from zokrates steps
        it('test verification with correct proof', async function () { 
            let result = await this.contract.verifyTx(proofData.proof.a, proofData.proof.b, proofData.proof.c, proofData.inputs);
            assert.equal(result, true, "Incorrect total supplied tokens.");
        })
            
        // Test verification with incorrect proof
        it('test verification with incorrect proof', async function () { 
            let result = await this.contract.verifyTx(proofData2.proof.a, proofData2.proof.b, proofData2.proof.c, proofData.inputs);
            assert.equal(result, false, "Incorrect total supplied tokens.");
        })
    });
});