<template>
    <div class="forecast-day">
      <p class="weather-icon"><img :src="'http://openweathermap.org/img/wn/' + dailyIcon + '@2x.png'"></p>
      <div class="date-and-forecast">
        <h3>{{ formatDate(this.date) }}</h3>
        <p>{{ desc }}</p>
      </div>
      <div class="min-max">
        <p class="max-temp">{{ Math.round(dailyMax) }}&deg;</p>
        <p class="min-temp">{{ Math.round(dailyMin) }}&deg;</p>
      </div>
    </div>
</template>

<script>
export default {
    props: [ 'dailyMax', 'dailyMin', 'desc', 'date', 'dailyIcon' ],

    methods: {
      formatDate(date) {
        return new Date(date * 1000).toLocaleString('en-us', { weekday: 'short', month: 'short', day: 'numeric'})
      }
    }
};
</script>

<style scoped>

.forecast-day {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid rgb(223, 223, 223);
  margin-left: 20px;
  margin-right: 20px;
}

.weather-icon {
  color: rgb(255, 217, 0);
  font-size: 40px;
}

.date-and-forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.date-and-forecast p {
  font-size: 14px;
  color: rgb(155, 155, 155);
}

.min-max {
  display: flex;
  gap: 10px;
  font-weight: bold;
  align-items: center;
}

</style>