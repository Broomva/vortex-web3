// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ProgressToken is ERC20 {

    constructor(address initialOwner) ERC20("ProgressToken", "PGT") {
        // El propietario inicial es establecido en el constructor de Ownable
    }

    function completeVideo(address recipient) public {
        // require(owner() != msg.sender, "La institucion no puede recibir sus tokens propios");
        _mint(recipient, 1); // Acuña 1 token cada 2 vídeos completados y envía al destinatario especificado
    }
}
