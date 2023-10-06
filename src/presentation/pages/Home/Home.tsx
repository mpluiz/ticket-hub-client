import { FormEvent, useCallback, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Container, DisplayLoader, Filter, NavBar, SearchBar, TicketList } from '@/presentation/components'
import GetPaginatedTickets from '@/main/graphql/queries/GetPaginatedTickets.ts'
import '@/presentation/pages/Home/Home.scss'

export function HomePage() {
  const navigate = useNavigate()
  const [getPaginatedTickets, { data, loading }] = useLazyQuery(GetPaginatedTickets)

  const handleGetPaginatedTickets = useCallback(async (term = '') => {
    const searchOptions = { term, pagination: { page: 1, perPage: 6 } }
    await getPaginatedTickets({ variables: { searchOptions } })
  }, [getPaginatedTickets])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const term = form.get('search') as string
    await handleGetPaginatedTickets(term)
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
        <Filter />
        {(!loading && data) && <TicketList tickets={data.paginatedTickets.tickets} onItemClick={handleNavigate} />}
      </Container>

      {loading && <DisplayLoader/>}
    </>
  )
}
