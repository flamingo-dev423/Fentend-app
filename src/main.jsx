import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'; // or whatever your CSS file is

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/rentease" element={<RentEaseDetails />} />
        <Route path="/epidemic-sounds" element={<EpidemicSoundsDetails />} />
        <Route path="/over-wallet" element={<OverWalletDetails />} />
        <Route path="/nft-marketplace" element={<NFTMarketplaceDetails />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
