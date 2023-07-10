import CartPymentsVue from "../../components/CartPyments.vue";
import { mount } from "@vue/test-utils";
import store from "../../store/index.js";
import { addButton } from "../utils/operations";

describe("DetailProduct Test compontent", () => {
  test("total price", async () => {
    await store.dispatch("products/getProductsList");
    await addButton();
    const wrapper = mount(CartPymentsVue, {
      global: {
        plugins: [store],
      },
    });
    
    const total = wrapper.find(".totalPriceCar");
    const totalprice = store.getters["products/getTotalPrice"];

    expect(total.text()).toEqual(`$${totalprice}`);
  });

  test("cuantity CarbuyProduct 1 with id:1", async () => {
    await store.getters['products/getCarBuy']
    const wrapper = await mount(CartPymentsVue, {
      global: {
        plugins: [store],
      },
    });

    

    const textCuantity = wrapper.find(".puto");
    wrapper.vm

    expect(textCuantity.text()).toContain("2");
  });
});
