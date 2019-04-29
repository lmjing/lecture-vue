export default {
    template: '#tab',
    props: ['data', 'selected-tab'],
    methods: {
        onClickTab(tab) {
            this.$emit('@change', tab)
        }
    }
}
