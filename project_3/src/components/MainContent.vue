<template>
  <main>
    <div class="container main__container" id="scrolltop">
      <HeaderBar
        @fetchLatest="fetchLatest"
        @fetchRandom="fetchRandom"
        @fetchTop="fetchTop"
      />
      <div class="search-section">
        <div class="search-wrapper">
          <input
            type="text"
            class="search-bar"
            placeholder="Search..."
            v-model="query"
            @keypress="fetchSearch"
          />
        </div>
        <div class="filters-flex">
          <div class="categories-block">
            <input
              v-model="checkedGeneral"
              type="checkbox"
              id="general"
              name="general"
              value="general "
              class="categories-checkbox"
            />
            <label for="general">General</label>
            <input
              v-model="checkedAnime"
              type="checkbox"
              id="anime"
              name="anime"
              value="anime"
              class="categories-checkbox"
            />
            <label for="anime">Anime</label>
            <input
              v-model="checkedPeople"
              type="checkbox"
              id="people"
              name="people"
              value="people"
              class="categories-checkbox"
            />
            <label for="people">People</label>
          </div>
          <div class="sort-filters">
            <div class="sort-block">
              <select v-model="sort" class="select-sort">
                <option value="relevance">Relevance</option>
                <option value="random">Random</option>
                <option value="date_added">Date added</option>
                <option value="views">Views</option>
                <option value="favorites">Favorites</option>
                <option value="toplist">Toplist</option>
                <option value="hot">Hot</option>
              </select>
            </div>
            <div class="top-range" v-if="sort == 'toplist'">
              <select class="top-range-sort" v-model="topSort">
                <option value="1d">Last day</option>
                <option value="3d">Last 3 days</option>
                <option value="1w">Last week</option>
                <option value="1m">Last month</option>
                <option value="3m">Last 3 month</option>
                <option value="1y">Last year</option>
              </select>
            </div>
            <div class="order">
              <input
                v-model="order"
                type="radio"
                value="desc"
                checked
                name="order"
                id="desc"
                class="order-input"
              />
              <label for="desc"
                >Descending
                <v-icon class="arrow-icon">mdi-arrow-up</v-icon></label
              >
              <input
                v-model="order"
                type="radio"
                value="asc"
                name="order"
                id="asc"
                class="order-input"
              />

              <label for="asc"
                >Ascending
                <v-icon class="arrow-icon">mdi-arrow-down</v-icon></label
              >
            </div>
          </div>
          <ResBtn
            @onChangeAtleast="changeAtleast"
            @onChangeExact="changeExact"
          />
        </div>
      </div>
      <div class="images-grid">
        <div v-if="filteredSearch.length > 0" class="images-block">
          <div
            v-for="wallpaper in filteredSearch"
            :key="wallpaper.id"
            class="tag"
          >
            <div class="modal" v-if="openModal">
              <div class="modal-container">
                <img
                  v-click-outside="closeModal"
                  class="modal-img"
                  :src="selectedImgPath"
                  alt=""
                />
              </div>
            </div>
            <v-img
              @click="imageModal(wallpaper.path)"
              @loadstart="imageCounter++"
              class="img"
              :src="wallpaper.path"
              alt=""
            />
          </div>
          <a v-if="page > 1" href="#scrolltop">
            <v-btn @click="fetchPrev" class="prevpage">Previous page</v-btn>
          </a>
          <a href="#scrolltop">
            <v-btn v-if="imageCounter > 23" @click="fetchNext" class="nextpage"
              >Next page</v-btn
            >
          </a>
        </div>
      </div>
    </div>
    <div v-if="startPage" class="main-content">
      <span class="main-content-text-one">Search and download</span>
      <span class="main-content-text-two">wallpapers for free</span>
      <Splide :options="options" >
    <SplideSlide>
      <img src="../assets/splide-img1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/splide-img2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/splide-img3.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/splide-img4.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide>
  
    </div>
    <div v-else-if="isLoading" class="loading-block">
      <div class="lds-dual-ring"></div>
    </div>
    <div class="not-found" v-else-if="!filteredSearch.length">
      <span class="not-found-text">Images for your request are not found</span>
      <span class="not-found-text">Try again!</span>
    </div>
    
    
  </main>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import ResBtn from "./ResBtn.vue";
