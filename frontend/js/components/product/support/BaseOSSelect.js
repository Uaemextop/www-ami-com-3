const template = `
  <form class="select">
    <label for="system">{{ translations.value.table.downloadselectos }}:</label>
    <div>
      <select aria-label="Select operating system" id="system" @change="$emit('update:os', $event.target.value)">
        <option v-for="option in osArr" :key="option" :value="option" :selected="option === os">
          {{ option }}
        </option>
      </select>
      <span class="icon-msi-down"></span>
    </div>
  </form>
`;
export default {
  name: "BaseOSSelect",
  template,
  props: {
    osArr: Array,
    os: String,
    panel: Object
  },
  inject: ['translations'],
  emits: ['update:os']
};