import { gql } from '@apollo/client';

export const updateTransactionMutation = gql`
  mutation (
    $_id: String!
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
    replaceTransaction(
      _id: $_id
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
      upsertedId
    }
  }
`;