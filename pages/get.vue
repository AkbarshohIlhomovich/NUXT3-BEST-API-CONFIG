<!-- GET Request Example -->
<template>
  <div>
    <h2>Food Shops</h2>
    <button v-on:click="refresh">Refresh</button>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else>
      <li v-for="shop in foodshops" :key="shop.id">
        {{ shop.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useApi } from "~/composables/useFetch";

// Simple GET example
const { data, error, pending, refresh } = useApi(
  '/foodshop/food-shop-list/',             // path
  'get',                                   // method
  {},                                      // resources (path params)
  { page: 1, page_size: 10 },              // parameters (query params)
  {},                                      // body (ignored for GET)
  {                                        // options
    transform: (response) => response.results || []
  }
);

const foodshops = computed(() => data.value || []);
</script>
