const app = Vue.createApp({
    data() {
        return {
            myName: 'Juan Fernando Ramone',
            myAge: 33,
            imageSample: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        }
    },
    methods: {
        myAgeInFiveYears() {
            return this.myAge + 5;
        },

        myFavoriteNumber() {
            const randomNum = Math.random();
            if(randomNum < 0.5){
                return 1;
            } else {
                return 0;
            }
        }
    }
}); 

app.mount('#assignment')

