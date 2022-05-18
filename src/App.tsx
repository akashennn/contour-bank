import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountListingPage from "./pages/AccountListing";
import ErrorPage from "./pages/_Error";
import TransactionDetailsPage from "./pages/TransactionDetails";
import TransactionListingPage from "./pages/TransactionListing";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AccountListingPage />} />
        <Route path="transactions" element={<TransactionListingPage />} />
        <Route path="transactions/:id" element={<TransactionDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;

export default App;
