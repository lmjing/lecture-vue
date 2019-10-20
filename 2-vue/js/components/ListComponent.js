export default {
    template: '#list',
    props: ['data', 'type'],
    computed: {
      keywordType() {
          return this.type === 'keyword'
      },
        historyType() {
            return this.type === 'history'
        }
    },
    methods: {
        onClickKeyword(keyword) {
            this.$emit('@click', keyword)
        },
        onClickRemoveHistory(keyword) {
            this.$emit('@remove', keyword)
        }
    }
}
