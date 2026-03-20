const template = `
<div :class="['mouse', isMobile.value ? 'mouse--mobile' : 'mouse--web']">
  <template v-if="!isMobile.value">
    <ul>
      <li v-for="mouse in panel['downloads']" :key="mouse.title">
        <figure>
          <img
            :src="mouse.image"
            :alt="mouse.title"
          />
        </figure>
        <a href="https://www.msi.com/images/front/gmouse/pn.jpg" target="_blank" rel="noopener noreferrer">{{ mouse.title }}</a>
        <div>
          <a v-if="mouse.driver" :href="mouse.driver" target="_blank" rel="noopener noreferrer"><span class="icon-msi-download2"></span>{{ panel['driver'] }}</a>
          <a v-if="mouse.manual" :href="mouse.manual" target="_blank" rel="noopener noreferrer"><span class="icon-msi-download2"></span>{{ panel['manual'] }}</a>
        </div>
      </li>
    </ul>
  </template>
  <template v-else>
    <ul>
      <li v-for="mouse in panel['downloads']" :key="mouse.title">
        <figure>
          <img
            :src="mouse.image"
            :alt="mouse.title"
          />
        </figure>
        <div>
          <a href="https://www.msi.com/images/front/gmouse/pn.jpg" target="_blank" rel="noopener noreferrer">{{ mouse.title }}</a>
          <a v-if="mouse.driver" :href="mouse.driver" target="_blank" rel="noopener noreferrer"><span class="icon-msi-download2"></span>{{ panel['driver'] }}</a>
          <a v-if="mouse.manual" :href="mouse.manual" target="_blank" rel="noopener noreferrer"><span class="icon-msi-download2"></span>{{ panel['manual'] }}</a>
        </div>
      </li>
    </ul>
  </template>
</div>
`
export default {
  name: 'GamingMouseDriverPanel',
  template,
  props: {
    panel: Object
  },
  inject: ['isMobile']
}
