const template = `
<template v-if="this.panel.category === 'vga'">
  <template v-for="value in filterPanel" :key="value">
    <div style="margin-block-start: 36px; margin-block-end: 86px;" v-html='value.downloads_html'></div>
  </template>
</template>
<template v-else>
  <BaseBadges :badges="panel['downloads']['type_title']" :current-badge="currentBadge" :change-current-badge="changeCurrentBadge"></BaseBadges>
  <template v-if="!isMobile.value">
    <BasePanel v-for="value in filterPanel" :key="value.download_id" :class="['card--web']">
      <template #spec>
        <span>{{ translations.value.table.Title }}</span>
        <span>{{ translations.value.table.Version }}</span>
        <span>{{ translations.value.table.ReleaseDate }}</span>
        <span>{{ translations.value.table.FileSize }}</span>
        <div class="download">
          <a :href="value.download_url" :data-id="value.download_id" @click="setTime"><span class="icon-msi-download2"></span>{{ translations.value.table.Download }}</a>
          <time :datetime="getTime(value.download_id)">{{ getTime(value.download_id) }}</time>
        </div>
        <span>{{ value.download_title }}</span>
        <span>{{ value.download_version }}</span>
        <span>{{ value.download_release }}</span>
        <span>{{ (value.download_size / 1024000).toFixed(2) + " MB" }}</span>
      </template>
      <template #supplement v-if="value.download_description || value.download_note || value.download_sha256">
        <BaseSupplement :sha256="value.download_sha256" :description="value.download_description" :note="value.download_note"></BaseSupplement>
      </template>
      <template #youtubeIframe v-if="value.youtube_link">
        <BaseYoutube :title="value.youtube_title" :link="value.youtube_link"></BaseYoutube>
    </template>
    </BasePanel>
  </template>
  <template v-else>
    <BasePanel v-for="value in filterPanel" :key="value.download_id" :key="value.download_id" :class="['card--mobile']">
      <template #spec>
        <div>
          <span>{{ translations.value.table.Title }}</span>
          <span>{{ value.download_title }}</span>
        </div>
        <div>
          <span>{{ translations.value.table.Version }}</span>
          <span>{{ value.download_version }}</span>
        </div>
        <div>
        <span>{{ translations.value.table.ReleaseDate }}</span>
          <span>{{ value.download_release }}</span>
        </div>
        <div>
          <span>{{ translations.value.table.FileSize }}</span>
          <span>{{ (value.download_size / 1024000).toFixed(2) + " MB" }}</span>
        </div>
        <a class="spec__download spec__download--btn" :href="value.download_url"><span class="icon-msi-download2"></span>{{ translations.value.table.Download }}</a>
      </template>
      <template #supplement v-if="value.download_description || value.download_note || value.download_sha256">
        <BaseSupplement :sha256="value.download_sha256" :description="value.download_description" :note="value.download_note"></BaseSupplement>
      </template>
      <template #youtubeIframe v-if="value.youtube_link">
        <BaseYoutube :title="value.youtube_title" :link="value.youtube_link"></BaseYoutube>
    </template>
    </BasePanel>
  </template>
</template>
`;
import BaseBadges from './BaseBadges.js';
import BasePanel from './BasePanel.js';
import BaseSupplement from './BaseSupplement.js?ver=2025090503';
import BaseYoutube from './BaseYoutube.js';
export default {
  name: "DriverPanel",
  template,
  props: {
    panel: Object
  },
  components: {
    BaseBadges,
    BasePanel,
    BaseSupplement,
    BaseYoutube
  },
  inject: ['isMobile', 'os', 'translations'],
  data() {
    return {
      currentBadge: null
    }
  },
  computed: {
    filterPanel() {
      if (this.panel.category === 'vga') {
        // vga沒有os; 以及需要移除跳脫字元
        this.panel['downloads'][this.currentBadge].forEach(value => value.downloads_html = value.downloads_html.replace(/\\/g, ''));
        return this.panel['downloads'][this.currentBadge];
      }
      return this.panel['downloads'][this.currentBadge].filter(item => item.os.includes(this.os.value));
    }
  },
  methods: {
    changeCurrentBadge(badgeName) {
      this.currentBadge = badgeName;
    },
    setTime(event) {
      let now = new Date(),
        timeStamp = now.toLocaleString('ja-JP'),
        id = event.currentTarget.dataset.id,
        key = `download-date-${id}`;
      window.localStorage.setItem(key, timeStamp);
      event.target.nextElementSibling.textContent = timeStamp;
      event.target.nextElementSibling.setAttribute('datetime', timeStamp);
    },
    getTime(id) {
      return window.localStorage.getItem(`download-date-${id}`);
    }
  },
  created() {
    this.currentBadge = this.panel['downloads']['type_title'][0];
  }
};