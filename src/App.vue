<template>
  
    <the-header
      @change-city="changeCord"
      @search-city="getCoordinates"
    ></the-header>

    <section class="forecast">
      <next-hours :weatherData="weatherData"></next-hours>

      <next-days
        :weatherData="weatherData"
        :search-city="getCoordinates"
      ></next-days>
    </section>

    <the-footer v-if="weatherData.hourly" :date="formatDate(weatherData.hourly[0].dt)"></the-footer>

</template>

<script>
export default {
  data() {
    return {
      lat: -22.970722,
      long: -43.182365,
      weatherData: [],
      temporaryData: [],
      city: "Rio de Janeiro",
      APIkey: "fef615385e39d89eba61d7c3e0223f33",
      hourlyForecast: [],
    };
  },
  created() {
    this.getData();

    console.log(this.getData());
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.long}&units=metric&exclude=minutely,alerts,current&appid=${this.APIkey}`
        );
        this.weatherData = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    changeCord(lat, long) {
      this.lat = lat;
      this.long = long;

      this.getData();
    },
    async getCoordinates(cityName) {
      this.city = cityName;

      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.APIkey}`
        );
        this.temporaryData = await response.json();
      } catch (error) {
        console.log(error);
      }

      this.lat = this.temporaryData.coord.lat;
      this.long = this.temporaryData.coord.lon;

      console.log(this.lat);
      console.log(this.long);
      console.log(this.city);

      this.getData();
    },
    formatDate(date) {
      return new Date(date * 1000).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'short'} )
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-image: linear-gradient(to bottom right, #1a73e8, white);
}

.forecast {
  margin-top: 135px;
}
</style>
