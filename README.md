# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Write Up
## Contract Infomation
* etherscan: https://rinkeby.etherscan.io/token/0x825fd4795b5aF745cc51b86e51ae1E6D01DB80a9
* ABI: [Contract ABI](./scripts/abi.json)
* Verifier contract is used 20210430 version located [zokrates/code/square/20210430](./zokrates/code/square/20210430)

## OpenSea Market
https://testnets.opensea.io/collection/carolinecustomerc721token

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Install Node.js

Install dependencies: ```$ npm install```

Install MataMask

## Installing

A step by step series of examples that tell you how to get a development env running

1. Clone this project
2. Move to project directory, open terminal run ```$ npm install```
3. Implement Zokrates
> Using Docker to install and instantiate a Zokrates zkSnarks development environment. (https://zokrates.github.io/gettingstarted.html#docker)
> Completes the Zokrates proof in square.code by adding the variable names in square.code. (https://zokrates.github.io/gettingstarted.html#hello-zokrates)
> Compile program
> Trusted setup
> Compute witness
> Generate Proof
> Export Verifier.sol
> Note: This project uses solidity version 0.5.2 so you will be required to update the code in Verifier.sol accordingly based on the compiler errors you receive
4. Replace Verifier.sol located in [Contracts](./eth-contracts/contracts)

## Deployment

Using Truffle to deploy Smart Contract on local:
1. Start Truffle development: ```$ truffle develop```
2. Compile: ```$ truffle(develop)> compile```
3. Deploy: ```$ truffle(develop)> migrate```

## Running the tests

Run the automated tests for Smart Contract:
1. Start Truffle development: ```$ truffle develop```
2. Compile: ```$ truffle(develop)> compile```
3. Deploy: ```$ truffle(develop)> migrate``` (default network) or ```$ truffle(develop)> migrate --network {{specific_network_in_truffle_config_network}}```
4. Test: ```$ truffle(develop)> test```

## Run Mint Script on local:
```fullfill config.json```
```$ node scripts/mint.js```

# Project Resources

* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
