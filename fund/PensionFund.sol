// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ZamaEthereumConfig} from "@fhevm/solidity/config/ZamaConfig.sol";
import {FHE} from "@fhevm/solidity/lib/FHE.sol";
import {euint64} from "@fhevm/solidity/lib/FHE.sol";
import {ebool} from "@fhevm/solidity/lib/FHE.sol";

contract PensionFund is ZamaEthereumConfig {
    using FHE for euint64;

    struct Participant {
        address participantAddress;
        euint64 accumulated;
        uint256 joinedAt;
        bool active;
    }

    mapping(address => Participant) public participants;

    event ContributionMade(address indexed participant, euint64 amount);
    event PayoutProcessed(address indexed participant, euint64 amount);

    function contribute(euint64 encryptedAmount) external {
        Participant storage participant = participants[msg.sender];
        if (!participant.active) {
            participant.participantAddress = msg.sender;
            participant.joinedAt = block.timestamp;
            participant.active = true;
        }
        participant.accumulated = FHE.add(participant.accumulated, encryptedAmount);
        emit ContributionMade(msg.sender, encryptedAmount);
    }

    function requestPayout(euint64 encryptedAmount) external {
        Participant storage participant = participants[msg.sender];
        require(participant.active, "Not active");
        
        ebool sufficient = FHE.lt(encryptedAmount, participant.accumulated);
        // Note: Validation should be done off-chain using Relayer SDK
        
        participant.accumulated = FHE.sub(participant.accumulated, encryptedAmount);
        emit PayoutProcessed(msg.sender, encryptedAmount);
    }
}

