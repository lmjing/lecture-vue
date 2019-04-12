import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function (el) {
    this.init(el)
}

ResultView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '데이터가 없습니다.'
}

ResultView.getSearchResultsHtml = function (data) {
    debugger
}

export default ResultView