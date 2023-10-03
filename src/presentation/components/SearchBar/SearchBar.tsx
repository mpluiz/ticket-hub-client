import { ChangeEvent, FormEvent } from 'react'
import { IconPinLocation, IconSearch } from '@/presentation/components/icons'
import '@/presentation/components/SearchBar/SearchBar.scss'

export interface SearchBarProps {
  value?: string | ReadonlyArray<string> | number | undefined;
  maxLength?: number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export function SearchBar({ value, maxLength = 255, onChange, onSubmit }: SearchBarProps) {
  return (
    <div className="search-bar">
      <form className="search-bar__field" onSubmit={onSubmit}>
        <IconPinLocation size={24} color="var(--brand-color-blue)" />
        <input placeholder="Busque por atração" value={value} onChange={onChange} maxLength={maxLength} />
        <button type="submit"><IconSearch size={24} color="var(--brand-color-blue)" /></button>
      </form>
    </div>
  )
}
