<template>
  <div class="forecast-hours">
    <div class="forecast-hours-header">
      <h2>Next hours</h2>
    </div>
    <div class="forecast-hours-data-display" v-if="this.weatherData.hourly">
      <single-hour
        v-for="item in weatherData.hourly.slice(0, 5)"
        :key="item.dt"
        :hourly-temperature="Math.round(item.temp)"
        :hourly-humidity="item.humidity"
        :hourly-time="item.dt"
        :hourly-icon="item.weather[0].icon"
      ></single-hour>
    </div>
  </div>
</template>

<script>
import SingleHour from "./SingleHour.vue";

export default {
  components: { SingleHour },
  props: ['weatherData'],
};
</script>

<style scoped>

.forecast-hours {
  background-color: white;
  margin: 10px 20px 20px 20px;
  border-radius: 3px;
  box-shadow: 2px 3px 17px 2px rgba(0, 0, 0, 0.6);
}

.forecast-hours-header {
  border-bottom: 1px rgb(220, 220, 220) solid;
}

.forecast-hours-header h2 {
  margin: 0px 20px 20px 20px;
  padding-top: 20px;
}

.forecast-hours-data-display {
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 1;
  margin: 20px;
}

</style>