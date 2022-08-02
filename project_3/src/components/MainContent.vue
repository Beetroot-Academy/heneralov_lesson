<template>
  <main>
    <div class="container main__container" id="scrolltop">
      <HeaderBar v-if="!startPage" />
      <div v-if="!startPage" class="search-section">
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
              alt="wp"
            />
          </div>
          <a v-if="page > 1" href="#scrolltop">
            <v-btn color="#FF8F00" @click="fetchPrev" class="prevpage"
              >Prev page</v-btn
            >
          </a>
          <a href="#scrolltop">
            <v-btn
              color="#FF8F00"
              v-if="imageCounter > 23"
              @click="fetchNext"
              class="nextpage"
              >Next page</v-btn
            >
          </a>
        </div>
      </div>
    </div>
    <div v-if="startPage" class="main-content">
      <div class="logo">
        <a href="/">
          <img class="logo-img" src="../assets/logo.png" alt=""
        /></a>
      </div>
      <div class="start-nav-wrapper">
        <nav class="start-nav">
          <ul class="start-list">
            <li class="start-item"><a class="start-link" href="/">Home</a></li>
            <li class="start-item">
              <a class="start-link" href="/about">About</a>
            </li>
            <li class="start-item">
              <a class="start-link" href="/faq">FAQ</a>
            </li>
            <li class="start-item">
              <a class="start-link" href="/contact">Contact</a>
            </li>
          </ul>
          <div class="burger-wrapper">
            <div @click="openStartNav = !openStartNav" class="burger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              <ul v-if="openStartNav" class="start-burger">
                <li class="start-burger-item">
                  <a class="start-link" href="/">Home</a>
                </li>
                <li class="start-burger-item">
                  <a class="start-link" href="/about">About</a>
                </li>
                <li class="start-burger-item">
                  <a class="start-link" href="/faq">FAQ</a>
                </li>
                <li class="start-burger-item">
                  <a class="start-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="start-page">
        <span class="main-content-text-one">Search and download</span>
        <span class="main-content-text-two">wallpapers for free</span>
        <div class="start-buttons">
          <button class="start-btn" @click="fetchLatest">Latest</button>
          <button @click="fetchRandom" class="start-btn">Random</button>
          <button @click="fetchTop" class="start-btn">Toplist</button>
        </div>
        <div class="start-search-wrapper">
          <input
            type="text"
            class="start-search-bar"
            placeholder="Search..."
            v-model="query"
            @keypress="fetchSearch"
          />
        </div>
      </div>
      <Splide :options="options">
        <SplideSlide>
          <img src="../assets/splide-img1.jpg" alt="Sample 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/splide-img2.png" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/splide-img3.png" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/splide-img4.jpg" alt="Sample 2" />
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
    <FooterBlock v-if="!startPage" :icons="icons" />
  </main>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import FooterBlock from "../components/FooterBlock.vue";
