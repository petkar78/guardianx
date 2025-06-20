// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GuardianX {
    event SOSAlert(address indexed sender, string message);

    function sendSOS(string memory message) public {
        emit SOSAlert(mag.sender, message);
    }
}
