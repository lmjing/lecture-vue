new Vue({
  el: '#app',
  data: {
      query: ''
  },
    methods: {
      onSubmit(e) {
          debugger
      },
        onReset() {
          console.log('onReset', this.query)
          this.query = ''
        },
        onKeyup() {
          console.log('onKeyup', this.query)
          if (!this.query.length) this.onReset()
        }
    }
})
