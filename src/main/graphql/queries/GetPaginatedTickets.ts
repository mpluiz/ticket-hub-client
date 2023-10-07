import { gql } from '@apollo/client'

export default gql`
  query GetPaginatedTickets($searchOptions: SearchOptionsInput) {
    paginatedTickets(searchOptions: $searchOptions) {
      pageInfo {
        page
        perPage
        totalItems
        totalPages
      }

      tickets {
        id
        name
        imageUrl
        amenities

        address {
          city
          state
        }

        price {
          originalValue
          value
          discount
        }

        reviews {
          value
        }
      }
    }
  }
`
