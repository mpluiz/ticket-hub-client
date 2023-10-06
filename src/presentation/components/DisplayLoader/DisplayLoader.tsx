import { Loader } from '@/presentation/components'
import '@/presentation/components/DisplayLoader/DisplayLoader.scss'

export function DisplayLoader() {
  return (
    <div className="display-loader">
      <Loader size="display" />
    </div>
  )
}
