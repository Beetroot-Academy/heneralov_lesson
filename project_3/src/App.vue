<template>
  <v-app>
    <div class="search">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        v-model="query"
        @keypress="fetchSearch"
      />
      <v-btn class="latest-btn" @click="fetchLatest">Latest</v-btn>
      <v-btn @click="fetchRandom" class="random-btn">Random</v-btn>
      <v-btn @click="fetchTop" class="random-btn">Toplist</v-btn>
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
            <option value="1d">Last day </option>
            <option value="3d">Last 3 days</option>
            <option value="1w">Last week</option>
            <option value="1m">Last month</option>
            <option value="3m">Last 3 month</option>
            <option value="1y">Last year</option>
          </select> 
        </div>
        <div class="resolution-block">
          <v-btn v-if="atleast == true" @click="openRes = !openRes, atleast = true, exact = false" color="normal">Resolution >={{resValue}}</v-btn>
          <v-btn v-else-if="exactRes.length > 0" @click="openRes = !openRes, atleast = false, exact = true" color="normal">Resolution = {{exactRes}}</v-btn>
          <v-btn v-else @click="openRes  = !openRes, atleast = true, exact = false" color="normal">Resolution</v-btn>
          <div v-if="openRes == true" class="resolution-dropdown">
            <div class="input-wrapper">
            <input @change="atleast = !atleast, exact = !exact, clearValue" type="radio" value=">=" checked id="atleast" name="res-type">
            <label for="res-type">Atleast</label>
            <input @change="exact = !exact, atleast = !atleast, clearValue" type="radio" value="=" id="Exact" name="res-type">
            <label for="res-type">Exact</label>
            </div>
            <div class="res-radio" v-if="atleast == true">
            <input v-model="resValue" type="radio" value="2560x1080" id="res1" name="res">
            <label for="res1">2560 x 1080</label>
            <input v-model="resValue" type="radio" value="3440x1440" id="res2" name="res">
            <label for="res2">3440 x 1440</label>
            <input v-model="resValue" type="radio" value="3840x1600" id="res3" name="res">
            <label for="res3">3840 x 1600</label>
            <input v-model="resValue" type="radio" value="1280x720" id="res4" name="res">
            <label for="res4">1280 x 720</label>
            <input v-model="resValue" type="radio" value="1600x900" id="res5" name="res">
            <label for="res5">1600 x 900</label>
            <input v-model="resValue" type="radio" value="1920x1080" id="res6" name="res">
            <label for="res6">1920 x 1080</label>
            <input v-model="resValue" type="radio" value="2560x1440" id="res7" name="res">
            <label for="res7">2560 x 1440</label>
            <input v-model="resValue" type="radio" value="3840x2160" id="res8" name="res">
            <label for="res8">3840 x 2160</label>
            <input v-model="resValue" type="radio" value="1280x800" id="res9" name="res">
            <label for="res9">1280 x 800</label>
            <input v-model="resValue" type="radio" value="1600x1000" id="res10" name="res">
            <label for="res10">1600 x 1000</label>
            <input v-model="resValue" type="radio" value="1920x1200" id="res11" name="res">
            <label for="res11">1920 x 1200 </label>
            <input v-model="resValue" type="radio" value="2560x1600" id="res12" name="res">
            <label for="res12">2560 x 1600</label>
            <input v-model="resValue" type="radio" value="3840x2400" id="res13" name="res">
            <label for="res13">3840 x 2400</label>
            <input v-model="resValue" type="radio" value="1280x960" id="res14" name="res">
            <label for="res14">1280 x 960</label>
            <input v-model="resValue" type="radio" value="1600x1200" id="res15" name="res">
            <label for="res15">1600 x 1200</label>
            <input v-model="resValue" type="radio" value="1920x1440" id="res16" name="res">
            <label for="res16">1920 x 1440</label>
            <input v-model="resValue" type="radio" value="2560x1920" id="res17" name="res">
            <label for="res17">2560 x 1920</label>
            <input v-model="resValue" type="radio" value="3840x2880" id="res18" name="res">
            <label for="res18">3840 x 2880</label>
            <input v-model="resValue" type="radio" value="1280x1024" id="res19" name="res">
            <label for="res19">1280 x 1024</label>
            <input v-model="resValue" type="radio" value="1600x1280" id="res20" name="res">
            <label for="res20">1600 x 1280</label>
            <input v-model="resValue" type="radio" value="1920x1536" id="res21" name="res">
            <label for="res21">1920 x 1536</label>
            <input v-model="resValue" type="radio" value="2560x2048" id="res22" name="res">
            <label for="res22">2560 x 2048</label>
            <input v-model="resValue" type="radio" value="3840x3072" id="res23" name="res">
            <label for="res23">3840 x 3072</label>
            </div>
            <div class="res-radio" v-if="exact == true">
            <input v-model="exactRes" type="checkbox" value="2560x1080" id="res1" name="res">
            <label for="res1">2560 x 1080</label>
            <input v-model="exactRes" type="checkbox" value="3440x1440" id="res2" name="res">
            <label for="res2">3440 x 1440</label>
            <input v-model="exactRes" type="checkbox" value="3840x1600" id="res3" name="res">
            <label for="res3">3840 x 1600</label>
            <input v-model="exactRes" type="checkbox" value="1280x720" id="res4" name="res">
            <label for="res4">1280 x 720</label>
            <input v-model="exactRes" type="checkbox" value="1600x900" id="res5" name="res">
            <label for="res5">1600 x 900</label>
            <input v-model="exactRes" type="checkbox" value="1920x1080" id="res6" name="res">
            <label for="res6">1920 x 1080</label>
            <input v-model="exactRes" type="checkbox" value="2560x1440" id="res7" name="res">
            <label for="res7">2560 x 1440</label>
            <input v-model="exactRes" type="checkbox" value="3840x2160" id="res8" name="res">
            <label for="res8">3840 x 2160</label>
            <input v-model="exactRes" type="checkbox" value="1280x800" id="res9" name="res">
            <label for="res9">1280 x 800</label>
            <input v-model="exactRes" type="checkbox" value="1600x1000" id="res10" name="res">
            <label for="res10">1600 x 1000</label>
            <input v-model="exactRes" type="checkbox" value="1920x1200" id="res11" name="res">
            <label for="res11">1920 x 1200 </label>
            <input v-model="exactRes" type="checkbox" value="2560x1600" id="res12" name="res">
            <label for="res12">2560 x 1600</label>
            <input v-model="exactRes" type="checkbox" value="3840x2400" id="res13" name="res">
            <label for="res13">3840 x 2400</label>
            <input v-model="exactRes" type="checkbox" value="1280x960" id="res14" name="res">
            <label for="res14">1280 x 960</label>
            <input v-model="exactRes" type="checkbox" value="1600x1200" id="res15" name="res">
            <label for="res15">1600 x 1200</label>
            <input v-model="exactRes" type="checkbox" value="1920x1440" id="res16" name="res">
            <label for="res16">1920 x 1440</label>
            <input v-model="exactRes" type="checkbox" value="2560x1920" id="res17" name="res">
            <label for="res17">2560 x 1920</label>
            <input v-model="exactRes" type="checkbox" value="3840x2880" id="res18" name="res">
            <label for="res18">3840 x 2880</label>
            <input v-model="exactRes" type="checkbox" value="1280x1024" id="res19" name="res">
            <label for="res19">1280 x 1024</label>
            <input v-model="exactRes" type="checkbox" value="1600x1280" id="res20" name="res">
            <label for="res20">1600 x 1280</label>
            <input v-model="exactRes" type="checkbox" value="1920x1536" id="res21" name="res">
            <label for="res21">1920 x 1536</label>
            <input v-model="exactRes" type="checkbox" value="2560x2048" id="res22" name="res">
            <label for="res22">2560 x 2048</label>
            <input v-model="exactRes" type="checkbox" value="3840x3072" id="res23" name="res">
            <label for="res23">3840 x 3072</label>
            </div>
            </div>
          </div>
      </div>
      <div class="random-block">
        <div v-for="wallpaper in start" :key="wallpaper.id" class="random">
          <img :src="wallpaper.path" alt="" />
        </div>
      </div>
      <div class="toplist-block">
        <div v-for="wallpaper in start" :key="wallpaper.id" class="toplist">
          <img :src="wallpaper.path" alt="" />
        </div>
      </div>
      <div class="latest-block">
        <div v-for="wallpaper in start" :key="wallpaper.id" class="latest">
          <img :src="wallpaper.path" alt="" />
        </div>
      </div>
      <div class="tag-block">
        <div
          v-for="wallpaper in filteredSearch"
          :key="wallpaper.id"
          class="tag"
        >
          <img :src="wallpaper.path" alt="" />
        </div>
      </div>
    </div>

    <v-footer dark padless fixed>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon color="black" size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} - <strong>Kekis</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      /* url_base: 'https://wallhaven.cc/api/v1', */
      query: "",
      openRes: false,
      checkedGeneral: true,
      checkedAnime: true,
      checkedPeople: true,
      sort: "date_added",
      order: "desc",
      topSort: "1m",
      atleast: false,
      exact: false,
      resValue: '',
      exactRes: [],
      start: [],
      filteredSearch: [],
      search: "https://wallhaven.cc/api/v1/search",
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-reddit",
        "mdi-instagram",
        "mdi-linkedin",
      ],
    };
    
  },
  
  methods: {
    clearValue () {
    },
    fetchRandom() {
      this.start = "";
      this.filteredSearch = "";
      this.sort = "random"
      fetch(`${this.search}?sorting=random`)
        .then((res) => res.json())
        .then((json) => {
          this.start = json.data;
        });
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
    fetchLatest() {
      this.start = "";
      this.filteredSearch = "";
      this.sort = "date_added"
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
      if (this.atleast === false) {
      this.resValue = '';
        
      }
      if (this.exact === false) {
        this.exactRes = [];
      }
      let categories = categoriesArr.join("");
      if (e.key == "Enter") {
        this.start = "";
        this.filteredSearch = "";
        this.openRes = false;
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
    resValue(value) {
      this.resValue = value;
    },
    exactRes(value) {
      this.exactRes = value;
    },
    
  },
};
</script>

<style>
@import url("./assets/reset.css");
#app {
  background: #e1e1e1;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
  color: white;
}
.resolution-dropdown {
  background-color: black;
}
.search {
  width: 60%;
}
.tag {
}
img {
  width: 300px;
  height: 200px;
}
.active {
  color: green;
}


</style>
