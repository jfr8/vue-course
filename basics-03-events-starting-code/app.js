const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
      confirmedName: ''
    };
  },

  methods: {
    confirmName() {
      this.confirmedName = this.yourName; 
    },
    submitForm(){
      alert("submitted")
    },
    addCounter(dynamicNum){
      return this.counter = this.counter + dynamicNum;
    },

    reduceCounter(dynamicNum) {
      return this.counter = this.counter - dynamicNum;
    },

    setName(event, lastName) {
      this.yourName = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
