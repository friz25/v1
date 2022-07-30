// приложение
const App = {
    // data() - метод передачи данных в html
    data() {
        return {
            counter: 0,
            title: 'Счетчик'
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')
// (или)
Vue.createApp(App).mount('#app')