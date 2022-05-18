import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";

const TransactionDetailsPage = (): JSX.Element => {
  // ctx
  const { transactionsData } = useContext(AppContext);

  // router
  const { accountId, transactionId } = useParams();
  const cleanAccountId = parseInt(accountId ?? "0");
  const cleanTransactionId = parseInt(transactionId ?? "0");

  // find selected transaction details
  const TRANSACTION_DATA = transactionsData.find(
    (transactionData) =>
      transactionData.account_id === cleanAccountId &&
      transactionData.id === cleanTransactionId
  );

  // set card border color according to transaction processed or not
  const setCardBorderColor = (): string => {
    if (TRANSACTION_DATA?.transaction_processed) {
      return "success";
    }

    return "danger";
  };

  const setTransactionStatus = (): string => {
    if (TRANSACTION_DATA?.transaction_processed) {
      return "Transaction Successful";
    }

    return "Transaction Failed";
  };

  return (
    <Container>
      <Card className="card" border={setCardBorderColor()}>
        <Card.Header>
          <Card.Title>{TRANSACTION_DATA?.amount}</Card.Title>
          <Card.Text>{TRANSACTION_DATA?.from}</Card.Text>
        </Card.Header>

        <Card.Body>{TRANSACTION_DATA?.description}</Card.Body>

        <Card.Footer>
          <CardFooterRow>
            {TRANSACTION_DATA?.transaction_date}

            <Card.Text>{setTransactionStatus()}</Card.Text>
          </CardFooterRow>
        </Card.Footer>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow-x: scroll;

  .card {
    @media only screen and (min-width: 768px) {
      /* tablets and desktop */
      width: 35rem;
    }

    @media only screen and (max-width: 767px) {
      /* phones */
      width: 18rem;
    }
  }
`;

const CardFooterRow = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    flex-direction: column;
  }
`;

export default TransactionDetailsPage;
