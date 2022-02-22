pragma solidity ^0.4.21;

contract GuessTheNewNumber {
   function solve () external payable {
        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now));
        uint n = 
        if (n == answer) {
            msg.sender.transfer(2 ether);
        }
   }

}