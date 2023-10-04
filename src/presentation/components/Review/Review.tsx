import { Button, ComponentProps, Text } from '@/presentation/components'
import '@/presentation/components/Review/Review.scss'

export interface ReviewProps extends ComponentProps<HTMLDivElement> {
  value: number
  total: number
}

export function Review({ value, total }: ReviewProps) {
  return (
    <div className="review">
      <Button type="button">{value}</Button>
      <Text>Excelente</Text>
      <Text>{`(${total} Reviews)`}</Text>
    </div>
  )
}
