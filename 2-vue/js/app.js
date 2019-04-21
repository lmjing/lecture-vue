import SearchModel from './models/SearchModel.js'

new Vue({
  el: '#app',
  data: {
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      searchResult: []
  },
    created() {
      // lifeCycle 중 처음 생성이 완료되었을 때 호출됨
        this.selectedTab = this.tabs[0]
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
          data.query = ''
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
