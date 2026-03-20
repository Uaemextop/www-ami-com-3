const template = `
<section class="mobile">
  <form>
    <select aria-label="Select model" @change="changeCurrentTab($event.target.value, $event.target.options[$event.target.selectedIndex].dataset.title)">
      <option v-for="tab in tabs" :key="tab" :value="tab.type" :data-title="tab.title" :selected="tab.type === currentTab.type">
        {{ tab.title }}
      </option>
    </select>
    <span class="icon-msi-down"></span>
  </form>
</section>
`;
export default {
  name: "BaseMobileTabs",
  template,
  props: {
    tabs: Array,
    currentTab: Object,
    changeCurrentTab: Function
  },
};