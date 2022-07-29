<template>
  <div>
    
    <header class="header" fixed>
      <div class="header-wrapper">
        <ul class="header-buttons">
          <li>
            <v-btn dark class="latest-btn" @click="$emit('fetchLatest')"
              >Latest</v-btn
            >
          </li>
          <li>
            <v-btn dark @click="$emit('fetchRandom')" class="random-btn"
              >Random</v-btn
            >
          </li>
          <li>
            <v-btn dark @click="$emit('fetchTop')" class="toplist-btn"
              >Toplist</v-btn
            >
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  props: [],

  data() {
    return {
      start: [],
      sort: "",
      filteredSearch: [],
      search: "https://wallhaven.cc/api/v1/search",
    };
  },
  methods: {},
};
</script>

<style scoped>
.v-btn {
  color: red;
}
.header {
  
}
.header-wrapper {
  display: flex;
  background-color: #212121;
  justify-content: space-between;
  padding: 10px 0px;
}
.header-buttons {
  display: flex;
  gap: 20px;
}
</style>
