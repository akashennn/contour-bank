import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountListingPage from "./pages/AccountListing";
import ErrorPage from "./pages/_Error";
import TransactionDetailsPage from "./pages/TransactionDetails";
import TransactionListingPage from "./pages/TransactionListing";
import styled from "styled-components";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Container>
        <Routes>
          <Route path="/" element={<AccountListingPage />} />
          <Route
            path="account/:accountId"
            element={<TransactionListingPage />}
          />
          <Route
            path="account/:accountId/transaction/:transactionId"
            element={<TransactionDetailsPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </AppContextProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
`;

export default App;
