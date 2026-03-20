const template = `
<div class="warranty">
  <BaseBadges :badges="badges" :current-badge="currentBadge" :change-current-badge="changeCurrentBadge"></BaseBadges>
  <article class="article" v-html="content"></article>
</div>
`;
import { api, getProduct, useFetch } from "./api.js";
import BaseBadges from './BaseBadges.js';
export default {
  name: "WarrantyPanel",
  template,
  props: {
    panel: Object
  },
  components: {
    BaseBadges
  },
  data() {
    return {
      currentBadge: null,
      content: this.panel.downloads.content.content
    }
  },
  computed: {
    badges() {
      return this.panel.downloads.sub_category;
    }
  },
  methods: {
    async changeCurrentBadge(badgeName) {
      this.currentBadge = badgeName;
      let url = `${api.nonSku.panel}${getProduct.value}&type=warranty&url=${badgeName}`;
      this.content = await useFetch(url);
      this.content = this.content.downloads.content.content;
    }
  },
  created() {
    this.currentBadge = this.panel['downloads']['sub_category'][0]['url'];
  }
};