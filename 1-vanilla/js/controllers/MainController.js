/*
let과 const의 차이 : const는 선언과 동시에 할당 해야 함
 */
import FormView from '../views/FormView.js'

const tag = '[Main Controller]'

export default {
    init() {
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input);
    }
}