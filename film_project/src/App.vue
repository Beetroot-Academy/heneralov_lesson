<template>
  <div id="app">
    <div class="search-wrapper">
          <input
            type="text"
            class="search-bar"
            placeholder="Search..."
            v-model="query"
            @keypress.enter="fetchWeather"
          />
        </div>
        {{query}}
        <div class="weather-wrapper" v-if="test">
          <div class="location-box">
            <div class="location">{{weather.city.name}}, {{weather.city.country}}</div>
            <div class="date">Monday 12 January 1488</div>
          </div>
          <div class="weather-box">
            <div class="temperature">12deg</div>
            <div class="weather">Rain</div>
          </div>
        </div>
        </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      apikey: "a9be263066308193e2963b50dd2671f3",
      query: "",
      weather: [],
      test: false,
      
    }
  },
  methods: {
    fetchWeather() {
      this.test = true;
        fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${this.apikey}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.weather = data;
            console.log(this.weather);
          })
          .finally(() => (this.isLoading = false));
      }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
