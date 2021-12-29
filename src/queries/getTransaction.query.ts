import { gql } from '@apollo/client';

export const getTransactionByIdQuery = gql`
  query ($_id: String!) {
    getTransactionById(_id: $_id) {
      success
      message
      document {
        name
        itemId
        store
        city
        date
        currency
        price
        unit
        amount
        tax
        cost
        comment
      }
    }
  }
`;

export const getAllTransactionsQuery = gql`
  query {
    getAllTransactions {
      success
      message
      documents {
        _id
        name
        date
        store
        currency
        cost
        city
      }
    }
  }
`;
