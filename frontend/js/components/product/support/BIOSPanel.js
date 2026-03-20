const template = `
<BaseBadges v-if="badges.length > 1" :badges="badges" :current-badge="currentBadge" :change-current-badge="changeCurrentBadge"></BaseBadges>
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
      <span>{{ value.download_title || panel['downloads']['type_title'][0] }}</span>
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
  <BasePanel v-for="value in filterPanel" :key="value.download_id" :class="['card--mobile']">
    <template #spec>
      <div>
        <span>{{ translations.value.table.Title }}</span>
        <span>{{ value.download_title || panel['downloads']['type_title'][0] }}</span>
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
`;
import BaseBadges from './BaseBadges.js';
import BasePanel from './BasePanel.js';
import BaseSupplement from './BaseSupplement.js?ver=2025090503';
import BaseYoutube from './BaseYoutube.js';
export default {
  name: "BIOSPanel",
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