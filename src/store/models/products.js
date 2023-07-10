const products = {
  namespaced: true,
  state: () => ({
    productsList: [],
    carBuy: [],
    total: 0,
  }),
  mutations: {
    SET_PRODUCTSLIST(state, list) {
      state.productsList = list || [];
    },
    SET_PRODUCTCAR(state, product) {
      const itemIndex = state.carBuy.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex >= 0) {
        state.carBuy[itemIndex].cuantity = product.cuantity;
        state.carBuy[itemIndex].total = product.total;
        if (state.carBuy[itemIndex].cuantity === 0) {
          state.carBuy.splice(itemIndex, 1)
        }
      } else {
        state.carBuy.push(product);
      }
      localStorage.setItem('CarProducts', JSON.stringify(state.carBuy));
    },
    SET_TOTAL(state, product) {
      const totalPrice = state.carBuy.reduce(function (accumulator, currentValue) {
        currentValue = JSON.parse(JSON.stringify(currentValue));
        return accumulator += parseInt(currentValue.total);
        
      }, 0);
      
      state.total = totalPrice;
    }
  },
  actions: {
    async getProductsList({ commit, dispatch }) {
      try {
        const data = [
          {
            id: "1",
            image:
              "https://lh3.googleusercontent.com/az9d9MWbkTJ5YrIb1-bR5xbDoZ5C8QEqJNcwPF7-WAB1opG3E1qSo053fbQR31yLtLXiVSYlBgPt7wslVseYVSYb9GeDfXhrOKg",
            name: "Papas Margarita - Pollo",
            price: "2160",
            description:
              "Pasabocas Margarita Papas Fritas Pollo Paquete x 30 gr",
            stock: 20,
          },
          {
            id: "2",
            image:
              "https://copservir.vtexassets.com/arquivos/ids/770822/PAPA-MARGARITA-NATURAL_F.png?v=637951123764830000",
            name: "Papas Margarita - Natural",
            price: "2700",
            description: "Pasabocas paquete x 30 grs Papa margarita natural",
            stock: 20,
          },
          
          {
            id: "3",
            image:
              "https://lh3.googleusercontent.com/az9d9MWbkTJ5YrIb1-bR5xbDoZ5C8QEqJNcwPF7-WAB1opG3E1qSo053fbQR31yLtLXiVSYlBgPt7wslVseYVSYb9GeDfXhrOKg",
            name: "Papas Margarita - Pollo",
            price: "2160",
            description:
              "Pasabocas Margarita Papas Fritas Pollo Paquete x 30 gr",
            stock: 20,
          },
          {
            id: "4",
            image:
              "https://www.nestle-cereals.com/co/sites/g/files/qirczx971/files/styles/crop_thumbnail/public/2023-02/Chocapic_1.png?itok=EN2gKDv5",
            name: "cereal",
            price: "9000",
            description:
              "CEREAL CHOCAPIC NESTLE x250gr",
            stock: 20,
          },
          {
            id: "5",
            image:
              "https://copservir.vtexassets.com/arquivos/ids/770822/PAPA-MARGARITA-NATURAL_F.png?v=637951123764830000",
            name: "Papas Margarita - Natural",
            price: "2700",
            description: "Pasabocas paquete x 30 grs Papa margarita natural",
            stock: 20,
          },
          {
            id: "6",
            image:
              "https://www.nestle-cereals.com/co/sites/g/files/qirczx971/files/styles/crop_thumbnail/public/2023-02/Chocapic_1.png?itok=EN2gKDv5",
            name: "cereal",
            price: "9000",
            description:
              "CEREAL CHOCAPIC NESTLE x250gr",
            stock: 20,
          },
          {
            id: "7",
            image:
              "https://lh3.googleusercontent.com/az9d9MWbkTJ5YrIb1-bR5xbDoZ5C8QEqJNcwPF7-WAB1opG3E1qSo053fbQR31yLtLXiVSYlBgPt7wslVseYVSYb9GeDfXhrOKg",
            name: "Papas Margarita - Pollo",
            price: "2160",
            description:
              "Pasabocas Margarita Papas Fritas Pollo Paquete x 30 gr",
            stock: 20,
          },
          {
            id: "8",
            image:
              "https://lh3.googleusercontent.com/az9d9MWbkTJ5YrIb1-bR5xbDoZ5C8QEqJNcwPF7-WAB1opG3E1qSo053fbQR31yLtLXiVSYlBgPt7wslVseYVSYb9GeDfXhrOKg",
            name: "Papas Margarita - Pollo",
            price: "2160",
            description:
              "Pasabocas Margarita Papas Fritas Pollo Paquete x 30 gr",
            stock: 20,
          },
          {
            id: "9",
            image:
              "https://copservir.vtexassets.com/arquivos/ids/770822/PAPA-MARGARITA-NATURAL_F.png?v=637951123764830000",
            name: "Papas Margarita - Natural",
            price: "2700",
            description: "Pasabocas paquete x 30 grs Papa margarita natural",
            stock: 20,
          },
          
          {
            id: "10",
            image:
              "https://lh3.googleusercontent.com/az9d9MWbkTJ5YrIb1-bR5xbDoZ5C8QEqJNcwPF7-WAB1opG3E1qSo053fbQR31yLtLXiVSYlBgPt7wslVseYVSYb9GeDfXhrOKg",
            name: "Papas Margarita - Pollo",
            price: "2160",
            description:
              "Pasabocas Margarita Papas Fritas Pollo Paquete x 30 gr",
            stock: 20,
          },
          {
            id: "11",
            image:
              "https://www.nestle-cereals.com/co/sites/g/files/qirczx971/files/styles/crop_thumbnail/public/2023-02/Chocapic_1.png?itok=EN2gKDv5",
            name: "cereal",
            price: "9000",
            description:
              "CEREAL CHOCAPIC NESTLE x250gr",
            stock: 20,
          },
          {
            id: "12",
            image:
              "https://copservir.vtexassets.com/arquivos/ids/770822/PAPA-MARGARITA-NATURAL_F.png?v=637951123764830000",
            name: "Papas Margarita - Natural",
            price: "2700",
            description: "Pasabocas paquete x 30 grs Papa margarita natural",
            stock: 20,
          },
          {
            id: "13",
            image:
              "https://www.nestle-cereals.com/co/sites/g/files/qirczx971/files/styles/crop_thumbnail/public/2023-02/Chocapic_1.png?itok=EN2gKDv5",
            name: "cereal",
            price: "9000",
            description:
              "CEREAL CHOCAPIC NESTLE x250gr",
            stock: 20,
          },
          {
            id: "14",
            image:
              "https://lh3.googleusercontent.com/az9d9MWbkTJ5YrIb1-bR5xbDoZ5C8QEqJNcwPF7-WAB1opG3E1qSo053fbQR31yLtLXiVSYlBgPt7wslVseYVSYb9GeDfXhrOKg",
            name: "Papas Margarita - Pollo",
            price: "2160",
            description:
              "Pasabocas Margarita Papas Fritas Pollo Paquete x 30 gr",
            stock: 20,
          },
        ];
        commit("SET_PRODUCTSLIST", data);
      } catch (error) {
        dispatch("setCenterResponseError", new Error("Not found products"));
      }
    },
    async actionCarBuy({ commit, dispatch }, { value }) {
      try {
        const product = JSON.parse(JSON.stringify(value));
        commit("SET_PRODUCTCAR", product);
        commit("SET_TOTAL", product);
      } catch (error) {
        dispatch("setCenterResponseError", new Error("Not found products"));
      }
    },
  },
  getters: {
    getProductId: (state) => (id) => {
      return state.productsList.find((item) =>item.id === id);
    },
    getCarBuy: (state) => {
      return state.carBuy;
    },
    getTotalPrice: (state) => {
        return state.total;
    }
  },
};

export default products;
