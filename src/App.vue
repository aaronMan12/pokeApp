<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/Pokemons">
        <img
          src="@/assets/pokeball.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Poke App
      </router-link>
      <div>
        <router-link
          active-class="active"
          class="btn btn-outline-primary me-2"
          to="/"
          >Home</router-link
        >
        <router-link
          active-class="active"
          class="btn btn-outline-primary me-2"
          to="/Pokemons"
          >Pokemons</router-link
        >
        <router-link
          active-class="active"
          class="btn btn-outline-primary me-2"
          to="/favoritos"
          >Favoritos</router-link
        >
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView />
  </div>
</template>


<style></style>