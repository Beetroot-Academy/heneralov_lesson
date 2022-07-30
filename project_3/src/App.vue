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
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
  color: white;
}
.resolution-dropdown {
  background-color: #212121;
}
.search {
  
}
.tag {
}
.img {
  display: inline-block;
  max-width: 300px;
  height: 200px;
  background-color: black;
   
 
  
}
.active {
  color: green;
}
a {
  text-decoration: none;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 1;
}
.modal-container {
        width: 1100px;
        height: 100%;
        padding-left: 50px;
        padding-bottom: 25px;
        padding-top:25px;
        padding-right: 50px;
        background-color:#212121;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
}
.modal-img {
  position: relative;
  width: 1000px;
  height: 100%;
}
</style>
