pragma solidity ^0.4.21;

contract GuessTheNewNumber {
   function solve () external payable {
       // proxy contract
       // connect to newNum challenge contract to run the contract to find answer then submit answer 
        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now));
        uint8 n; // int to be found as answer
        if (n == answer) {
            msg.sender.transfer(2 ether);
        }
   }

}