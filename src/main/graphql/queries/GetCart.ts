import { gql } from '@apollo/client'

export const GetCart = gql`
  query GetCart($id: UUID!) {
    cart(id: $id) {
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
