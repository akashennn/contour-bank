export type TAccount = {
  id: number;
  account_name: string;
  account_type: string;
  balance: number;
  currency: string;
  account_number: string;
  is_active: boolean;
};

export type TTransaction = {
  id: number;
  account_id: number;
  description: string;
  from: string;
  transaction_date: string;
  transaction_processed: boolean;
  amount: string;
};
