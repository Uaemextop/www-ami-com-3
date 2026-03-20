const template = `
<div class="tabs">
  <button
    type="button"
    v-for="tab in tabs"
    :key="tab"
    class="tab"
    :class="{ 'tab--active': tab.title === currentTab.title }"
    @click="changeCurrentTab(tab.type, tab.title)"
  >
    <div :class="icons[tab.type]"></div>
    {{ tab.title }}
  </button>
</div>
<h2>{{ currentTab.title }}</h2>
`;
export default {
  name: "MainWebTabs",
  template,
  props: {
    tabs: Array,
    currentTab: Object,
    changeCurrentTab: Function
  },
  data() {
    return {
      icons: {
        "downloads": "icon-msi-download2",
        "documentation": "icon-msi-docs",
        "faq": "icon-msi-faq",
        "warranty": "icon-msi-warranty",
        "compatibility": "icon-msi-docs"
      }
    }
  }
};