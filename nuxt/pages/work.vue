<template>
  <div class="works">
    <h1 class="text-2xl sm:text-[22px] mb-12 sm:mb-10 page-title">
      Опыт работы
    </h1>
    <div v-for="(w, i) in works" :key="w.id" :class="['mb-10 flex items-center', {'mb-0': i === works.length - 1 }]" >
      <div v-if="w.logo" class="w-16 h-16 flex justify-center items-center">
        <a
        :class="['flex-shrink-0 max-w-[44px]', {'!max-w-none': w.name == 'Bility'}]"
        :href="w.url"
        target="_blank"
        rel="nofollow"
      >
        <img :src="w.logo" alt="" width="60" />
      </a>
      </div>
      <div :class="{'pl-5': w.logo}">
        <a class="text-lg font-semibold mb-1"
          >{{ w.name }}</a
        >
        <p class="text-lg sm:text-base">{{ w.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {  data() {
    return {
      works: [
        {
          id: 1,
          name: 'Bility',
          url: 'https://www.bility.ru/',
          time: 'Январь 2023 - по н. в.',
          logo: require('~/assets/img/logo_bility.svg')
        },
        {
          id: 2,
          name: 'Alef Development',
          url: 'https://alef.im/',
          time: 'Ноябрь 2019 - январь 2023',
          logo: require('~/assets/img/logo_alef.png')
        },
        {
          id: 3,
          name: 'ЭЛХОСТ',
          url: 'https://lhost.ru/',
          time: 'Июль 2018 — сентябрь 2019',
          logo: require('~/assets/img/logo_lhost.png')
        },
        {
          id: 4,
          name: 'Freelance',
          url: '',
          time: 'Июнь 2017 — июнь 2018',
          logo: ''
        },
      ]
    }
  },
  head: {
    title: 'Денис Оболевич ★ Опыт работы',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frontend разработчик, Денис Оболевич. Опыт работы.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Frontend разработчик, Денис Оболевич. Опыт работы.',
      },
    ],
  },


}


</script>

<style></style>
