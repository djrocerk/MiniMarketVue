<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

import ListProducts from '@/components/ListProducts.vue';
import navbar from '@/components/global/navbar.vue';

import '@/assets/css/style.css';

const store = useStore()
onMounted(async () => store.dispatch('products/getProductsList'))
</script>

<template>
  <navbar />
  <main class="d-flex justify-content-between container">
    <section class="w-70 w-100">
      <ListProducts />
    </section>
    <section class="w-30 w-100">
      <router-view />
    </section>
  </main>
</template>

<style>
.d-flex{
  display: flex;
}

.justify-content-between{
  justify-content: space-between;
}

@media (max-width: 767px) {
  .d-flex{
    flex-direction: column-reverse;
  }
  .w-100{
    width: 100%;
  }
}

</style>
