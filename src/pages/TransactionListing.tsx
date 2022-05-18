import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TransactionCard from "../components/Transactions/TransactionCard";
import { AppContext } from "../contexts/AppContext";

const TransactionListingPage = (): JSX.Element => {
  // ctx
  const { transactionsData } = useContext(AppContext);

  // router
  const { accountId } = useParams();
  const cleanAccountId = parseInt(accountId ?? "0");

  // remove other account transactions
  const ACCOUNT_TRANSACTIONS_DATA = [
    ...transactionsData.filter(
      (transactionData) => transactionData.account_id === cleanAccountId
    ),
  ];

  return (
    <Container>
      <Row xs={1} md={1} className="g-4">
        {ACCOUNT_TRANSACTIONS_DATA.map((transactionData) => (
          <Col key={transactionData.id}>
            <TransactionCard transactionData={transactionData} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: scroll;
`;

export default TransactionListingPage;
