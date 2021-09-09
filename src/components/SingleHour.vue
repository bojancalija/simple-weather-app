<template>
    <div class="single-hour">
      <p class="temp">{{ hourlyTemperature }}&deg;</p>
      <p>
        <span class="humidity">{{ hourlyHumidity }}%</span>
      </p>
      <p class="weather-icon"><img :src="'http://openweathermap.org/img/wn/'+ hourlyIcon +'@2x.png'"></p>
      <p class="time">{{ formatDate(this.hourlyTime) }}</p>
    </div>
    <div class="vertical-border"></div>
</template>

<script>
export default {
    props: ['hourlyTemperature', 'hourlyHumidity', 'hourlyTime', 'hourlyIcon'],

    methods: {
        formatDate(date) {
           return new Date( date * 1000).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric' });
        }
    }
}
</script>

<style scoped>

.single-hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px; 
}

.vertical-border {
    padding: 0;
    border-right: 1px solid rgb(223, 223, 223);
    margin-bottom: 45px;
    margin-top: 30px;
}

.vertical-border:last-child {
    display: none;
} 

.single-hour .humidity {
    color: rgb(56, 185, 255);
    font-weight: bold;
}

.single-hour .temp {
    font-weight: bold;
}

.single-hour .time {
    font-weight: 600;
    color: rgb(155, 155, 155);
}

.weather-icon {
    color: rgb(255, 217, 0);
    font-size: 40px;
}
</style>