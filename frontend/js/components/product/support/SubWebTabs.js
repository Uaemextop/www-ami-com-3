const template = `
<div class="subTabs">
  <button
    type="button"
    v-for="tab in tabs"
    :key="tab.title"
    class="subTab"
    :class="{ 'subTab--active': tab.title === currentTab.title }"
    @click="changeCurrentTab(tab.type, tab.title)"
  >
    {{ tab.title }}
  </button>
</div>
`;
export default {
  name: "SubWebTabs",
  template,
  props: {
    tabs: Array,
    currentTab: Object,
    changeCurrentTab: Function,
  },
};
