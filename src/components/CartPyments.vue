<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const items = ref([]);
const store = useStore();

const array = store.getters['products/getCarBuy']
const totalPrice = store.getters['products/getTotalPrice']

onMounted( () => { items.value = JSON.parse(JSON.stringify( array)) })

const script = document.createElement('script');
script.src = 'https://checkout.wompi.co/widget.js';
script.dataset.render = 'button';
script.dataset.publicKey = 'pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH';
script.dataset.currency = 'COP';
script.dataset.amountInCents = totalPrice;
script.dataset.reference = '4XMPGKWWPKWQ';
script.dataset.signatureIntegrity = '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5';
script.dataset.redirecturl = "https://transaction-redirect.wompi.co/check"
const paymentForm = ref(null);

onMounted(() => {
    paymentForm.value.appendChild(script);
});

</script>

<template>
    <h2>Shopping Cart</h2>
    <hr>
    <div>
        <ul class="list-group">
            <li v-for="item in items" :key="item.id" class="list-element">
                <div class="element-cuantity">
                    <span class="puto">{{ item.cuantity }}</span>
                </div>
                <div class="element-image">
                    <img :src="item.image" alt="">
                </div>
            </li>
        </ul>

        <div class="total">
            <p>Total: <span class="totalPriceCar">${{ totalPrice }}</span></p>
        </div>

        <form ref="paymentForm"></form>
    </div>
</template>

<style scoped>
.list-element {
    display: flex;
    align-items: center;
}

.list-element img {
    width: 100px;

}

.element-cuantity {
    position: relative;
    width: max-content;
    height: max-content;
    border-radius: 100%;
    background-color: var(--main-bg-color);
    text-align: center;
    color: aliceblue;
    padding: 0 5px;
}

.element-cuantity span {
    display: block;
    padding: 10px;
}

.total {
    font-size: large;
    text-align: right;
    color: gray;
}

.total span {
    font-weight: bold;
    color: var(--main-bg-color);
}
</style>
