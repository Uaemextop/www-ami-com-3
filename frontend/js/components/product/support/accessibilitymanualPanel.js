const template = `
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
      <tr v-for="value in panel['downloads'][panel['downloads']['type_title']]" :key="value.download_id" :class="['card--web']">
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
  <BasePanel v-for="value in panel['downloads'][panel['downloads']['type_title']]" :key="value.download_id" :class="['card--mobile']">
    <template #spec>
      <div>
        <span>{{ translations.value.table.Title }}</span>
        <span>{{ value.download_title || panel['downloads']['type_title'][0] }}</span>
      </div>
      <div>
        <span>Language</span>
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
import BasePanel from './BasePanel.js';
export default {
  name: "accessibilitymanualPanel",
  template,
  props: {
    panel: Object
  },
  components: {
    BasePanel
  },
  inject: ['isMobile', 'translations']
};