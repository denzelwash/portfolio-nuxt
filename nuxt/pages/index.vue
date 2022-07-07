<template>
    <div>
        <h1>Портфолио</h1>
        <ul>
            <li v-for="work in works" :key="work.id">{{ work }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData({ params, $axios }) {
        const works = await $axios.$get('/works.json')
        return { works }
    },
    data() {
        return {}
    },
    beforeMount() {
        console.log(process.env.test)
    },
}
</script>

<style></style>
