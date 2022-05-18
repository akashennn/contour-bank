import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TAccount } from "../../types/types";
import CustomBadge from "../CustomBadge";

type TProps = {
  accountData: TAccount;
};

const AccountCard = ({ accountData }: TProps): JSX.Element => {
  // router
  const navigate = useNavigate();

  // navigate to transaction listing page
  const openTransactionListingPage = (): void => {
    navigate(`account/${accountData.id}`);
  };

  return (
    <Card onClick={openTransactionListingPage}>
      <Card.Body>
        <CardBodyRow>
          <Card.Title>{accountData.account_name}</Card.Title>
          <CustomBadge isActive={accountData.is_active} />
        </CardBodyRow>
        <Card.Text>{accountData.account_number}</Card.Text>
      </Card.Body>

      <Card.Footer>
        {accountData.currency} {accountData.balance}
      </Card.Footer>
    </Card>
  );
};

const CardBodyRow = styled.div`
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

export default AccountCard;
