/*
let과 const의 차이 : const는 선언과 동시에 할당 해야 함
 */
import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'

const tag = '[Main Controller]'

export default {
    init() {
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onReset())

        ResultView.setup(document.querySelector('#search-result'))
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    search(query) {
        console.log(tag, 'search()', query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
    },

    onSearchResult(data) {
        console.log(tag, 'onSearchResult()', data)
        ResultView.render(data)
    },

    onReset() {
        console.log(tag, 'onReset()')
    }
}