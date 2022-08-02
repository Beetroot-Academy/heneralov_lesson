<template>
<section class="header-bg">
  <div>
    <header class="header">
      <div class="header-wrapper">
        <div class="logo">
           <a href="/"> <img class="logo-img" src="../assets/logo.png" alt=""></a>
          </div>
        <ul class="header-nav">
          <li class="nav-item"><router-link class="nav-link" :to="{path:'/'}">Home</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" :to="{path:'/about'}">About</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" :to="{path:'/faq'}">FAQ</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" :to="{path:'/contact'}">Contact</router-link> </li>
        </ul>
        <div class="burger-wrapper">
        <div @click="openNav = !openNav" class="burger-block">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <ul v-if="openNav" class="burger-nav">
          <li class="burger-item"><router-link class="nav-link" :to="{path:'/'}">Home</router-link> </li>
          <li class="burger-item"><router-link class="nav-link" :to="{path:'/about'}">About</router-link> </li>
          <li class="burger-item"><router-link class="nav-link" :to="{path:'/faq'}">FAQ</router-link> </li>
          <li class="burger-item"><router-link class="nav-link" :to="{path:'/contact'}">Contact</router-link> </li>
        </ul>
          </div>
          </div>
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
      openNav: false,
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

.burger-wrapper {
    display: none;
    height: 40px;
    width: 40px;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
    position: relative;
}
.bar {
        display: block;
        width: 30px;
        height: 2px;
        margin: 6px auto;
        background-color: white;
        transition: transform .2s ease-in;
    }
    .burger-block {
      position: absolute;
      z-index: 1;
      padding-top:10px ;
      
    }
    .burger-nav {
      position: absolute;
      right: 0px;
      top:50px;
      padding-top: 20px;
      background-color: #424242;
      padding-right:20px ;
    }
    .burger-item {
      padding-bottom: 20px;
    }
.logo {
  padding-left: 50px;
}
@media screen and (max-width: 1200px) {
  .header-social {
    display: none;
  }

}
@media screen and (max-width: 768px) {
  .header-nav {
    display: none;
  }
  .burger-wrapper {
    display: flex;
}
.logo {
  padding-left: 0px;
}
.burger-block {
  right: 10px;
}
}
@media screen and (max-width: 320px) {

}

</style>
