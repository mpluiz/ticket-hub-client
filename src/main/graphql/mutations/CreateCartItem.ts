import { gql } from '@apollo/client'

export const CreateCartItem = gql`
  mutation CreateCartItem($data: CreateCartItemInput!) {
    createCartItem(data: $data) {
      id
    }
  }
`
