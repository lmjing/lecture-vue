import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

new Vue({
  el: '#app',
  data: {
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '', // 여기서 정의하지 않으면 탭 클릭 동작 정확히 되지 않음
      searchResult: [],
      keywords: [],
      history: []
  },
    created() {
      // lifeCycle 중 처음 생성이 완료되었을 때 호출됨
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
    },
    methods: {
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data
            })
        },
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
        },
        onClickTab(tabName) {
          this.selectedTab = tabName
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        }
    }
})
