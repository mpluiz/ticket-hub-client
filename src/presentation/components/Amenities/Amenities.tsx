import { IconAirLineTicket, IconCoffee, IconHouse, IconWifi } from '@/presentation/components/icons'
import { Text } from '@/presentation/components'
import '@/presentation/components/Amenities/Amenities.scss'

export interface AmenitiesProps {
  amenities: string[]
}

export function Amenities({ amenities }: AmenitiesProps) {
  function getIcon(amenitie: string) {
    switch (amenitie) {
      case 'Passagem Aérea':
        return <IconAirLineTicket size={24} color="var(--gray-50)" />
      case 'Wi-fi':
        return <IconWifi size={24} color="var(--gray-50)" />
      case 'Café de manhã':
        return <IconCoffee size={24} color="var(--gray-50)" />
      case 'Quarto':
        return <IconHouse size={24} color="var(--gray-50)" />
    }
  }

  return (
    <div className="amenities">
      {amenities.map((amenitie, i) => (
        <div className="amenities__item" key={`amenitie-item-${i}`}>
          {getIcon(amenitie)}
          <Text size="nm" weigth="medium" color="gray">{amenitie}</Text>
        </div>
      ))}
    </div>
  )
}
