//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
contract Create {
    using Counters for Counters.Counters;
    Counters.Counter public _voterIds;
    Counters.Counter public _candidateIds;
    address public votingOrganizer;

    struct Candidate {
        uint256 candidateId;
        string age;
        string name;
        string image;
        uint256 voteCount;
        address _address;
        string ipfs;
    }
event CandidateCreate(
    uint256 indexed candidateId;
        string age;
        string name;
        string image;
        uint256 voteCount;
        address _address;
        string ipfs;
)
address[] public candidateAddress;
mapping(address => candidate) public candidates;


address[] public votedVoters;
mapping(address => voter) public voters;

string Voter {
    unint256 voter_voterId;
    string voter_name;
    string voter_image;
     string voter_address;
}

}
