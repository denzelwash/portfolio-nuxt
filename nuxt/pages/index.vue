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
        <div class="grid grid-cols-4">
            <div v-for="work in works" :key="work.title" class="portfolio-item" >
                {{ work.id }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
        async asyncData({$axios}) {
        const res = await $axios.get('works.json')
        return {works: res.data}
    },
    data() {
        return {
            works: [],
        }
    },

}
</script>

<style></style>
