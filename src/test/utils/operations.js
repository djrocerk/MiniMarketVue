import { mount } from "@vue/test-utils";
import store from "../../store/index.js";
import DetailProductVue from "../../components/DetailProduct.vue";4

export const addButton = async () => {
  const wrapper = mount(DetailProductVue, {
    global: {
      plugins: [store],
    },
    props: {
      id: "1",
    },
  });

  await wrapper.find(".add").trigger("click");
  await wrapper.find(".add").trigger("click");

  return wrapper
};
