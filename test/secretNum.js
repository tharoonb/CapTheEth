
const { ethers } = require ("hardhat");


console.log("yes");
let hsh= "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365";

   for(let i =0; i<256; i++){
      if(hsh.includes(ethers.utils.keccak256([i]))){
        console.log(i);
      }
   }
let blc = 11981240;
console.log(ethers.utils.(keccak256(block.blockhash(blc - 1), now)))