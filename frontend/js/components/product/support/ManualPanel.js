const template = `
<BaseBadges v-if="badges.length > 1" :badges="badges" :current-badge="currentBadge" :change-current-badge="changeCurrentBadge"></BaseBadges>
<template v-if="!isMobile.value">
  <table class="documentation documentation--quickGuide">
    <thead>
      <tr>
        <th>{{ translations.value.table.Title }}</th>
        <th>{{ translations.value.table.Language }}</th>
        <th>{{ translations.value.table.FileSize }}</th>
        <th>{{ translations.value.table.Download }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="value in filterPanel" :key="value.download_id" :class="['card--web']">
        <td>{{ value.download_title || panel['downloads']['type_title'][0] }}</td>
        <td>{{ value.language_title }}</td>
        <td>{{ (value.download_size / 1024000).toFixed(2) + " MB" }}</td>
        <td>
          <a :href="value.download_url"><span class="icon-msi-download2"></span><span>{{ translations.value.table.Download }}</span></a>
        </td>
      </tr>
    </tbody>
  </table>

</template>
<template v-else>
  <BasePanel v-for="value in filterPanel" :key="value.download_id" :class="['card--mobile']">
    <template #spec>
      <div>
        <span>{{ translations.value.table.Title }}</span>
        <span>{{ value.download_title || panel['downloads']['type_title'][0] }}</span>
      </div>
      <div>
        <span>{{ translations.value.table.Language }}</span>
        <span>{{ value.language_title }}</span>
      </div>
      <div>
        <span>{{ translations.value.table.FileSize }}</span>
        <span>{{ (value.download_size / 1024000).toFixed(2) + " MB" }}</span>
      </div>
      <div>
        <span>{{ translations.value.table.Download }}</span>
        <a :href="value.download_url"><span class="icon-msi-download2"></span><span>{{ translations.value.table.Download }}</span></a>
      </div>
    </template>

  </BasePanel>
</template>
`;
import BaseBadges from './BaseBadges.js';
import BasePanel from './BasePanel.js';
export default {
  name: "ManualPanel",
  template,
  props: {
    panel: Object
  },
  components: {
    BaseBadges,
    BasePanel,
  },
  inject: ['isMobile', 'translations'],
  data() {
    return {
      currentBadge: null
    }
  },
  computed: {
    badges() {
      return this.panel['downloads']['type_title'];
    },
    filterPanel() {
      return this.panel['downloads'][this.currentBadge];
    }
  },
  methods: {
    changeCurrentBadge(badgeName) {
      this.currentBadge = badgeName;
    }
  },
  created() {
    this.currentBadge = this.panel['downloads']['type_title'][0];
  }
};