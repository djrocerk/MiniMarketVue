import DetailProductVue from "../../components/DetailProduct.vue";
import { mount } from "@vue/test-utils";
import store from "../../store/index.js";
import { addButton } from "../utils/operations";

describe("DetailProduct Test compontent", () => {
  test("add button", async () => {
    await store.dispatch("products/getProductsList");
    const wrapper = await addButton();
    const textCuantity = wrapper.find(".itemCuantity");

    expect(textCuantity.text()).toContain("2");

  });
  
  test("remove button", async () => {
    await store.dispatch("products/getProductsList");
    const wrapper = mount(DetailProductVue, {
      global: {
        plugins: [store],
      },
      props: {
        id: '1',
      },
    });

    await wrapper.find('.remove').trigger('click');
    const textCuantity = wrapper.find(".element-cuantity");

    expect(textCuantity.text()).toContain("1");

  });
});
