// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CourseNFT is ERC721URIStorage {
    mapping(address => uint256) public videosCompleted;
    uint256 private _nextTokenId;

    constructor() 
        ERC721("CourseNFT", "BZL")  {
        _nextTokenId = 1;
    }

    function mintNFT(address student) public {
        videosCompleted[student]++;

        // Acuña un NFT cuando se complete el curso de 6 videos
        if (videosCompleted[student] == 6) {
            uint256 newTokenId = _nextTokenId++;
            _safeMint(student, newTokenId);
            _setTokenURI(newTokenId, "ipfs://QmZ8skZ4z7dmzLWSGLWnyJLfqhUvkJDkZVnUKiBMCZzWq2");
        }
    }

    function toString(uint256 value) internal pure returns (string memory) {
        // Convierte un uint256 a string para usar en la URL del metadato
    }
}
