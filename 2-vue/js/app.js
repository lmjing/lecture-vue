import SearchModel from './models/SearchModel.js'

new Vue({
  el: '#app',
  data: {
      query: '',
      submitted: false,
      searchResult: []
  },
    methods: {
      onSubmit(e) {
          this.search()
      },
        onReset() {
          this.onResetForm()
        },
        onKeyup() {
          if (!this.query.length) this.onResetForm()
        },
        onResetForm() {
          this.query = ''
          this.submitted = false
          this.searchResult = []
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        }
    }
})
