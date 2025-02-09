// stores/favorites.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GridItem } from '@/types'
import { Preferences } from '@capacitor/preferences'

const STORAGE_KEY = 'favorites'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<GridItem[]>([])

  const addToFavorites = async (item: GridItem) => {
    if (!isFavorite(item)) {
      favorites.value.push(item)
      await saveFavoritesToStorage()
    }
  }

  const removeFromFavorites = async (item: GridItem) => {
    favorites.value = favorites.value.filter(
      fav => fav.route !== item.route
    )
    await saveFavoritesToStorage()
  }

  const isFavorite = (item: GridItem) => {
    return favorites.value.some(fav => fav.route === item.route)
  }

  const saveFavoritesToStorage = async () => {
    await Preferences.set({
      key: STORAGE_KEY,
      value: JSON.stringify(favorites.value)
    })
  }

  const loadFavoritesFromStorage = async () => {
    const { value } = await Preferences.get({ key: STORAGE_KEY })
    if (value) {
      favorites.value = JSON.parse(value)
    }
  }

  // Cargar favoritos al iniciar
  loadFavoritesFromStorage()

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }
})