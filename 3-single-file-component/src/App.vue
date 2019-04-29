<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      <search-form v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"/>
      <div v-if="submitted">
        <result-form v-bind:data="searchResult" v-bind:query="query"></result-form>
      </div>
      <div v-else>
        <tab v-bind:data="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tab>
        <div v-if="selectedTab === tabs[0]">
          <list v-bind:data="keywords" type="keyword" v-on:@click="onClickKeyword"></list>
        </div>
        <div v-else>
          <list v-bind:data="history" type="history" v-on:@click="onClickKeyword" v-on:@remove="onClickRemoveHistory"></list>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import SearchModel from '@/models/SearchModel.js'
  import KeywordModel from '@/models/KeywordModel.js'
  import HistoryModel from '@/models/HistoryModel.js'

  import SearchComponent from '@/components/FormComponent'
  import ResultComponent from '@/components/ResultComponent'
  import ListComponent from '@/components/ListComponent'
  import TabComponent from '@/components/TabComponent'

export default {
  name: 'app',
  components: {
    'search-form': SearchComponent,
    'result-form': ResultComponent,
    'list': ListComponent,
    'tab': TabComponent
  },
  data() {
    return {
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '', // 여기서 정의하지 않으면 탭 클릭 동작 정확히 되지 않음
      searchResult: [],
      keywords: [],
      history: []
    }
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
    onSubmit(query) {
      this.query = query
      this.search()
    },
    onReset() {
      this.onResetForm()
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
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    onClickTab(tabName) {
      this.selectedTab = tabName
    },
    onClickKeyword(keyword) {
      this.query = keyword
      this.search()
    },
    onClickRemoveHistory(history) {
      HistoryModel.remove(history)
      this.fetchHistory()
    }
  }
}
</script>
