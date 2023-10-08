import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Container, DisplayLoader, Filter, NavBar, Pagination, SearchBar, TicketList } from '@/presentation/components'
import GetPaginatedTickets from '@/main/graphql/queries/GetPaginatedTickets.ts'
import '@/presentation/pages/Home/Home.scss'

export function HomePage() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [getPaginatedTickets, { data, loading }] = useLazyQuery(GetPaginatedTickets)

  const handleGetPaginatedTickets = useCallback(async () => {
    const searchOptions = { term: searchTerm, pagination: { page: currentPage, perPage: 6 } }
    await getPaginatedTickets({ variables: { searchOptions } })
  }, [searchTerm, currentPage, getPaginatedTickets])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const term = form.get('search') as string
    setCurrentPage(1)
    setSearchTerm(term)
    await handleGetPaginatedTickets()
  }

  async function handleNavigate(id: string) {
    navigate(`/ticket/${id}/details`)
  }

  useEffect(() => {
    handleGetPaginatedTickets().catch(error => error)
  }, [handleGetPaginatedTickets])

  return (
    <>
      <NavBar />
      <SearchBar onSubmit={handleSubmit} />

      <Container className="home-page">
        <div className="content">
          <Filter />
          {(!loading && data) && <TicketList tickets={data.paginatedTickets.tickets} onItemClick={handleNavigate} />}
        </div>

        {data && (
          <Pagination
            numberOfPages={data.paginatedTickets.pageInfo.totalPages}
            numberOfItems={data.paginatedTickets.pageInfo.totalItems}
            page={currentPage}
            onChangePage={(page) => setCurrentPage(page)}
          />
        )}
      </Container>

      {loading && <DisplayLoader/>}
    </>
  )
}
