// приложение
const App = {
    // data() - метод передачи данных в html
    data() {
        return {
            counter: 0
        }
    }

}

const app = Vue.createApp(App)
app.mount('#app')