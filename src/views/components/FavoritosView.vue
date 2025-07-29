<script setup>
import { useFavoriteStore } from "@/store/Favoritos";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const useFavorite = useFavoriteStore();
const { favoritos } = storeToRefs(useFavorite);
const { remove } = useFavorite;
const router = useRouter();

const toPoke = (name) => router.push(`/pokemons/${name}`);
</script>

<template>
  <h1>Pokemones favoritos</h1>
  <ul class="list-group">
    <p v-if="!favoritos.length" class="mt-2">Sin favoritos</p>
    <li v-else class="list-group-item" v-for="poke in favoritos" :key="poke.id">
      <div>{{ poke.name }}</div>
      <div>
        <button class="btn btn-sm btn-primary me-2" @click="toPoke(poke.name)">
          Ver detalles
        </button>
        <button class="btn btn-sm btn-danger" @click="remove(poke.id)">
          Eliminar
        </button>
      </div>
    </li>
  </ul>
</template>