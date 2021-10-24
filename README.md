# Usage

Read all pools froma given masterchef

`Takes a masterchef address as parameter`

```
npx hardhat get_pools --address 0x...
```

Deploy a strategy contract, deploy a vault contract and set the jar address of the strategy to the vault contract using the current signer (PRIVATE_KEY account in the .env), it'll also verify the contract using the blockscan API key. (Currently doesn't work on Moonriver)

`Will automatically compile the contract for you`

```
npx hardhat deploy_vault
```

Test a vault using the current signer (PRIVATE_KEY account in the .env). You'd need to have an amount available of the LP pair token, and the fee token generated by the pool. The fee token needs to be greather than or equal the `harvestCutoffFee`.

It'll test for;

`Deposit -> harvest -> withdraw`

`emergencyWithdraw() gas estimates`

`Takes a masterchef address as parameter`

```
npx hardhat vault_test --address 0x...
```

# Configuration and installation

Create an `.env` file. An example can be found in `.env.example`

```
MAINNET=
PRIVATE_KEY=
```

Install dependencies

```
yarn
```

If you don't have `npx`

```
yarn global add npx
```

# Usage

By default it'll fork the mainnet and execute locally.
To run on a mainnet, just add `--network mainnet` at the end of the command.

Example with Koge vault

```
npx hardhat vault_test --address 0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657
```
