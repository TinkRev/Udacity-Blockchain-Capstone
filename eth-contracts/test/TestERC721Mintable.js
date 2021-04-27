var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const defaultTokenCount = 3;
    const baseURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
            let contractOwner = await this.contract.getOwner();
            console.log(contractOwner);

            // TODO: mint multiple tokens
            await this.contract.mint(account_one,1, baseURI);
            await this.contract.mint(account_one,2, baseURI);
            await this.contract.mint(account_one,3, baseURI);

        })

        it('should return total supply', async function () { 
            let count = await this.contract.totalSupply();
            assert.equal(defaultTokenCount, count, "Incorrect total supplied tokens.");
        })

        it('should get token balance', async function () { 
            let tokenBalance = await this.contract.balanceOf(account_one);
            assert.equal(defaultTokenCount, tokenBalance, "Incorrect balance of tokens.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = baseURI+"1";
            let tokenId = 1; 
            let result = await this.contract.getTokenURI(tokenId);
            assert.equal(result, tokenURI, "Incorrect Token URI.");
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenId = 1; 
            // Declare and Initialize a variable for event
            var eventEmitted = false
            
            // Watch the emitted event Purchased()
            this.contract.Transfer({},function(error, result){
                eventEmitted = true;
            });
            await this.contract.safeTransferFrom(account_one, account_two, tokenId);

            let currentOwner = await this.contract.ownerOf(tokenId);
            assert.equal(eventEmitted, true, "Should trigger Transfer event.");
            assert.equal(currentOwner, account_two, "Transfer toekn failure.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let result = false;
            // ACT
            try {
                await this.contract.mint(account_two,1, baseURI,{from: account_two});
                result = true;
            }
            catch (e) {
                console.log(e);
            }

            assert.equal(result, false, "Should mint token failure.");
        })

        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.getOwner();

            assert.equal(contractOwner, account_one, "Should mint token failure.");
        })

    });
})