import { Splide, SplideSlide} from '@splidejs/vue-splide';
export default {
  components: {
    Splide,
    SplideSlide,
    HeaderBar,
    ResBtn,
  },
  name: "MainContent",
  props: [],
  data() {
    return {
      options: {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 4000,
        width: '100vw',
        height: '80vh',
        pauseOnHover: false,
        rewind: true,
        arrows: false,
        pagination: false,
      },
      startPage: true,
      isLoading: false,
      notFound: false,
      imageCounter: 0,
      query: "",
      openModal: false,
      selectedImgPath: "",
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
      page: 1,
      queryValue: "",
      filteredSearch: [],
      arrowIcon: false,
      search: "https://wallhaven.cc/api/v1/search",
    };
  },

  methods: {
    imageModal(imgPath) {
      this.selectedImgPath = imgPath;
      this.openModal = true;
    },
    closeModal() {
      this.openModal = false;
    },
    nextPage() {
      this.page++;
      console.log(this.page);
    },
    changeAtleast(value) {
      this.resValue = value;
      this.resType = "1";
    },
    changeExact(value) {
      this.resType = "2";
      this.exactRes = value;
    },
    fetchTop() {
      this.queryValue = "";
      this.start = "";
      this.startPage = false;
      this.isLoading = true;
      this.filteredSearch = "";
      this.sort = "toplist";
      this.page = 1;
      fetch(`${this.search}?sorting=toplist`)
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        }).finally(() => this.isLoading = false);
    },
    fetchRandom() {
      this.queryValue = "";
      this.start = "";
      this.startPage = false;
      this.filteredSearch = "";
      this.isLoading = true;
      this.sort = "random";
      this.page = 1;
      fetch(`${this.search}?sorting=random`)
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        }).finally(() => this.isLoading = false);
    },
    fetchLatest() {
      this.queryValue = "";
      this.start = "";
      this.startPage = false;
      this.isLoading = true;
      this.filteredSearch = "";
      this.sort = "date_added";
      this.page = 1;
      fetch(`${this.search}?sorting=date_added`)
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        }).finally(() => this.isLoading = false);
    },

    fetchSearch(e) {
      let general = this.checkedGeneral;
      let anime = this.checkedAnime;
      let people = this.checkedPeople;
      let categoriesArr = [general, anime, people];
      general === false ? (categoriesArr[0] = 0) : (categoriesArr[0] = 1);
      anime === false ? (categoriesArr[1] = 0) : (categoriesArr[1] = 1);
      people === false ? (categoriesArr[2] = 0) : (categoriesArr[2] = 1);
      if (this.resType === "2") {
        this.resValue = "";
      }
      if (this.resType === "1") {
        this.exactRes = [];
      }
      let categories = categoriesArr.join("");
      if (e.key == "Enter") {
        this.queryValue = this.query
        this.isLoading = true;
        this.start = "";
        this.startPage = false;
        this.notFound = true;
        this.imageCounter = 0;
        this.page = 1;
        this.filteredSearch = "";
        fetch(
          `${this.search}?q=${this.queryValue}&categories=${categories}&atleast=${this.resValue}&resolutions=${this.exactRes}&sorting=${this.sort}&topRange=${this.topSort}&order=${this.order}&page=${this.page}`
        )
          .then((res) => res.json())
          .then((json) => {
            this.filteredSearch = json.data;
          }).finally(() => this.isLoading = false);
          
      }
    },
    fetchNext() {
      let general = this.checkedGeneral;
      let anime = this.checkedAnime;
      let people = this.checkedPeople;
      let categoriesArr = [general, anime, people];
      general === false ? (categoriesArr[0] = 0) : (categoriesArr[0] = 1);
      anime === false ? (categoriesArr[1] = 0) : (categoriesArr[1] = 1);
      people === false ? (categoriesArr[2] = 0) : (categoriesArr[2] = 1);
      if (this.resType === "2") {
        this.resValue = "";
      }
      if (this.resType === "1") {
        this.exactRes = [];
      }
      let categories = categoriesArr.join("");
      this.isLoading = true;
      this.imageCounter = 0;
      this.page++;
      this.start = "";
      this.filteredSearch = "";
      fetch(
        `${this.search}?q=${this.queryValue}&categories=${categories}&atleast=${this.resValue}&resolutions=${this.exactRes}&sorting=${this.sort}&topRange=${this.topSort}&order=${this.order}&page=${this.page}`
      )
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        }).finally(() => this.isLoading = false);
    },
    fetchPrev() {
      let general = this.checkedGeneral;
      let anime = this.checkedAnime;
      let people = this.checkedPeople;
      let categoriesArr = [general, anime, people];
      general === false ? (categoriesArr[0] = 0) : (categoriesArr[0] = 1);
      anime === false ? (categoriesArr[1] = 0) : (categoriesArr[1] = 1);
      people === false ? (categoriesArr[2] = 0) : (categoriesArr[2] = 1);
      if (this.resType === "2") {
        this.resValue = "";
      }
      if (this.resType === "1") {
        this.exactRes = [];
      }
      let categories = categoriesArr.join("");
      this.isLoading = true;
      this.page--;
      this.start = "";
      this.filteredSearch = "";
      fetch(
        `${this.search}?q=${this.queryValue}&categories=${categories}&atleast=${this.resValue}&resolutions=${this.exactRes}&sorting=${this.sort}&topRange=${this.topSort}&order=${this.order}&page=${this.page}`
      )
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        }) .finally(() => this.isLoading = false);
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
  position: relative;
  display: grid;
  margin: 0 auto;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 5px solid #d1c4e9;
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: #212121;
}
.search-bar {
  color: white;
  padding: 10px;
  background-color: #212121;
  width: 600px;
}
.search-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
}
.test {
  font-size: 300px;
}

