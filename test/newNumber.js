const { ContractFactory, ethers } = require("hardhat");
const hre = require("hardhat");

async function main(){
    const num = await hre.ethers.getContractFactory("newNum");
    const newNum = await num.deploy();
    await newNum.deployed();
    console.log(newNum.address);

}