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
    },
    // если изменили значение какойто переменной (используем его)
    computed: {
        doubleCountComputed() {
            // console.log('doubleCountComputed')
            return this.notes.length * 2
        },
    },
    // следит за изменением переменных (также тут можно сделать валидацию)
    watch: {
        inputValue(value) {
            if (value.length > 10){
                this.inputValue = ''
            }
            // console.log('input Value changed', value)
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')
// (или)
Vue.createApp(App).mount('#app')