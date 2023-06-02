const app = Vue.createApp({
    data(){
        return {
            outputOne: '',
            outputTwo: ''

        }
    },
    methods: {
        showAlert(){
            alert('Alert this!')
        },

        setOutputOne(event){
            this.outputOne = event.target.value;
        },

        setOutputTwo() {
            this.outputTwo = event.target.value;
        }
    }

});

app.mount('#assignment')