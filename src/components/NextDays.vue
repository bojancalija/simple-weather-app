<template>
  <div class="forecast-days" v-if="this.weatherData.daily">
    <div class="forecast-days-header">
      <h2>Next 5 days</h2>
    </div>
    <single-day 
      v-for="item in weatherData.daily.slice(0,5)"
      :key="item.dt"
      :date="item.dt"
      :desc="item.weather[0].description"
      :daily-min="item.temp.min"
      :daily-max="item.temp.max"
      :daily-icon="item.weather[0].icon"
    ></single-day>
  </div>
</template>

<script>
import SingleDay from "./SingleDay.vue";

export default {
  components: { SingleDay },
  props: ["weatherData"],
};
</script>

<style scoped>
.forecast-days {
  background-color: white;
  margin: 10px 20px 20px 20px;
  border-radius: 3px;
  box-shadow: 2px 3px 17px 2px rgba(0, 0, 0, 0.6);  
}

.forecast-days-header {
  border-bottom: 1px rgb(220, 220, 220) solid;
}

.forecast-days-header h2 {
  margin: 0px 20px 20px 20px;
  padding-top: 20px;
}

</style>