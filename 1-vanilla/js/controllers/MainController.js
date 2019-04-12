/*
let과 const의 차이 : const는 선언과 동시에 할당 해야 함
 */
import FormView from '../views/FormView.js'

const tag = '[Main Controller]'

export default {
    init() {
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onReset())
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
    },

    onReset() {
        console.log(tag, 'onReset()')
    }
}