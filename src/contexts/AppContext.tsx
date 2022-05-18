import React, { createContext, useEffect, useState } from "react";
import ACCOUNTS_DATA from "../assets/mockdata/accounts.json";
import TRANSACTIONS_DATA_FROM_ACCOUNT1 from "../assets/mockdata/transactions-1.json";
import TRANSACTIONS_DATA_FROM_ACCOUNT2 from "../assets/mockdata/transactions-2.json";
import TRANSACTIONS_DATA_FROM_ACCOUNT3 from "../assets/mockdata/transactions-3.json";
import TRANSACTIONS_DATA_FROM_ACCOUNT4 from "../assets/mockdata/transactions-4.json";
import { TAccount, TTransaction } from "../types/types";

type TProps = {
  children: JSX.Element;
};

type TContext = {
  accountsData: TAccount[];
  transactionsData: TTransaction[];
};

const initState = {
  accountsData: [],
  transactionsData: [],
};

export const AppContext = createContext<TContext>(initState);

export const AppContextProvider = ({ children }: TProps): JSX.Element => {
  const [accountsData, setAccountsData] = useState<TAccount[]>([]);
  const [transactionsData, setTransactionsData] = useState<TTransaction[]>([]);

  useEffect(() => {
    setAccountsData(ACCOUNTS_DATA);
    setTransactionsData([
      ...TRANSACTIONS_DATA_FROM_ACCOUNT1,
      ...TRANSACTIONS_DATA_FROM_ACCOUNT2,
      ...TRANSACTIONS_DATA_FROM_ACCOUNT3,
      ...TRANSACTIONS_DATA_FROM_ACCOUNT4,
    ]);
  }, []);

  const context = {
    accountsData,
    transactionsData,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
