import { FormEvent } from 'react'
import { NavBar, SearchBar } from '@/presentation/components'
import '@/presentation/pages/Home/Home.scss'

export function HomePage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <NavBar />
      <SearchBar onSubmit={handleSubmit} />
    </>
  )
}
