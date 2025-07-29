<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoriteStore } from "@/store/Favoritos";
import { computed } from "vue";

const useFavorite = useFavoriteStore();
const { addRute } = useFavorite;
const { data, getData, loading, error } = useGetData();
let URLPokemons = "https://pokeapi.co/api/v2/pokemon";

const getUrl = computed(() =>
  localStorage.getItem("ruta")
    ? JSON.parse(localStorage.getItem("ruta"))
    : URLPokemons
);

getData(getUrl.value);
</script>

<template>
  <p v-if="loading">Cargando la información....</p>
  <div class="alert alert-danger" v-if="error">{{ error }}</div>

  <div v-if="data">
    <ul class="list-group">
      <li class="list-group-item" v-for="poke in data.results" :key="poke.name">
        <router-link
          :to="`/pokemons/${poke.name}`"
          @click="addRute(data.lastUrl)"
        >
          {{ poke.name }}
        </router-link>
      </li>
    </ul>

    <div class="mt-2">
      <button
        :disabled="!data.previous"
        class="btn btn-secondary me-2"
        @click="getData(data.previous)"
      >
        Previous
      </button>
      <button
        :disabled="!data.next"
        class="btn btn-primary"
        @click="getData(data.next)"
      >
        next
      </button>
    </div>
  </div>
</template>