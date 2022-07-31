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
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            // console.log('removeNote', idx)
            this.notes.splice(idx, 1)
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')
// (или)
Vue.createApp(App).mount('#app')