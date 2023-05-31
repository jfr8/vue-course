const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this front end course with Vue',
            goalLink: 'https://vuejs.org',
            courseGoalA: 'Learn Vue asap',
            courseGoalB: 'Learn Vue by all means'
        }
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');
