const tag = '[View]'

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  // on : 특정 이벤트에 대한 행동을 정의
  // 엘레멘트에 특정 이벤트가 발생했을 때 handler가 발생되도록 함
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  // 스스로 이벤트를 방출하는 형태
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  // css 속성 건드림
  hide() {
    this.el.style.display = 'none'
    return this
  },

  // css 속성 건드림
  show() {
    this.el.style.display = ''
    return this
  }
}