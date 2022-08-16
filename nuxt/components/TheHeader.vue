<template>
  <header class="page-header shadow relative z-10">
    <div class="container">
      <div class="page-header__wr">
        <NuxtLink to="/" class="page-header__logo block logo">
          <strong
            class="text-[22px] sm:text-xl leading-[22px] sm:leading-5 block"
            >Денис Оболевич</strong
          >
          <span class="text-gray-600 sm:text-sm font-normal">
            frontend developer
          </span>
        </NuxtLink>
        <nav class="page-header__nav block">
          <ul class="flex justify-center lg:justify-between">
            <li v-for="item in menu" :key="item.name" class="mx-8 lg:mx-0">
              <NuxtLink
                :to="item.url"
                class="text-gray-600 hover:text-black duration-300 font-medium sm:text-sm"
                :class="{ disabled: item.disabled }"
                >{{ item.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <div
          class="page-header__contacts flex align-center justify-end w-[200px] lg:w-auto w-max-full"
        >
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
            ><img src="~/assets/img/svg/git.svg" alt="" width="24" height="24"
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
          disabled: false,
        },
        {
          name: 'Навыки',
          url: '/skills',
          disabled: true,
        },
        {
          name: 'Опыт работы',
          url: '/work',
          disabled: true,
        },
      ],
    }
  },
}
</script>

<style></style>
