const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
    };
  },

  methods: {
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