.main__container {
  max-width: 100%;
}
.filters-flex {
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #212121;
}
.sort-filters {
  display: flex;
  flex-direction: row;
}
.categories-checkbox {
  display: none;
}
.categories-checkbox + label {
}
.categories-checkbox:checked + label {
  background-color: #00c853;
  transition: 0.3s;
}
.categories-checkbox:not(:checked) + label {
  transition: 0.3s;
  background-color: grey;
}
.categories-checkbox:checked + label,
.categories-checkbox:not(:checked) + label {
  padding: 10px;
  border: 1px solid black;
  margin-right: 5px;
  border-radius: 8px;
}
.categories-checkbox:checked + label,
.categories-checkbox:not(:checked) + label :hover {
  cursor: pointer;
}
.categories-block {
  padding-left: 20px;
}
.select-sort {
  color: white;
  background-color: #212121;
  text-align: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: -7px;
}
.select-sort:hover {
  cursor: pointer;
}
.order {
  padding-left: 20px;
}
.order-input {
  display: none;
}
.order-input:checked + label,
.order-input:not(:checked) + label {
  padding: 8px;
  border: 1px solid black;
  margin-right: 5px;
  border-radius: 8px;
}

.order-input:checked + label,
.order-input:not(:checked) + label:hover {
  cursor: pointer;
}
.order-input:checked + label {
  background-color: #00c853;
  transition: 0.3s;
}
.order-input:not(:checked) + label {
  color: white;
  background-color: #616161;
}

.arrow-icon {
  color: white;
}
.top-range-sort {
  color: white;
  background-color: #212121;
  text-align: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: -7px;
  margin-left: 5px;
}
.top-range-sort:hover {
  cursor: pointer;
}
.nextpage {
  position: absolute;
  bottom: 20px;
  right: 50px;
}
.prevpage {
  position: absolute;
  bottom: 20px;
  left: 50px;
}
.search-section {
  background-image: url("../assets/bg-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
}
.not-found {
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: #212121;
  border: 5px solid #d1c4e9;
}
.not-found-text {
  display: block;
  font-size: 50px;
}
.container {
  padding: 0px;
}
.main-content {
  margin: 0 auto;
  position: relative;
  border: 5px solid #212121;
}
.main-content-text-one {
  color: white;
  display: block;
  text-transform: uppercase;
  font-size: 50px;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 40%;
}
.main-content-text-two {
  color: white;
  display: block;
  text-transform: uppercase;
  font-size: 50px;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50%;
}
</style>
