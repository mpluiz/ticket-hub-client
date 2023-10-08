import { useState, useEffect, useCallback, ChangeEvent } from 'react'
import { times } from '@/utils'
import { Text } from '@/presentation/components'
import { IconArrowDown, IconArrowLeft, IconArrowRight } from '@/presentation/components/icons'
import '@/presentation/components/Pagination/Pagination.scss'

export interface PaginationProps {
  numberOfPages: number
  numberOfItems: number
  page: number
  onChangePage: (page: number) => void
}

export function Pagination({ numberOfPages, page, numberOfItems, onChangePage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const pages = times<number>(numberOfPages, Number)

  useEffect(() => {
    setCurrentPage(page || 1)
  }, [page])

  const handleChangePage = useCallback((page: number) => {
    onChangePage(page)
    setCurrentPage(page)
  }, [onChangePage])

  const handleChangePageDropdown = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10)
    handleChangePage(index + 1)
  }, [handleChangePage])

  return (
    <div className="pagination">
      <Text color="gray">{numberOfItems} Resultados</Text>

      <div className="pagination__select">
        <span>Página:</span>
        <div>
          <select name="page" onChange={handleChangePageDropdown} value={currentPage - 1}>
            {pages.map(pageNumber => (
              <option
                key={`select-option-${pageNumber}`}
                value={pageNumber}
              >
                {pageNumber + 1}
              </option>
            ))}
          </select>
          <IconArrowDown size={24} color="var(--gray-50)" />
        </div>
      </div>

      <div className="pagination__pages">
        <button
          disabled={currentPage === 1}
          onClick={() => handleChangePage(currentPage - 1)}
        >
          <IconArrowLeft size={24} color="var(--brand-color-blue)" />
        </button>
        {pages.map(pageNumber => (
          <button
            className={`text ${(pageNumber + 1) === currentPage ? 'active' : ''}`}
            onClick={() => handleChangePage(pageNumber + 1)}
            key={`page-button-${pageNumber}`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handleChangePage(currentPage + 1)}
        >
          <IconArrowRight size={24} color="var(--brand-color-blue)"/>
        </button>
      </div>
    </div>
  )
}
