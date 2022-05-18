import React from "react";
import { Badge } from "react-bootstrap";

type TProps = {
  isActive: boolean;
};

const CustomBadge = ({ isActive }: TProps): JSX.Element => {
  if (isActive) {
    return <Badge bg="success">Active</Badge>;
  }

  return <Badge bg="danger">Not Active</Badge>;
};

export default CustomBadge;
