const template = `
<div class="recommend" v-html="panel.downloads"></div>
`;
export default {
  name: "RecommendPanel",
  template,
  props: {
    panel: Object
  }
};