<template>
    <nav class="block mt-14">
        <ul class="flex justify-center">
            <li v-for="item in menu" :key="item.name" class="mx-8">
                <NuxtLink :to="item.url" class="text-2xl">{{
                    item.name
                }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    name: 'Портфолио',
                    url: '/portfolio',
                },
                {
                    name: 'Работа',
                    url: '/work',
                },
                {
                    name: 'Контакты',
                    url: '/contacts',
                },
            ],
        }
    },
}
</script>

<style></style>
