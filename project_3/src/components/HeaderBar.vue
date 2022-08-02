<template>
<section class="header-bg">
  <div>
    <header class="header">
      <div class="header-wrapper">
        <div class="logo">
           <a href="/"> <img class="logo-img" src="../assets/logo.png" alt=""></a>
          </div>
        <ul class="header-nav">
          <li class="nav-item"><a class="nav-link" href="/">Home</a> </li>
          <li class="nav-item"><a class="nav-link" href="/about">About</a> </li>
          <li class="nav-item"><a class="nav-link" href="/faq">FAQ</a> </li>
          <li class="nav-item"><a class="nav-link" href="/contact">Contact</a> </li>
        </ul>
        <ul class="header-social">
          <li class="social-item"><a class="social-link" href=""> <v-icon class="social-icon">mdi-facebook</v-icon> </a></li>
          <li class="social-item"><a class="social-link" href=""> <v-icon class="social-icon">mdi-twitter</v-icon> </a></li>
          <li class="social-item"><a class="social-link" href=""> <v-icon class="social-icon">mdi-instagram</v-icon> </a></li>
          <li class="social-item"><a class="social-link" href=""> <v-icon class="social-icon">mdi-linkedin</v-icon> </a></li>
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

.header {
  
}
.header-bg {
  width: 100%;
  margin: 0 auto;
  background-color: #263238;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
.header-nav {
  padding-right: 50px;
  padding-top:15px ;
  display: flex;
  flex-direction: row;
  gap: 50px;
}
.header-social {
  display: flex;
  flex-direction: row;
  padding-top:15px ;
  padding-right: 50px;
  gap: 50px;
}
.nav-link {
  color: white;
}
.nav-link:hover {
  color: #FF8F00;
  border-bottom:1px solid #FF8F00 ;
  transition: 0.5s;
}
.social-icon {
  color: white;
}
.social-icon:hover {
  color: #FF8F00;
  transition: 0.5s;
}
.logo {
  padding-left: 50px;
}
</style>
