<template>
    <ul id="tabs" class="tabs">
        <li v-for="tab in data" v-bind:class="{active: tab === selectedTab}" v-on:click="onClickTab(tab)">
            {{ tab }}
        </li>
    </ul>
</template>

<script>
    export default {
        template: '#tab',
        props: ['data', 'selected-tab'],
        methods: {
            onClickTab(tab) {
                this.$emit('@change', tab)
            }
        }
    }

</script>

<style scoped>

</style>
