<template>
    <div v-if="data.length">
        <ul class="list">
            <li v-for="(item, index) in data" v-on:click="onClickKeyword(item.keyword)">
                <span v-if="keywordType" class="number">{{ index + 1 }}</span>
                {{ item.keyword }}
                <span v-if="historyType" class="date">{{ item.date }}</span>
                <!--  stop으로 click 버븥링을 막는다   -->
                <button v-if="historyType" class="btn-remove" v-on:click.stop="onClickRemoveHistory(item.keyword)"></button>
            </li>
        </ul>
    </div>
    <div v-else-if="keywordType">추천 검색어가 없습니다.</div>
    <div v-else-if="historyType">최근 검색어가 없습니다.</div>
</template>

<script>
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
</script>
