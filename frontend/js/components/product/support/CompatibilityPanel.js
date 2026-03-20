const template = `
<BaseKanban v-if="note">
  <template #note>
    <BaseNote :class="note && os ? 'info--border': null" :note="note"></BaseNote>
  </template>
</BaseKanban>
<BaseBadges v-if="badges.length > 1" :badges="badges" :titles="titles" :current-badge="currentBadge" :change-current-badge="changeCurrentBadge"></BaseBadges>
<div class="compatibilityOperation">
<div v-if="filterSet" class="filter">
    <div id="mbfilter">
    <details class="" v-if="filterSet['Processor']">
    <summary>Processor</summary>
    <ul>
    <li v-for="(value,subindex) in filterSet['Processor']">
        <label><input type="checkbox" :name="index" v-model="filter.Processor" :value="value" />{{value}}</label>
    </li>
    </ul>
    </details>
    <details class="" v-if="filterSet['Core Name']">
    <summary>Core Name</summary>
    <ul>
    <li v-for="(value,subindex) in filterSet['Core Name']">
        <label><input type="checkbox" :name="index" v-model="filter.Core" :value="value" />{{value}}</label>
    </li>
    </ul>
    </details>
    <details class="" v-if="filterSet['CPU Speed']">
    <summary>CPU Speed</summary>
    <ul>
    <li v-for="(value,subindex) in filterSet['CPU Speed']">
        <label><input type="checkbox" :name="index" v-model="filter.Speed" :value="value" />{{value}}</label>
    </li>
    </ul>
    </details>
    <details class="" v-if="filterSet['Wattage']">
    <summary>Wattage</summary>
    <ul>
    <li v-for="(value,subindex) in filterSet['Wattage']">
        <label><input type="checkbox" :name="index" v-model="filter.Wattage" :value="value" />{{value}}</label>
    </li>
    </ul>
    </details>
    <button class="btn btn--primary" @click="setFilter">Apply</button>
    </div>
  </div>

  <div v-if="currentBadge !== 'testReport'" class="search">
    <label class="icon-msi-search" for="compatibilitySearch"></label>
    <input type="search" id="compatibilitySearch" v-model.lazy="search">
  </div>
  
</div>

<template v-if="total">
  <template v-if="!isMobile.value">
    <div class="compatibility">
      <table>
        <thead>
          <tr>
            <th v-for="(value, index) in cols" :key="index" class="col" :class="sorted === value.replace(/_/g, ' ') ? 'col--sorted' : '' " @click="sortField">{{ value.replace(/_/g, ' ') }}<span class="icon-msi-sort"></span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, indexRow) in rows" :key="indexRow" :class="['card--web']">
            <td v-for="(key, indexCol) in cols" :key="indexCol" v-html="value[key]" :class="{customTd:currentTab === 'mem'}"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <template v-else>
    <BasePanel v-for="(value, indexRow) in rows" :key="indexRow" :class="['card--mobile']">
      <template #spec>
        <div v-for="(key, index) in cols" :key="index">
          <span>{{ key.replace(/_/g, ' ') }}</span>
          <span v-html="value[key]"></span>
        </div>
      </template>
    </BasePanel>
  </template>
</template>
<template v-else>
  <div class="notification" v-html="table.downloads.no_result"></div>
</template>
`;
import BaseKanban from "./BaseKanban.js";
import BaseNote from "./BaseNote.js";
import BaseBadges from "./BaseBadges.js";
import BasePanel from "./BasePanel.js";
// import Pagination from "../../award/Pagination.js";
export default {
  name: "CompatibilityPanel",
  template,
  props: {
    panel: Object,
    currentTab: {
      type: String,
      default: "",
    },
  },
  components: {
    BaseKanban,
    BaseNote,
    BaseBadges,
    BasePanel,
  },
  inject: ["isMobile"],
  data() {
    return {
      search: "",
      filterSet: "",
      filter: { Processor: [], Core: [], Speed: [], Wattage: [] },
      table: null,
      page: null,
      perPage: null,
      total: null,
      currentBadge: null,
      limit: 2000,
      // limits: [10, 20, 50],
      column: null,
      order: null,
      sorted: null,
    };
  },
  computed: {
    badges() {
      return this.panel["downloads"]["type_title"];
    },
    titles() {
      let obj = Object.entries(this.panel.downloads),
        titles = {};
      for (const [key, value] of obj) {
        if (key !== "type_title") {
          titles[key] = value["popup"];
        }
      }
      return titles;
    },
    note() {
      if (this.panel.hasOwnProperty("notes")) {
        const isShowString = typeof this.panel["notes"] === "string";
        return isShowString
          ? this.panel["notes"]
          : this.panel["notes"][this.currentBadge];
      }
      return null;
    },
    cols() {
      return Object.keys(this.table["downloads"][this.currentBadge]["list"][0]);
    },
    rows() {
      return this.table["downloads"][this.currentBadge]["list"];
    },
    cpuProcessorURLParams() {
      const cpuProcessorParams = this.filter.Processor ?? [];
      return cpuProcessorParams.reduce((init, current) => {
        return init + `&filters[Processor][]=${current}`;
      }, "");
    },
    cpuCoreNameURLParams() {
      const coreNameParams = this.filter.core ?? [];
      return coreNameParams.reduce((init, current) => {
        return init + `&filters[Core Name][]=${current}`;
      }, "");
    },
    cpuSpeedURLParams() {
      const cpuSpeedParams = this.filter.speed ?? [];
      return cpuSpeedParams.reduce((init, current) => {
        return init + `&filters[CPU Speed][]=${current}`;
      }, "");
    },
    cpuWattageURLParams() {
      const cpuWattageParams = this.filter.Wattage ?? [];
      return cpuWattageParams.reduce((init, current) => {
        return init + `&filters[Wattage][]=${current}`;
      }, "");
    },
    allFilterURLParams() {
      return `${this.cpuProcessorURLParams}${this.cpuCoreNameURLParams}${this.cpuSpeedURLParams}${this.cpuWattageURLParams}`;
    },
  },
  watch: {
    search(newValue, oldValue) {
      if (newValue.length === 0 && oldValue.length === 0) return;
      if (newValue.length === 0 && this.limit === 10 && this.order === null) {
        this.replaceData(this.panel);
        return;
      }
      this.fetchTable();
    },
    limit(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.fetchTable();
    },
  },
  methods: {
    setFilter(event) {
      // this.filter = event.target.value;
      this.fetchTable();
    },
    changeCurrentBadge(badgeName) {
      if (this.currentBadge !== badgeName) {
        this.replaceData(this.panel);
        this.currentBadge = badgeName;
        this.search = "";
        this.limit = 10;
        this.column = null;
        this.order = null;
        this.filter = { Processor: [], Core: [], Speed: [], Wattage: [] };
      }
    },
    replaceData(obj) {
      this.table = obj;
      this.currentBadge =
        this.currentBadge || this.table["downloads"]["type_title"][0];
      this.page = this.table["downloads"][this.currentBadge]["page"];
      this.perPage = this.table["downloads"][this.currentBadge]["per_page"];
      this.total = this.table["downloads"][this.currentBadge]["total"];
      this.filterSet = this.table["downloads"][this.currentBadge]["filter"];
      // console.log(this.filter);
    },
    async fetchTable(page = 1) {
      try {
        let id = this.table["downloads"][this.currentBadge].hasOwnProperty("id")
          ? `&id=${this.table["downloads"][this.currentBadge]["id"]}`
          : "";
        let limit = this.limit ? `&per_page=${this.limit}` : "";
        let search = this.search ? `&keyword=${this.search}` : "";
        // let filter = this.filter ? `&filter=${this.filter}` : "";
        let order = this.order ? `&order=${this.order}` : "";
        let column = this.column ? `&column=${this.column}` : "";
        let url = `${this.panel.api}&page=${page}${limit}${id}${search}${this.allFilterURLParams}${order}${column}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        let data = await res.json();
        this.replaceData(data.result);
      } catch (err) {
        console.error(err);
      }
    },
    sortField(event) {
      if (this.sorted !== null && this.sorted !== event.target.textContent) {
        this.order = null;
      }
      this.sorted = event.target.textContent;
      this.column = encodeURIComponent(event.target.textContent);
      if (this.order === null || this.order === "asc") {
        this.order = "desc";
      } else {
        this.order = "asc";
      }
      this.fetchTable();
    },
    turnPage(page) {
      if (page === this.page) return;
      this.fetchTable(page);
    },
  },
  created() {
    this.replaceData(this.panel);
  },
};
