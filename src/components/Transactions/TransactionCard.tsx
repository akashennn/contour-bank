import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TTransaction } from "../../types/types";

type TProps = {
  transactionData: TTransaction;
};

const TransactionCard = ({ transactionData }: TProps): JSX.Element => {
  // remove time from transaction date
  const TRANSACTION_DATE = transactionData.transaction_date.split("T")[0];

  // router
  const navigate = useNavigate();

  // navigate to transaction details page
  const openTransactionListingPage = (): void => {
    navigate(`transaction/${transactionData.id}`);
  };

  // set card border color according to transaction processed or not
  const setCardBorderColor = (): string => {
    if (transactionData.transaction_processed) {
      return "success";
    }

    return "danger";
  };

  return (
    <Container>
      <Card onClick={openTransactionListingPage} border={setCardBorderColor()}>
        <Card.Header>{TRANSACTION_DATE}</Card.Header>

        <Card.Body>
          <Card.Title>{transactionData.amount}</Card.Title>
          <Card.Text>{transactionData.description}</Card.Text>
        </Card.Body>

        <Card.Footer>{transactionData.from}</Card.Footer>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  p.card-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default TransactionCard;
