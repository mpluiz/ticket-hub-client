import { gql } from '@apollo/client'

export const CreateCart = gql`
  mutation CreateCart {
    createCart {
      id
      total
      subTotal
      cartItems {
        id
        cartId
        ticketId
      }
      createdAt
      updatedAt
    }
  }
`
