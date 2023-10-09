import { gql } from '@apollo/client'

export const DeleteCartItem = gql`
  mutation DeleteCartItem($id: UUID!) {
    deleteCartItem(id: $id)
  }
`
