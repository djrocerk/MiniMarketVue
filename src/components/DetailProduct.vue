<script setup>
import { defineProps, ref, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';


const props = defineProps({
    id: String
});

const item = ref({});

const isDisabledAdd = ref(false);
const isDisabledRemove = ref(false);
const store = useStore();

const array = store.getters['products/getProductId'](props.id);
const car = store.getters['products/getCarBuy'];

onMounted(() => {
    item.value = array
    isDisabledRemove.value = item.value && item.value.hasOwnProperty('cuantity') === false
})

watch(() => props.id, (newId) => {
    const newProduct = store.getters['products/getProductId'](newId);
    item.value = newProduct;
    isDisabledRemove.value = item.value.cuantity === undefined || item.value.cuantity ===0
});

const btnAdd = () => {
    let cuantity = 1;
    car.forEach(function (item) {
        item = JSON.parse(JSON.stringify(item))
        if (item.id === props.id) {
            cuantity = 1 + item.cuantity;
        }
    });

    item.value.cuantity = cuantity;
    item.value.total = cuantity * parseInt(item.value.price)
    isDisabledAdd.value = cuantity === parseInt(item.value.stock)
    isDisabledRemove.value = item.value.cuantity === 0
    store.dispatch('products/actionCarBuy', item)
    
}
const btnRemove = () => {
    let cuantity = 1;
    car.forEach(function (item) {
        item = JSON.parse(JSON.stringify(item))
        if (item.id === props.id) {
            cuantity = item.cuantity - 1;
        }
    });

    item.value.cuantity = cuantity;
    item.value.total = cuantity * parseInt(item.value.price)
    isDisabledRemove.value = item.value.cuantity === 0
    store.dispatch('products/actionCarBuy', item)
}
</script>

<template>
    <h2>Product</h2>
    <hr>
    <div class="card">
        <div>
            <div class="element-cuantity">
                <span class="itemCuantity">{{ item.cuantity || '0'}}</span>
            </div>
            <img class="card-image" alt="" :src="item.image">
        </div>

        <div class="card-body">
            <div class="card-body-text">
                <span class="card-body-name">{{ item.name }}</span>
                <p class="card-body-price">${{ item.price }}</p>
            </div>
            <div class="card-buttons">
                <a class="remove" :class="isDisabledRemove ? 'disabled' : ''" @click="btnRemove">-</a>
                <a class="add" :class="isDisabledAdd ? 'disabled' : ''" @click="btnAdd">+</a>
            </div>
        </div>
        <hr class="hr-vertical">

        <div class="card-body-description">
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card img {
    width: 200px;
}

.card-body {
    display: flex;
    align-items: center;
    width: 100%;
}

.card-body-text {
    display: flex;
    width: 80%;
}

.card-body-name {
    width: 50%;
    font-weight: bold;
    align-items: center;
    display: inherit;
    padding: 0 5px;
}

.card-body-price {
    color: var(--main-bg-color);
    font-weight: bold;
}

.card-body-description {
    color: gray;
}

.add,
.remove {
    padding: 5px 10px;
    cursor: pointer;
}

.add {
    background-color: var(--main-bg-color);
    color: var(--second-bg-color);
    
    font-weight: bold;
}

.remove {
    background-color: var(--third-bg-color);
    font-weight: bold;
}

.disabled {
    cursor: not-allowed;
    pointer-events: none;
}

@media (max-width: 1023px) {
    .card-body {
        flex-direction: column;
    }

    .card-body-text {
        width: 100%;
        justify-content: space-between;
    }
}

@media (max-width: 767px) {
    .card-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.card-body-text {
    display: flex;
    width: 80%;
    justify-content: flex-start;
}
}
</style>
