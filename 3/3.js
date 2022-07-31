Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Victor',
            lastName: 'Dzeba',
            age: 30
        },
        items: [1, 2]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            // console.log(this.$refs.myInput.value)
        }
    },
    computed: {
        eventItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')