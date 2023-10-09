import { create } from 'zustand'
import { Cart } from '@/domain/entities'
import { LocalStorage } from '@/infra/cache/local-storage.ts'
import { client } from '@/infra/graphql/apollo'
import { CreateCart, CreateCartItem, DeleteCartItem, RecalculateCart } from '@/main/graphql/mutations'

interface CartState {
  cart?: Cart
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  cartItemsQuantity: () => number
  loading: boolean
  initializeCart: () => Promise<void>
  recalculateCart: () => Promise<void>
  createCartItem: (data: any) => Promise<void>
  deleteCartItem: (id: string) => Promise<void>
}

const cacheStorage = new LocalStorage()

export const useCartStore = create<CartState>()((set, get) => ({
  cartOpen: false,
  loading: false,
  cartItemsQuantity: () => get().cart?.cartItems?.length ?? 0,
  setCartOpen: (open) => set({ cartOpen: open }),

  initializeCart: async () => {
    set({ loading: true })
    const cachedCart = cacheStorage.get('cart')

    if (cachedCart) {
      set({ loading: false })
      return set({ cart: cachedCart })
    }

    const { data: { createCart } } = await client.mutate({ mutation: CreateCart })

    cacheStorage.set('cart', createCart)

    set({ loading: false })
    return set({ cart: createCart })
  },

  recalculateCart: async () => {
    const { data: { recalculateCart } } = await client.mutate({ mutation: RecalculateCart, variables: { id: get().cart?.id } })

    cacheStorage.clear()
    cacheStorage.set('cart', recalculateCart)

    set({ loading: false })
    return set({ cart: recalculateCart })
  },

  createCartItem: async (data: any) => {
    set({ loading: true })
    await client.mutate({ mutation: CreateCartItem, variables: { data } })
    await get().recalculateCart()
  },

  deleteCartItem: async (id: string) => {
    set({ loading: true })
    await client.mutate({ mutation: DeleteCartItem, variables: { id } })
    await get().recalculateCart()
  }
}))
