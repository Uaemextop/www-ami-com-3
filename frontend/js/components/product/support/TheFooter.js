const template = `
<section class="footer">
  <div class="content">
    <div class="container">
      <h2>{{ translations.value.page_footer.Need_More_Help }}</h2>
      <p v-html="translations.value.page_footer.How_can_we_help_content"></p>
    </div>
    <nav class="container">
      <a v-for="link in translations.value.page_footer.support_list" :key="link.title" :href="link.url">
        <img width="60" height="60" :src="link.image" :alt="link.title" />
        {{ link.title }}
        <p>{{ link.content }}</p>
      </a>
    </nav>
  </div>
</section>`;
export default {
  name: "TheFooter",
  template,
  inject: ['translations']
};
