const template = `
<div class="info">
  <span class="icon-msi-info"></span>
  <div class="red" v-html="note"></div>
</div>
`;
export default {
  name: "BaseNote",
  template,
  props: {
    note: String,
  },
};
