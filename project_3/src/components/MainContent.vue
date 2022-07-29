<template>
  <main>
    <div class="container main__container">
      <HeaderBar
        @fetchLatest="fetchLatest"
        @fetchRandom="fetchRandom"
        @fetchTop="fetchTop"
      />
      <div class="search-wrapper">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        v-model="query"
        @keypress="fetchSearch"
      />
      </div>
      <input
        v-model="order"
        type="radio"
        value="desc"
        checked
        name="order"
        id="desc"
      />
      <label for="desc">descending</label>
      <input v-model="order" type="radio" value="asc" name="order" id="asc" />
      <label for="asc">Ascending</label>
      <div class="categories-block">
        <input
          v-model="checkedGeneral"
          type="checkbox"
          id="general"
          name="general"
          value="general "
        />
        <label for="general">General</label>
        <input
          v-model="checkedAnime"
          type="checkbox"
          id="anime"
          name="anime"
          value="anime"
        />
        <label for="anime">Anime</label>
        <input
          v-model="checkedPeople"
          type="checkbox"
          id="people"
          name="people"
          value="people"
        />
        <label for="people">People</label>
        <select v-model="sort">
          <option value="relevance">Relevance</option>
          <option value="random">Random</option>
          <option value="date_added">Date added</option>
          <option value="views">Views</option>
          <option value="favorites">Favorites</option>
          <option value="toplist">Toplist</option>
          <option value="hot">Hot</option>
        </select>
        <div class="top-range" v-if="sort == 'toplist'">
          <select v-model="topSort">
            <option value="1d">Last day</option>
            <option value="3d">Last 3 days</option>
            <option value="1w">Last week</option>
            <option value="1m">Last month</option>
            <option value="3m">Last 3 month</option>
            <option value="1y">Last year</option>
          </select>
        </div>
        <ResBtn @onChangeAtleast="changeAtleast" @onChangeExact="changeExact"/>
        <div class="images-grid">
        <div class="images-block">
          <div v-for="wallpaper in start" :key="wallpaper.id" class="random">
            <img :src="wallpaper.path" alt="" />
          </div>
        </div>
        <div class="images-block">
          <div v-for="wallpaper in start" :key="wallpaper.id" class="toplist">
            <img :src="wallpaper.path" alt="" />
          </div>
        </div>
        <div class="images-block">
          <div v-for="wallpaper in start" :key="wallpaper.id" class="latest">
            <img :src="wallpaper.path" alt="" />
          </div>
        </div>
        <div class="images-block">
          <div
            v-for="wallpaper in filteredSearch"
            :key="wallpaper.id"
            class="tag"
          >
            <img :src="wallpaper.path" alt="" />
          </div>
        </div>
      </div>
      </div>
      <div v-if="start.length < 1 && filteredSearch.length < 1" class="main-content" >
        <span class="test">Kekis Kekis</span>
      </div>
    </div>
    Test: {{ resValue }}{{ exactRes }} {{openRes}}
  </main>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import ResBtn from "./ResBtn.vue";
export default {
  components: {
    HeaderBar,
    ResBtn,
  },
  name: "MainContent",
  props: [],
  data() {
    return {
      query: "",
      atleast: false,
      exact: false,
      resValue: "",
      exactRes: [],
      openRes: false,
      checkedGeneral: true,
      checkedAnime: true,
      checkedPeople: true,
      sort: "date_added",
      order: "desc",
      topSort: "1m",
      start: [],
      filteredSearch: [],
      search: "https://wallhaven.cc/api/v1/search",
    };
  },

  methods: {
    changeAtleast (value) {
      this.resValue = value;
      this.resType = '1'
    },
    changeExact (value) {
      this.resType = '2'
      this.exactRes = value;
    },
    fetchTop() {
      this.start = "";
      this.filteredSearch = "";
      this.sort = "toplist";
      fetch(`${this.search}?sorting=toplist`)
        .then((res) => res.json())
        .then((json) => {
          this.start = json.data;
        });
    },
    fetchRandom() {
      this.start = "";
      this.filteredSearch = "";
      this.sort = "random";
      fetch(`${this.search}?sorting=random`)
        .then((res) => res.json())
        .then((json) => {
          this.start = json.data;
        });
    },
    fetchLatest() {
      this.start = "";
      this.filteredSearch = "";
      this.sort = "date_added";
      fetch(`${this.search}?sorting=date_added`)
        .then((res) => res.json())
        .then((json) => {
          this.start = json.data;
        });
    },

    fetchSearch(e) {
      let general = this.checkedGeneral;
      let anime = this.checkedAnime;
      let people = this.checkedPeople;
      let categoriesArr = [general, anime, people];
      general === false ? (categoriesArr[0] = 0) : (categoriesArr[0] = 1);
      anime === false ? (categoriesArr[1] = 0) : (categoriesArr[1] = 1);
      people === false ? (categoriesArr[2] = 0) : (categoriesArr[2] = 1);
      if (this.resType === '2') {
        this.resValue = "";
      }
      if (this.resType === '1') {
        this.exactRes = [];
      }
      let categories = categoriesArr.join("");
      if (e.key == "Enter") {
        this.start = "";
        this.filteredSearch = "";
        fetch(
          `${this.search}?q=${this.query}&categories=${categories}&atleast=${this.resValue}&resolutions=${this.exactRes}&sorting=${this.sort}&topRange=${this.topSort}&order=${this.order}`
        )
          .then((res) => res.json())
          .then((json) => {
            this.filteredSearch = json.data;
          });
      }
    },
  },
  computed: {},
  watch: {
    sort(value) {
      console.log(value);
      this.sort = value;
    },
    order(value) {
      console.log(value);
      this.order = value;
    },
    topSort(value) {
      console.log(value);
      this.topSort = value;
    },
    
  },
};
</script>

<style scoped>
.images-block {
  display: grid;
  margin: 0 auto;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.search-bar {
  color: white;
  padding: 10px;
  background-color: #212121;
  width: 400px;
}
.search-wrapper {
  padding-top: 40px;
}
.test {
  font-size: 300px;
}
</style>
