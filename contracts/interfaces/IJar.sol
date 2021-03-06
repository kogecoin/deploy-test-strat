// SPDX-License-Identifier: unlicensed"

pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IJar is IERC20 {
    function token() external view returns (address);

    function getRatio() external view returns (uint256);

    function balance() external view returns (uint256);

    function depositAll() external;

    function deposit(uint256) external;

    function withdrawAll() external;

    function withdraw(uint256) external;

    function strategy() external view returns (address);

    function decimals() external view returns (uint8);
}
