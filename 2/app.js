// приложение
const App = {
    // data() - метод передачи данных в html
    data() {
        return {
            placeholderString: 'Введите название заметки...',
            title: 'Список заметок'
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')
// (или)
Vue.createApp(App).mount('#app')