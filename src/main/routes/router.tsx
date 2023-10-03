import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/presentation/pages/Home/Home.tsx'

export function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}
