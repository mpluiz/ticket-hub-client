import { gql } from '@apollo/client'

export default gql`
  query GetTicket($id: UUID!) {
    ticket(id: $id) {
      id
      name
      description
      imageUrl
      amenities
      address {
        id
        city
        state
        country
      }
      price {
        id
        originalValue
        value
        discount
      }
      reviews {
        id
        value
      }
    }
  }
`
