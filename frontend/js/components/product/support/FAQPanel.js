const template = `
<div class="faq">
  <ul v-if="panel['downloads']['faq_list'].length > 0">
    <li v-for="faq in panel['downloads']['faq_list']" :key="faq.download_id">
      <button type="button" class="faq__question" @click="openFaq" >
        <span class="icon-msi-add"></span>
        <span v-html="faq.faq_question"></span>
      </button>
      <div class="faq__answer">
        <p v-html="faq.faq_answer"></p>
        <a :href="faq.faq_learn_more">{{ panel['downloads']['faq_learn_more'] }}</a>
      </div>
    </li>
  </ul>
  <p v-else class="faq__notification">{{ panel['downloads']['faq_no_result'] }}</p>
  <a href="/faq" class="more"><span class="icon-msi-add"></span>{{ panel['downloads']['faq_more'] }}</a>
</div>
`;
export default {
  name: "FAQPanel",
  template,
  props: {
    panel: Object
  },
  methods: {
    openFaq(event) {
      event.currentTarget.classList.toggle('faq__question--active');
      event.currentTarget.children[0].className === 'icon-msi-add' ? event.currentTarget.children[0].className = 'icon-msi-less' : event.currentTarget.children[0].className = 'icon-msi-add';
      event.currentTarget.nextElementSibling.classList.toggle('faq__answer--active');
    }
  }
};