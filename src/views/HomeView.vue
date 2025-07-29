<script setup>
import { useCounterStore } from "@/store/counter.js";
import { storeToRefs } from "pinia";
const useCounter = useCounterStore();
const { increment } = useCounter;
const { count, double } = storeToRefs(useCounter);
</script>

<template>
  <div class="card" style="width: 18rem">
    <h1>Home counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button class="mb-2" @click="increment">Pluss</button>

    <img src="@/assets/logo.svg" class="card-img-top" height="100" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Example card</p>
      <a
        href="#"
        class="btn btn-primary"
        @click="
          () => {
            console.log('Ohhh');
          }
        "
        >Click Me</a
      >
    </div>
    <h1></h1>
  </div>
</template>
