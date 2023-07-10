<script setup>
import { onMounted, computed, ref, watch, toRef } from 'vue';
import { useStore } from 'vuex';
import '@/assets/css/style.css';

const items = ref([]);
const store = useStore()
const array = computed(() => store.state.products.productsList)

onMounted(async () => {
    await store.dispatch('products/getProductsList')
    items.value = array.value
})

const itemsCarBuy = ref({})
const car = store.getters['products/getCarBuy']

watch(car, (newValue) => {
    itemsCarBuy.value = newValue;
    items.value.forEach((item, index) => {
        const validacion = itemsCarBuy.value.find(itemCarBuy => item.id === itemCarBuy.id)
        if (validacion >= 0) {
            item.value[index].cuantity = itemCarBuy.value[validacion].cuantity;
        }
    })
});

</script>

<template>
    <h2>Store</h2>
    <hr>
    <div>
        <ul class="list-group">
            <li v-for="item in items" :key="item.id" class="list-element">
                <router-link :to="`/detailProduct/${item.id}`">
                    <div v-if="item.cuantity > 0" class="element-cuantity">
                        <span>{{ item.cuantity }}</span>
                    </div>
                    <div class="element-image">
                        <img :src="item.image" alt="">
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.list-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.list-element {
    width: 150px;
    height: max-content;
    border: 1px solid var(--main-bg-color);
    padding: 5px;
}

.list-element img {
    width: 100%;
}

@media (max-width: 767px) {
    .list-group {
        padding: 0;
        justify-content: center;
    }

    .list-element {
        width: 100px;
    }
}
</style>