/*
let과 const의 차이 : const는 선언과 동시에 할당 해야 함
 */
const TAG = "[Main Controller]"

export default {
    init() {
        console.log(TAG, 'init()');
    }
}