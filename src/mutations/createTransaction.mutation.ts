import { gql } from '@apollo/client';

export const createTransactionMutation = gql`
  mutation (
    $name: String!
    $itemId: String
    $store: String!
    $city: String!
    $date: String!
    $currency: String!
    $price: String
    $unit: String
    $amount: String
    $tax: String
    $cost: String!
    $comment: String
  ) {
    createTransaction(
      name: $name
      itemId: $itemId
      store: $store
      city: $city
      date: $date
      currency: $currency
      price: $price
      unit: $unit
      amount: $amount
      tax: $tax
      cost: $cost
      comment: $comment
    ) {
      success
      message
      insertedId
    }
  }
`;
