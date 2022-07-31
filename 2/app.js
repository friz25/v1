// приложение
const App = {
    // data() - метод передачи данных в html
    data() {
        return {
            placeholderString: 'Введите название заметки...',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1','Заметка 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            // console.log('inputChangeHandler', event.target.value)
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')
// (или)
Vue.createApp(App).mount('#app')