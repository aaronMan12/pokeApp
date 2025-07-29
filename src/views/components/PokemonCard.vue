<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoriteStore } from "@/store/Favoritos";

const favoritoStorage = useFavoriteStore();
const { add, findPokemon } = favoritoStorage;
// const
const { data, getData, loading, error } = useGetData();
const route = useRoute();
const router = useRouter();
const URLPOKE = "https://pokeapi.co/api/v2/pokemon/";

const back = () => {
  router.push("/Pokemons");
};

getData(`${URLPOKE}${route.params.name}`);
</script>

<template>
  <div class="card" :aria-hidden="loading" v-if="loading">
    <div class="card-body">
      <p class="card-text placeholder-glow">
        <span class="placeholder col-4" />
      </p>
    </div>
  </div>

  <div class="alert alert-danger" v-if="error">
    {{ error }}: No existe el pokemón
  </div>

  <div v-else>
    <div v-if="data">
      <img
        :src="data?.sprites?.front_default ?? data?.sprites?.front_shiny"
        width="250"
      />
      <h2>Nombre pokemon: {{ $route.params.name }}</h2>
      <button
        :disabled="findPokemon(data.name)"
        class="btn btn-primary mb-2"
        @click="add(data)"
      >
        Agregar Favoritos
      </button>
    </div>
    <h2 v-else>No existe el pokemon</h2>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
  </div>
</template>
