import View from './View.js'

const tag = '[MainView]' // 디버깅을 위한 태그

/*
Object.create의 리턴 값 : 지정된 프로토타입 개체와 속성을 갖는 새로운 개체.
 */
const FormView = Object.create(View) // 기존 View를 확장한 새로운 오브젝트 생성

// setup 함수 생성
FormView.setup = function (el) {
    // el 검사 및 셋팅
    this.init(el)
    /*
    querySelector() : 제공한 CSS 선택자를 만족하는 첫 번째 Element 객체. 결과가 없다면 null.
     */
    // el로 부터 필요한 하위 엘리먼트 가져와 셋팅
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset')
    // 처음엔 입력 값이 없으니 reset 버튼 안보이도록 함
    this.showResetButton(false)
    this.bindEvents();
}

// 매개변수의 디폴트 값은 true이다.
FormView.showResetButton = function (show = true) {
    // reset 버튼이 스타일 속성을 바꿔준다.
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    this.inputEl.addEventListener('keyup', evt => this.onkeyup(evt))
}

FormView.onkeyup = function () {
    // value 길이가 1이상일 때 true
    this.showResetButton(this.inputEl.value.length)
}

export default FormView