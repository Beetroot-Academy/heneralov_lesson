<template>
  <v-app>
    <MainContent />
    <FooterBlock :icons="icons" />
  </v-app>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import FooterBlock from "./components/FooterBlock.vue";
export default {
  components: {
    MainContent,
    FooterBlock,
  },
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
      resValue: "",
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

  methods: {},
};
</script>

<style>
@import url("./assets/reset.css");
#app {
  background:#263238;
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
  display: inline-block;
  width: 300px;
  height: 200px;
  background-color: black;
}
.active {
  color: green;
}
</style>
