import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, TicketPage } from '@/presentation/pages'

export function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket/:ticketId/details" element={<TicketPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}
