import { gql } from '@apollo/client'

export const RecalculateCart = gql`
  mutation RecalculateCart($id: UUID!) {
    recalculateCart(id: $id) {
      id
      subTotal
      total
      cartItems {
        id
        cartId
        ticketId
        subTotal
        quantity
        ticket {
          id
          name
          imageUrl
        }
      }
      createdAt
      updatedAt
    }
  }
`
