<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
        <button type="reset" v-on:click="onReset" v-show="inputValue.length" class="btn-reset"></button>
    </form>
</template>

<script>
    export default {
        template: '#search-form',
        props: ['value'],
        data() {
            return {
                inputValue: this.value
            }
        },
        watch: {
            value(newV, oldV) {
                this.inputValue = newV
            }
        },
        methods: {
            onSubmit() {
                this.$emit('@submit', this.inputValue.trim())
            },
            onKeyup() {
                if (!this.inputValue.length) this.onReset()
            },
            onReset() {
                this.inputValue = ''
                this.$emit('@reset')
            }
        }
    }
</script>
