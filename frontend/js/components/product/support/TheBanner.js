const template = `
<template v-if="banner && translations">
  <section class="banner">
    <div class="banner__container">
      <figure>
        <img
          width="250"
          :src="banner.pictures"
          :alt="banner.title"
        />
      </figure>
      <div class="container">
        <slot name="support-for"></slot>
        <h2 v-html="selectedProduct"></h2>
        <slot name="tco"></slot>
        <form  v-if="options">
          <select aria-label="Select model" v-model="selected">
            <option disabled value="">{{ translations.value.select_model.select_model }}</option>
            <option v-for="(item, key) in options" :key="item" :value="key">{{ item }}</option>
          </select>
          <span class="icon-msi-down"></span>
        </form>
        <slot name="find-other-product"></slot>
      </div>
      <slot name="register-your-product"></slot>
    </div>
  </section>
</template>`;
import { api, getProduct, useFetch } from "./api.js";
export default {
  name: "TheBanner",
  template,
  inject: ["translations"],
  data() {
    return {
      banner: null,
      selected: "",
    };
  },
  watch: {
    selected(newProduct) {
      if (newProduct === window.location.search.split("=")[1]) return;
      if (this.banner.sku_product_list) {
        window.location.search = `sku_id=${newProduct}`;
      } else {
        window.location.search = `sub_product=${newProduct}`;
      }
    },
  },
  computed: {
    selectedProduct() {
      if (window.location.search) {
        let urlParams = new URLSearchParams(window.location.search);
        return (
          this.banner.sub_product_list[urlParams.get("sub_product")] ||
          this.banner.sku_product_list[urlParams.get("sku_id")]
        );
      }
      if (!this.banner.sub_product_list && !this.banner.sku_product_list) {
        return this.banner.title;
      }
      return this.translations.value.select_model.please_select_your_model;
    },
    options() {
      if (!this.banner.sku_product_list) {
        return this.banner.sub_product_list;
      }
      return this.banner.sku_product_list;
    },
  },
  created() {
    let url = `${api.nonSku.banner}${getProduct.value}`;
    useFetch(url).then((data) => {
      this.banner = data;
      // 根據 URL 參數設定初始選擇的值
      this.setInitialSelection();
    });
  },
  methods: {
    setInitialSelection() {
      if (window.location.search) {
        let urlParams = new URLSearchParams(window.location.search);
        let skuId = urlParams.get("sku_id");
        let subProduct = urlParams.get("sub_product");
        
        if (skuId && this.banner.sku_product_list) {
          this.selected = skuId;
        } else if (subProduct && this.banner.sub_product_list) {
          this.selected = subProduct;
        }
      }
    }
  },
};
