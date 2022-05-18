import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TProps = {
  transactionProcessed?: boolean;
};

const TransactionStatus = ({ transactionProcessed }: TProps): JSX.Element => {
  if (transactionProcessed) {
    return (
      <div>
        Transaction Successful{" "}
        <FontAwesomeIcon icon={faCircleCheck} color="green" />
      </div>
    );
  }

  return (
    <div>
      Transaction Failed{" "}
      <FontAwesomeIcon icon={faCircleExclamation} color="red" />
    </div>
  );
};

export default TransactionStatus;
