<template>
    <section class="app-header">

        <header class="header">
        <h2>Simple Weather</h2>
        <form class="search" @submit.prevent="searchCity">
            <input type="text" placeholder="Search.." name="search" class="search-input" v-model="enteredCity">
            <button type="submit" class="search-btn" @click="expandSearch"><i class="fa fa-search"></i></button>
        </form>
        </header>

        <div class="cities">
            <div class="cities-btns" >
                <button :class="selected == 1 ? 'active' : 'rio' " @click="getCity">RIO DE JANEIRO</button>
                <button :class="selected == 2 ? 'active' : 'beijing'" @click="getCity">BEIJING</button>
                <button :class="selected == 3 ? 'active' : 'losAngeles'" @click="getCity">LOS ANGELES</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    emits: ['change-city', 'search-city'],
    data() {
        return {
            enteredCity: '',

            selected: 1,

            rioDeJaneiro: {
                lat: -22.970722,
                long: -43.182365,
            },
            beijing: {
                lat: 39.916668,
                long: 116.383331
            },
            losAngeles: {
                lat: 34.052235,
                long: -118.243683
            }
        }
    },
    methods: {
        getCity(e) {
             if(e.target.classList == 'rio') {
                 this.$emit('change-city', this.rioDeJaneiro.lat, this.rioDeJaneiro.long)

                this.selected = 1;
                
             } else if(e.target.classList == 'beijing') {
                 this.$emit('change-city', this.beijing.lat, this.beijing.long)

                this.selected = 2

             } else if(e.target.classList == 'losAngeles') {
                 this.$emit('change-city', this.losAngeles.lat, this.losAngeles.long)

                 this.selected = 3
             }
        },
        searchCity() {
            if(this.enteredCity.length > 0) {
                this.$emit('search-city', this.enteredCity);

                this.selected = 0;
            }    
        },
        expandSearch(e) {
            e.target.parentNode.parentNode.classList.add('expanded');

        }
    }
}
</script>

<style scoped>

.app-header {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    background: #1a73e8;
    color: white;
    padding: 20px 15px 20px 15px;
    box-shadow: 0px 3px 9px rgba(0,0,0,0.6);
    overflow: overlay;
}

.search {
    align-items: center;
    display: flex;
}

.search.expanded .search-input {
    transform: scaleX(1);
}

.search-btn {
    width: 24px;
    height: 24px;
    font-size: 17px;
    color: white;
    background: transparent;
    outline: none;
    border: none;
    margin-left: 5px;
    cursor: pointer;
}

.search-input {
    padding: 5px;
    border-radius: 7px;
    outline: none;
    border: none;
    transition: transform 300ms ease-in-out;
    transform-origin: right center;
    transform: scaleX(0);
}

.cities {
    display: flex;
    background-color: white;
}

.cities-btns {
    display: flex;
    gap: 20px;
}

.cities-btns button {
    background: transparent;
    outline: none;
    border: none;
    color: gray;
    font-weight: 700;
    padding: 20px 10px 20px 10px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
}

.cities-btns button:hover {
    border-bottom: 3px solid red;
    color: black;
}

.active {
    border-bottom: 3px solid red !important;
    color: black !important;
}

</style>