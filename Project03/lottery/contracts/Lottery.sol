pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    address public lastWinner;
    
    constructor() public {
        manager = msg.sender;
    }
    function enter() public payable {
        require(msg.value > .01 ether);
        
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players))) % players.length;
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address [](0);
        lastWinner = players[index];
        lastWinner = msg.sender;
    }
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
}
