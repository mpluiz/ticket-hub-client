import { Button, ComponentProps, Heading, Separator, Text } from '@/presentation/components'
import { IconApartment, IconHotel, IconHouse, IconStar } from '@/presentation/components/icons'
import '@/presentation/components/Filter/Filter.scss'

export type FilterProps = ComponentProps<HTMLDivElement>

export function Filter({ className }: FilterProps) {
  return (
    <div className={`filter ${className}`}>
      <div className="filter__header">
        <Heading size="h2" weigth="bold">Filtro</Heading>
        <Text size="nm" color="blue">Limpar todos os filtros</Text>
      </div>

      <Separator />

      <div className="filter__price">
        <Text weigth="bold">Preço</Text>

        <div className="options">
          <Button className="item active" type="button">R$ 10,00 - R$ 390,00</Button>
          <Button className="item" type="button">R$ 10,00 - R$ 390,00</Button>
          <Button className="item" type="button">R$ 10,00 - R$ 390,00</Button>
          <Button className="item" type="button">R$ 10,00 - R$ 390,00</Button>
        </div>
      </div>

      <Separator />

      <div className="filter__review">
        <Text weigth="bold">Tipo de propriedade</Text>

        <div className="options">
          <Button className="item" type="button">
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            (134)
          </Button>
          <Button className="item" type="button">
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            (134)
          </Button>
          <Button className="item" type="button">
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            (72)
          </Button>
          <Button className="item" type="button">
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            (75)
          </Button>
          <Button className="item" type="button">
            <IconStar size={24} color="rgba(255, 173, 13, 1)" />
            (07)
          </Button>
        </div>
      </div>

      <Separator />

      <div className="filter__amenities">
        <Text weigth="bold">Comodidades</Text>

        <div className="amenitie">
          <div className="checkbox"></div>
          <Text size="nm">Wi-Fi</Text>
        </div>

        <div className="amenitie">
          <div className="checkbox"></div>
          <Text size="nm">Cozinhar</Text>
        </div>

        <div className="amenitie">
          <div className="checkbox"></div>
          <Text size="nm">Máquina de Lavar</Text>
        </div>

        <div className="amenitie">
          <div className="checkbox"></div>
          <Text size="nm">Ar-condicionado</Text>
        </div>

        <div className="amenitie">
          <div className="checkbox"></div>
          <Text size="nm">Secadora</Text>
        </div>
      </div>

      <Separator />

      <div className="filter__property-type">
        <Text weigth="bold">Tipo de propriedade</Text>

        <div className="options">
          <Button className="item active" type="button">
            <IconHouse size={18} color="var(--brand-color-blue)" /> Casa (346)
          </Button>

          <Button className="item" type="button">
            <IconApartment size={18} color="var(--gray-20)" /> Apartamento (234)
          </Button>

          <Button className="item" type="button">
            <IconHotel size={18} color="var(--gray-20)" /> Hotel (23)
          </Button>
        </div>
      </div>

      <Separator />

      <div className="filter__review-score">
        <Text weigth="bold">Review Score</Text>

        <div className="review">
          <div className="bar">
            <div className="progress p9">
              <Text size="nm" color="white">9+</Text>
            </div>
          </div>
          <Text size="nm">Excelente (543)</Text>
        </div>

        <div className="review">
          <div className="bar">
            <div className="progress p8">
              <Text size="nm" color="white">8+</Text>
            </div>
          </div>
          <Text size="nm">Muito Bom (543)</Text>
        </div>

        <div className="review">
          <div className="bar">
            <div className="progress p7">
              <Text size="nm" color="white">7+</Text>
            </div>
          </div>
          <Text size="nm">Bom (543)</Text>
        </div>

        <div className="review">
          <div className="bar">
            <div className="progress p6">
              <Text size="nm" color="white">6+</Text>
            </div>
          </div>
          <Text size="nm">Ruim (543)</Text>
        </div>

        <div className="review">
          <div className="bar">
            <div className="progress"></div>
          </div>
          <Text size="nm">Pessímo (14)</Text>
        </div>
      </div>
    </div>
  )
}
