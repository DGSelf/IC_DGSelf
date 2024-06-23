# IC_DGSelf

Interoperable avatar platform backed by Web3 technology, using the ICP blockchain.
<br>
To learn more about the project's vision, features, tokenomics, roadmap, and whitepaper, please visit our  website: [https://DGSelf.com](https://DGSelf.com)

Also follow us on social media for latest updates:
- [OpenChat](https://oc.app/community/bpsha-4qaaa-aaaar-bhyza-cai/?ref=jhknb-biaaa-aaaar-aym6q-cai)
- [Discord](https://discord.gg/ZuXdvFfp)
- [Twitter | X](https://x.com/DG_Self)

<img src="./src/IC_DGSelf_frontend/public/images/hero.jpg" />


## Running the project locally
These steps assume you can run IC projects in a local development environment and have experience testing applications.
<br>
For more information about the Internet Computer blockchain, visit [https://internetcomputer.org](https://internetcomputer.org).
<br>

To test the project locally, use following commands:

```bash
# Starts the clean replica in background
dfx start --clean --background

# Deploys the ICRC-1 token Ledger canister with specified initial values
dfx identity use default
export MINTER=$(dfx identity get-principal)
export DEFAULT=$(dfx identity get-principal)
export ARCHIVE_CONTROLLER=$(dfx identity get-principal)
export TOKEN_NAME="DGSelf Token"
export TOKEN_SYMBOL="DGSLF"
export PRE_MINTED_TOKENS=100_000_000_000_000_00
export TRANSFER_FEE=10_000
export NUM_OF_BLOCK_TO_ARCHIVE=1000
export TRIGGER_THRESHOLD=2000
export CYCLE_FOR_ARCHIVE_CREATION=10000000000000
export FEATURE_FLAGS=true

dfx deploy icrc1_ledger_canister --specified-id mxzaz-hqaaa-aaaar-qaada-cai --argument "(variant {Init =
record {
     token_name = \"${TOKEN_NAME}\";
     token_symbol = \"${TOKEN_SYMBOL}\";
     minting_account = record { owner = principal \"${MINTER}\" };
     transfer_fee = ${TRANSFER_FEE};
     metadata = vec {};
     feature_flags = opt record{icrc2 = ${FEATURE_FLAGS}};
     initial_balances = vec { record { record { owner = principal \"${DEFAULT}\"; }; ${PRE_MINTED_TOKENS}; }; };
     archive_options = record {
         num_blocks_to_archive = ${NUM_OF_BLOCK_TO_ARCHIVE};
         trigger_threshold = ${TRIGGER_THRESHOLD};
         controller_id = principal \"${ARCHIVE_CONTROLLER}\";
         cycles_for_archive_creation = opt ${CYCLE_FOR_ARCHIVE_CREATION};
     };
 }
})"

# Deploys other canisters
dfx deploy

# Transfer 100,000 tokens to the backend canister to reward newly registered users with 100 tokens each
dfx canister call icrc1_ledger_canister icrc1_transfer "(record {
  to = record {
    owner = principal \"$(dfx canister id IC_DGSelf_backend)\";
  };
  amount = 100_000_000_000_00;
})"
```