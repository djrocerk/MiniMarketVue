import { createStore } from 'vuex'

import products from './models/products'

// Create a new store instance.
const store = createStore({
    modules: {
        products
    }
})

export default store