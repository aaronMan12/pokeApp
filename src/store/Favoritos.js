import { defineStore } from "pinia";
import { ref, toRaw } from "vue";

export const useFavoriteStore = defineStore('favoriteStorer', () => {

  const favoritos = ref([])


  if (localStorage.getItem('favoritos')) {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  }

  const add = (pokemon) => {
    const newPoke = {
      name: pokemon.name
    }
    favoritos.value.push(newPoke)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const findPokemon = name => favoritos.value.find(item => item.name === name)

  const remove = (idPokemon) => {
    favoritos.value = favoritos.value.filter((item) => item.id !== idPokemon)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const addRute = (newRute) => {
    localStorage.setItem('ruta', JSON.stringify(newRute))
  }

  return {
    favoritos,
    add,
    remove,
    findPokemon,
    addRute
  }
}); 