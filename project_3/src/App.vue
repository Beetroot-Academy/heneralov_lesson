<template>
  <v-app>
    <router-view />
  </v-app>
</template>


<style>
@import url("/src/assets/reset.css");
#app {
  background-color: #212121;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0px;
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
  object-fit: contain;
}
.lds-dual-ring {
  display: inline-block;
  width: 160px;
  height: 160px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 128px;
  height: 128px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
