
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {ref,computed, watch } from 'vue'
const store = useStore()

const constante = ref(0);
const router = useRouter();

const total = computed(() => store.state.products.total)

watch(total, (newValue) => {
  constante.value = newValue;
});

const isSpecificRoute = computed(() => {
  return router.currentRoute.value.path === '/cartPyments' || false;
});

const imgClass = computed(() => isSpecificRoute.value ? 'cart-image-special' : 'cart-logo');
const pClass = computed(() => isSpecificRoute.value ? 'cart-price-special' : 'cart-price');
const buttonCarClass = computed(() => isSpecificRoute.value ? 'buttonCar-special' : 'buttonCar');

</script>
<template>
  <header class="header">
    <nav class="nav nav-container" id="nav">
      <router-link to="/" class="nav-logo">
        <img src="../../assets/images/logo.png" class="nav-logo" alt="" />
      </router-link>
      <router-link to="/cartPyments" :class="buttonCarClass">
        <img src="../../assets/images/shopping-cart.png" :class="imgClass">
        <p :class="['cart-price', pClass]">${{ constante }}</p>
        <router-link to="/" v-if="isSpecificRoute" class="boton-cerrar">
          X
        </router-link>
        
      </router-link>
    </nav>
  </header>
</template>
<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
  width: 90%;
  max-width: 1200px;
  overflow: hidden;
}

.nav-logo {
  width: 40px;
  z-index: 1;
}

.boton-cerrar{
  background-color: var(--main-bg-color);
  color: var(--third-bg-color);
  margin: 0;
  padding: 5px;
  height: 100%;
  align-items: center;
  display: inherit;
  text-decoration: none;
}

.buttonCar{
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: var(--main-bg-color);
}

.cart-logo{
  width: 20px;
  height: 20px;
  padding: 3px 5px;
  filter: invert(100%) sepia(6%) saturate(401%) hue-rotate(194deg) brightness(116%) contrast(100%);
}

.cart-price{
  text-decoration: none;
  margin: 0;
  padding: 3px 5px;
  color: white;
}

.buttonCar-special{
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: var(--third-bg-color);
  border: 1px solid var(--main-bg-color);
}

.cart-image-special {
  width: 20px;
  height: 20px;
  padding: 3px 5px;
  filter: invert(31%) sepia(71%) saturate(7046%) hue-rotate(265deg) brightness(90%) contrast(97%);
}

.cart-price-special {
  text-decoration: none;
  margin: 0;
  padding: 3px 5px;
  color: var(--main-bg-color);
}
</style>