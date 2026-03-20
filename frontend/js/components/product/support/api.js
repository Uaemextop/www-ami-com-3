const { computed, reactive } = Vue;

const api = reactive({
  sku: {
    banner: "/api/v1/product/support/banner?sku_id=",
    tabs: "/api/v1/product/support/tabs?sku_id=",
    os: "/api/v1/product/support/os?sku_id=",
    panel: "/api/v1/product/support/panel?sku_id="
  },
  nonSku: {
    banner: "/api/v1/product/support/banner?product=",
    tabs: "/api/v1/product/support/tabs?product=",
    os: "/api/v1/product/support/os?product=",
    panel: "/api/v1/product/support/panel?product="
  }
})

const getProduct = computed(() => {
  let pathArr = window.location.pathname.split("/"),
    product = pathArr[pathArr.length - 2];
  return product;
});
const getSubProduct = computed(() => new URLSearchParams(window.location.search).get("sub_product"));
const hasSku = computed(() => window.location.search.includes("sku_id"));
const getSku = computed(() => new URLSearchParams(window.location.search).get("sku_id"));

const useFetch = async url => {
  try {
    let res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return (await res.json()).result;
  } catch (err) {
    console.error(err);
  }
};
export { api, getProduct, getSubProduct, hasSku, getSku,  useFetch };