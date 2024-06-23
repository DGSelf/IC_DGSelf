import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Ledger "canister:icrc1_ledger_canister";
import TrieMap "mo:base/TrieMap";
import List "mo:base/List";
import Iter "mo:base/Iter";
import Bool "mo:base/Bool";
import Error "mo:base/Error";

actor Main {
  private var usersMap = TrieMap.TrieMap<Principal, List.List<Text>>(Principal.equal, Principal.hash);

  public shared query ({ caller }) func amIregistered() : async Bool {
    switch (usersMap.get(caller)) {
      case (null) { return false };
      case (?value) { return true };
    };
  };

  public shared ({ caller }) func register() : async Text {
    switch (usersMap.get(caller)) {
      case (null) {
        usersMap.put(caller, List.nil<Text>());
        await giveFreeTokens(caller);
      };
      case (?result) return "Already Registered";
    };
  };

  private func giveFreeTokens(principal : Principal) : async Text {
    let transferArgs : Ledger.TransferArg = {
      to = {
        owner = principal;
        subaccount = null;
      };
      amount = 100_000_50_000;
      from_subaccount = null;
      fee = null;
      memo = null;
      created_at_time = null;
    };

    try {
      let transferResult = await Ledger.icrc1_transfer(transferArgs);

      switch (transferResult) {
        case (#Err(transferError)) {
          return "Couldn't transfer funds:\n" # debug_show (transferError);
        };
        case (#Ok(blockIndex)) { return "Success" };
      };
    } catch (error : Error) {
      return "Reject message: " # Error.message(error);
    };
  };

  //TODO: Items should be listed/saved on blockchain, otherwise users can call directly into this method instead from Unity WebGL and alter the price
  public shared ({ caller }) func purchaseItem(itemName : Text, price : Nat) : async Text {

    let transferFromArgs : Ledger.TransferFromArgs = {
      from = {
        owner = caller;
        subaccount = null;
      };
      to = {
        owner = Principal.fromActor(Main);
        subaccount = null;
      };
      amount = price * 1_000_000_00;
      spender_subaccount = null;
      created_at_time = null;
      fee = null;
      memo = null;
    };

    try {
      let transferFromResult = await Ledger.icrc2_transfer_from(transferFromArgs);

      switch (transferFromResult) {
        case (#Err(transferError)) {
          return "Couldn't transfer funds:\n" # debug_show (transferError);
        };
        case (#Ok(blockIndex)) {
          var ownedItems = switch (usersMap.get(caller)) {
            case null List.nil<Text>();
            case (?result) result;
          };

          ownedItems := List.push(itemName, ownedItems);
          usersMap.put(caller, ownedItems);

          return "Success";
        };
      };
    } catch (error : Error) {
      return "Reject message: " # Error.message(error);
    };
  };

  public shared query ({ caller }) func getOwnedItems() : async [Text] {
    switch (usersMap.get(caller)) {
      case null [];
      case (?result) List.toArray(result);
    };
  };

  private stable var usersMapStable : [(Principal, List.List<Text>)] = [];

  system func preupgrade() {
    usersMapStable := Iter.toArray(usersMap.entries());
  };

  system func postupgrade() {
    usersMap := TrieMap.fromEntries<Principal, List.List<Text>>(usersMapStable.vals(), Principal.equal, Principal.hash);
  };
};
