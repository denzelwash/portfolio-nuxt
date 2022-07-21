<template>
    <div>
        <h1 class="text-2xl mb-8">Портфолио</h1>
        <ul class="grid grid-flow-col justify-start mb-8">
            <li class="mr-20">
                <a
                    href=""
                    class="text-xl font-medium hover:text-amber-500 duration-300"
                    @click="sort('all')"
                    >Все работы</a
                >
            </li>
            <li class="mr-20">
                <a
                    href=""
                    class="text-xl font-medium hover:text-amber-500 duration-300"
                    @click="sort('code')"
                    >Верстка</a
                >
            </li>
            <li class="mr-20">
                <a
                    href=""
                    class="text-xl font-medium hover:text-amber-500 duration-300"
                    @click="sort('cms')"
                    >Cms</a
                >
            </li>
            <li class="mr-20">
                <a
                    href=""
                    @click="sort('vue')"
                    class="text-xl font-medium hover:text-amber-500 duration-300"
                    >Vue</a
                >
            </li>
            <li>
                <a
                    href=""
                    class="text-xl font-medium hover:text-amber-500 duration-300"
                    @click="sort('trash')"
                    >Trash</a
                >
            </li>
        </ul>
        <div class="grid grid-cols-5 gap-[10px]">
            <AppCard v-for="work in works" :work="work" :key="work.id" />
        </div>
    </div>
</template>

<script>
import AppCard from '@/components/AppCard'

export default {
    components: { AppCard },
    async asyncData({ $axios }) {
        const res = await $axios.get('/api/works.json')
        return { works: res.data }
    },
    data() {
        return {
            works: [],
        }
    },
}
</script>

<style></style>
