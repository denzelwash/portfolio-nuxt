<template>
    <header class="page-header shadow relative z-10">
        <div class="container">
            <div class="grid grid-flow-col justify-between items-center h-20">
                <NuxtLink to="/" class="block logo">
                    <strong class="text-[22px] block">Денис Оболевич</strong>
                    <span class="text-gray-600 font-normal">
                        frontend developer
                    </span>
                </NuxtLink>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li v-for="item in menu" :key="item.name" class="mx-8">
                            <NuxtLink
                                :to="item.url"
                                class="text-gray-600 hover:text-black duration-300 font-medium"
                                >{{ item.name }}</NuxtLink
                            >
                        </li>
                    </ul>
                </nav>
                <div class="flex align-center justify-end w-[200px] w-max-full">
                    <a
                        class="w-[36px] h-[36px] flex items-center justify-center ml-2 bg-gray-100 hover:bg-yellow-300 duration-300"
                        href="https://t.me/DenzelWash33"
                        target="_blank"
                        title="DenzelWash33"
                        ><img
                            src="~/assets/img/svg/telega.svg"
                            alt=""
                            width="24"
                            height="24"
                    /></a>
                    <a
                        class="w-[36px] h-[36px] flex items-center justify-center ml-2 bg-gray-100 hover:bg-yellow-300 duration-300"
                        href="https://github.com/denzelwash"
                        target="_blank"
                        ><img
                            src="~/assets/img/svg/git.svg"
                            alt=""
                            width="24"
                            height="24"
                    /></a>
                    <!-- <a
                        class="w-[36px] h-[36px] flex items-center justify-center ml-2 bg-gray-100 hover:bg-yellow-300 duration-300"
                        href="https://www.instagram.com/denzelwash33/"
                        target="_blank"
                        ><img
                            src="~/assets/img/svg/insta.svg"
                            alt=""
                            width="24"
                            height="24"
                    /></a> -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    name: 'Портфолио',
                    url: '/',
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
