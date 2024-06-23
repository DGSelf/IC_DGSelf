import React, { useRef, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ToastContainer, toast } from "react-toastify";
import { ConnectDialog, useDialog, useConnect, useCanister } from "@connect2ic/react";
import { canisterId as backendID } from "../../declarations/IC_DGSelf_backend";
import { Principal } from "@dfinity/principal";
import ProgressBar from 'react-customizable-progressbar'

function AvatarCustomization() {
  const { open } = useDialog();
  const { principal, disconnect } = useConnect();
  const [backend] = useCanister("backend");
  const [ledger] = useCanister("ledger");

  const ownedItems = useRef([]);
  const balance = useRef(0);
  const previousValues = useRef({ principal, backend, ledger });

  const openWalletDialog = () => { disconnect(); open() };

  function handleCacheControl(url) {
    if (url.match(/\.data/) || url.match(/\.bundle/)) {
      return "must-revalidate";
    }
    if (url.match(/\.mp4/) || url.match(/\.wav/)) {
      return "immutable";
    }
    return "no-store";
  }

  const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "DGSelf_WebGL.loader.js",
      dataUrl: "DGSelf_WebGL.data.br",
      frameworkUrl: "DGSelf_WebGL.framework.js.br",
      codeUrl: "DGSelf_WebGL.wasm.br",
      cacheControl: handleCacheControl,
      companyName: "DGSelf",
      productName: "DGSelf",
      productVersion: "0.1",
    });

  const sendDataToWebGL = () => {
    if (principal && principal.length > 20) {
      let balanceFormatted = parseFloat(balance.current) / 100000000;
      balanceFormatted = Math.floor(balanceFormatted * 100) / 100;
      sendMessage("ReactUnityDispatcher", "SetBalance", balanceFormatted.toString());
      sendMessage("ReactUnityDispatcher", "SetOwnedItems", ownedItems.current.toString());
    }
  };

  useEffect(() => {
    if (
      previousValues.current.principal !== principal &&
      previousValues.current.backend !== backend &&
      previousValues.current.ledger !== ledger
    ) {
      async function fetchData() {
        if (principal && principal.length > 20) {
          if (await backend.amIregistered() == false) {
            const id = toast.loading("Please wait... Registering new user...", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "dark",
            });

            const result = await backend.register();

            if (result != "Success") {
              toast.update(id, {
                render: result,
                type: "error",
                isLoading: false,
                autoClose: 5000,
              });
            } else if (result == "Success") {
              toast.update(id, {
                render: "You've been rewarded with 100 tokens!",
                type: "success",
                isLoading: false,
                autoClose: 5000,
              });

              await ledger.icrc2_approve({
                amount: 100_000_50_000,
                spender: { owner: Principal.fromText(backendID), subaccount: [] },
                fee: [],
                memo: [],
                from_subaccount: [],
                expected_allowance: [],
                created_at_time: [],
                expires_at: [],
              });
            }
          }

          balance.current = await ledger.icrc1_balance_of({ owner: Principal.fromText(principal), subaccount: [] });
          ownedItems.current = await backend.getOwnedItems();
          sendDataToWebGL();
        }
        else sendMessage("ReactUnityDispatcher", "WalletDisconnected");
      }
      fetchData();
      previousValues.current = { principal, backend, ledger };
    }
  });

  const purchaseItemHandler = useCallback(async (itemName, price) => {
    const id = toast.loading("Please wait... Purchasing the item", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

    const result = await backend.purchaseItem(itemName, price);

    if (result == "Success") {
      toast.update(id, {
        render: "You successfully purchased the item",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      toast.update(id, {
        render: result,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      ownedItems.current = await backend.getOwnedItems();
      sendMessage("ReactUnityDispatcher", "SetOwnedItems", ownedItems.current.toString());
    }

    balance.current = await ledger.icrc1_balance_of({ owner: Principal.fromText(principal), subaccount: [] });
    let balanceFormatted = parseFloat(balance.current) / 100000000;
    balanceFormatted = Math.floor(balanceFormatted * 100) / 100;
    sendMessage("ReactUnityDispatcher", "SetBalance", balanceFormatted.toString());
  }, [principal, backend, sendMessage]);

  useEffect(() => {
    addEventListener("ConnectWallet", openWalletDialog);
    addEventListener("FetchData", sendDataToWebGL);
    addEventListener("PurchaseItem", purchaseItemHandler);

    return () => {
      removeEventListener("ConnectWallet", openWalletDialog);
      removeEventListener("FetchData", sendDataToWebGL);
      removeEventListener("PurchaseItem", purchaseItemHandler);
    };
  }, [addEventListener, removeEventListener, openWalletDialog, sendDataToWebGL, purchaseItemHandler]);

  return (
    <div style={{ textAlign: "center" }}>
      <br /><br />
      <img id="banner" src="/customization_banner.jpg" alt="Customization Banner" />
      <br />
      <ToastContainer />
      <ConnectDialog dark={"true"} />

      <div id="unityContainer">
        {!isLoaded && (
          <div id="progressContainer">
            <ProgressBar
              radius={80}
              progress={Math.round(loadingProgression * 100)}
              strokeWidth={8}
              strokeColor="#1be7a7"
              trackStrokeWidth={4}
              pointerRadius={10}
              pointerStrokeWidth={5}
              pointerStrokeColor="#1be7a7"
              pointerFillColor="#1be7a7"
            >
              <div id="progressIndicator">
                <div>{Math.round(loadingProgression * 100)}%</div>
              </div>
            </ProgressBar>
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ visibility: isLoaded ? "visible" : "hidden", width: "100%", height: "100%" }}
        />
      </div>
    </div >
  );
}
export default AvatarCustomization;