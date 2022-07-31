<template>
<section class="header-bg">
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
    </section>
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
  padding: 0;
}
.header-bg {
  width: 100%;
  margin: 0 auto;
  background-color: #212121;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
.header-buttons {
  display: flex;
  gap: 20px;
}
</style>
