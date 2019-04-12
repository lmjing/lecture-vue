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
    this.bindEvents()
    // 이것을 통해 on, emit 등으로 이벤트 처리 가능하게 해줌
    return this
}

// 매개변수의 디폴트 값은 true이다.
FormView.showResetButton = function (show = true) {
    // reset 버튼이 스타일 속성을 바꿔준다.
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    // input 엘리먼트에서 엔터키는 폼전송을 위해 화면 갱신이 이뤄지는데 이걸 e.preventDefault() 함수로 방지
    this.on('submit', e => e.preventDefault())
    // type : keyup(key 입력)
    this.inputEl.addEventListener('keyup', evt => this.onKeyup(evt))
}

FormView.onKeyup = function (e) {
    // value 길이가 1이상일 때 true
    const enter = 13;
    this.showResetButton(this.inputEl.value.length)
    if (e.keyCode !== enter) {
        console.log(tag, 'onKeyup()', 'not enter')
        return
    } // enter키가 아닐땐 여기서 끝!
    /*
    이곳은 FormView에 대한 코드 정의 부분
    실질적으로 엔터키가 눌렸을 때 결과를 표출해주는 부분은 메인 컨트롤러에서 해주어야 하므로
    emit을 사용해 이벤트를 방출해준다.
     */
    // 엔터 키 눌렸을 때 입력 값 전달
    console.log(tag, 'onKeyup()', 'enter')
    this.emit('@submit', { input : this.inputEl.value })
}

export default FormView