import ResBtn from "./ResBtn.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
    HeaderBar,
    ResBtn,
    FooterBlock,
  },
  name: "MainContent",
  props: [],
  data() {
    return {
      options: {
        type: "fade",
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 4000,
        width: "100vw",
        height: "100vh",
        pauseOnHover: false,
        rewind: true,
        arrows: false,
        pagination: false,
      },
      openStartNav: false,
      startPage: true,
      isLoading: false,
      notFound: false,
      imageCounter: 0,
      apikey: "HtMJYGtEu0vazFoGPIP41D24AeqcWesI",
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
      exactResValue: "",
      sortValue: "",
      topSortValue: "",
      orderValue: "",
      categories: "",
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
      fetch(`http://localhost:8080/api/v1/search?sorting=toplist`)
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        })
        .finally(() => (this.isLoading = false));
    },
    fetchRandom() {
      this.queryValue = "";
      this.start = "";
      this.startPage = false;
      this.filteredSearch = "";
      this.isLoading = true;
      this.sort = "random";
      this.page = 1;
      fetch(`http://localhost:8080/api/v1/search?sorting=random`)
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        })
        .finally(() => (this.isLoading = false));
    },
    fetchLatest() {
      this.queryValue = "";
      this.start = "";
      this.startPage = false;
      this.isLoading = true;
      this.filteredSearch = "";
      this.sort = "date_added";
      this.page = 1;
      fetch(`http://localhost:8080/api/v1/search?sorting=date_added`)
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        })
        .finally(() => (this.isLoading = false));
    },

    fetchSearch(e) {
      let general = this.checkedGeneral;
      let anime = this.checkedAnime;
      let people = this.checkedPeople;
      let categoriesArr = [general, anime, people];
      !general ? (categoriesArr[0] = 0) : (categoriesArr[0] = 1);
      !anime ? (categoriesArr[1] = 0) : (categoriesArr[1] = 1);
      !people ? (categoriesArr[2] = 0) : (categoriesArr[2] = 1);
      if (e.key == "Enter") {
        this.categories = categoriesArr.join("");
        this.queryValue = this.query;
        this.exactResValue = this.exactRes;
        this.sortValue = this.sort;
        this.topSortValue = this.topSort;
        this.isLoading = true;
        this.start = "";
        this.startPage = false;
        this.orderValue = this.order;
        this.notFound = true;
        this.imageCounter = 0;
        this.page = 1;
        this.filteredSearch = "";
        fetch(
          `http://localhost:8080/api/v1/search?q=${this.queryValue}&categories=${this.categories}&resolutions=${this.exactResValue}&sorting=${this.sortValue}&topRange=${this.topSortValue}&order=${this.orderValue}&page=${this.page}`
        )
          .then((res) => res.json())
          .then((json) => {
            this.filteredSearch = json.data
          })
          .finally(() => (this.isLoading = false));
      }
    },
    fetchNext() {
      this.isLoading = true;
      this.imageCounter = 0;
      this.page++;
      this.start = "";
      this.filteredSearch = "";
      fetch(
        `http://localhost:8080/api/v1/search?q=${this.queryValue}&categories=${this.categories}&resolutions=${this.exactResValue}&sorting=${this.sortValue}&topRange=${this.topSortValue}&order=${this.orderValue}&page=${this.page}`
      )
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        })
        .finally(() => (this.isLoading = false));
    },
    fetchPrev() {
      this.isLoading = true;
      this.page--;
      this.start = "";
      this.filteredSearch = "";
      fetch(
        `http://localhost:8080/api/v1/search?q=${this.queryValue}&categories=${this.categories}&resolutions=${this.exactResValue}&sorting=${this.sortValue}&topRange=${this.topSortValue}&order=${this.orderValue}&page=${this.page}`
      )
        .then((res) => res.json())
        .then((json) => {
          this.filteredSearch = json.data;
        })
        .finally(() => (this.isLoading = false));
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
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
  background-color: #424242;
  transition: 0.5s;
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
  background-color: #424242;
  transition: 0.5s;
}
.nextpage {
  position: absolute;
  bottom: 20px;
  right: 2%;
}
.prevpage {
  position: absolute;
  bottom: 20px;
  left: 2%;
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
}
.not-found-text {
  display: block;
  font-size: 50px;
}
.burger {
  display: none;
  height: 40px;
  width: 40px;
  flex-direction: column;
  z-index: 3;
  position: relative;
}
.bar {
  display: block;
  width: 30px;
  height: 2px;
  margin: 6px auto;
  background-color: white;
  transition: transform 0.2s ease-in;
}
.burger-wrapper {
  position: absolute;
  z-index: 1;
  right: -20px;
  top: -10px;
}
.start-burger {
  position: absolute;
  z-index: 1;
  right: 0px;
  top: 40px;
}
.start-burger-item {
  padding-bottom: 20px;
}
.container {
  padding: 0px;
}
.main-content {
  margin: 0 auto;
  position: relative;
}
.start-buttons {
  display: flex;
  gap: 40px;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
}
.start-btn {
  color: white;
  text-transform: uppercase;
  border: 1px solid #ff8f00;
  background: transparent;
  padding: 15px 45px;
}
.start-btn:hover {
  background-color: #ff8f00;
  transition: 0.5s;
  cursor: pointer;
}
.start-page {
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}
.start-search-bar {
  color: white;
  padding: 15px;
  background-color: #212121;
  width: 800px;
}
.start-search-wrapper {
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
}
.main-content-text-one {
  color: white;
  display: block;
  font-size: 50px;
}
.main-content-text-two {
  color: white;
  display: block;
  font-size: 50px;
}
.start-nav-wrapper {
  position: absolute;
  z-index: 1;
  right: 10%;
  bottom: 0;
  left: 0;
  top: 5%;
}
.start-list {
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: right;
}
.start-link {
  color: white;
}
.start-link:hover {
  color: #ff8f00;
  border-bottom: 1px solid #ff8f00;
  transition: 0.5s;
}
.logo {
  position: absolute;
  z-index: 1;
  top: 3%;
  left: 5%;
}
@media screen and (max-width: 1500px) {
  .images-block {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .img {
    max-width: 360px;
    height: 260px;
  }
}
@media screen and (max-width: 1200px) {
  .modal-container {
    width: 900px;
    padding-left: 40px;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-right: 40px;
  }
  .modal-img {
    position: relative;
    width: 800px;
    height: 100%;
    object-fit: contain;
  }
  .img {
    max-width: 300px;
    height: 200px;
  }
}
@media screen and (max-width: 1000px) {
  .modal-container {
    width: 700px;
    padding-left: 30px;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-right: 30px;
  }
  .modal-img {
    position: relative;
    width: 600px;
    height: 100%;
    object-fit: contain;
  }
  .img {
    max-width: 250px;
  }
}
@media screen and (max-width: 900px) {
  .start-search-bar {
    width: 600px;
  }
  .main-content-text-one {
    font-size: 42px;
  }
  .main-content-text-two {
    font-size: 42px;
  }
  .start-list {
    gap: 60px;
  }
  .img {
    max-width: 220px;
  }
  .categories-checkbox:checked + label,
  .categories-checkbox:not(:checked) + label {
    padding: 5px;
    border: 1px solid black;
    margin-right: 5px;
    border-radius: 8px;
    font-size: 14px;
  }
  .order-input:checked + label,
  .order-input:not(:checked) + label {
    padding: 4px;
    border: 1px solid black;
    margin-right: 5px;
    border-radius: 8px;
    font-size: 14px;
  }
  .order {
    padding-left: 10px;
  }
  .top-range-sort {
    padding: 2px;
    font-size: 14px;
  }
  .select-sort {
    padding: 2px;
    font-size: 14px;
  }
}
@media screen and (max-width: 768px) {
  .modal-container {
    width: 600px;
    padding-left: 30px;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-right: 30px;
  }
  .modal-img {
    position: relative;
    width: 500px;
    height: 100%;
    object-fit: contain;
  }
  .images-block {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .burger {
    display: flex;
    justify-content: right;
  }
  .start-list {
    display: none;
  }
  .start-buttons {
    gap: 10px;
  }
  .start-btn {
    padding: 10px 25px;
    font-size: 16px;
  }
  .start-search-bar {
    width: 450px;
  }
  .main-content-text-one {
    font-size: 36px;
  }
  .main-content-text-two {
    font-size: 36px;
  }
  .start-list {
    gap: 30px;
  }
  .img {
    max-width: 280px;
    height: 180px;
  }
  .categories-block {
    padding-left: 0px;
  }
  .filters-flex {
    flex-direction: column;
    gap: 30px;
  }
  .sort-filters {
    justify-content: center;
  }
  .search-bar {
    width: 450px;
  }
}
@media screen and (max-width: 600px) {
  .img {
    max-width: 200px;
  }
}
@media screen and (max-width: 480px) {
  .images-block {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  .img {
    max-width: 280px;
  }
  .sort-filters {
    flex-direction: column;
    gap: 15px;
  }
  .search-bar {
    width: 250px;
  }
  .start-search-bar {
    width: 250px;
  }
  .start-btn {
    padding: 5px 10px;
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {
  .modal-container {
    width: 300px;
    padding-left: 5px;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-right: 5px;
  }
  .modal-img {
    position: relative;
    width: 280px;
    height: 100%;
    object-fit: contain;
  }
}
</style>
