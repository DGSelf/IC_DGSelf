import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AvatarCustomization from './AvatarCustomization';
import './customization.scss';

import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { NFID } from "@connect2ic/core/providers/nfid"
import { Connect2ICProvider } from "@connect2ic/react";
import "@connect2ic/core/style.css"
import "react-toastify/dist/ReactToastify.css";
import * as backend from "../../declarations/IC_DGSelf_backend";
import * as ledger from "../../declarations/icrc1_ledger_canister";

const client = createClient({
  canisters: {
    backend,
    ledger,
  },
  providers: [
    new InternetIdentity(),
    new NFID(),
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customizeavatar" element={
          <>
            <Connect2ICProvider client={client}>
              <AvatarCustomization />
            </Connect2ICProvider>,
          </>
        } />
      </Routes>
    </Router>
  </React.StrictMode>,
);