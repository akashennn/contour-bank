import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import AccountCard from "../components/Accounts/AccountCard";
import { AppContext } from "../contexts/AppContext";

const AccountListingPage = (): JSX.Element => {
  // ctx
  const { accountsData } = useContext(AppContext);

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {accountsData.map((accountData) => (
          <Col>
            <AccountCard accountData={accountData} />
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

export default AccountListingPage;
