<template>
  <div
    class="portfolio-item w-1/5 xxl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full p-3 drop-shadow"
  >
    <div class="portfolio-item__wr aspect-h-1 aspect-w-1 relative">
      <img :src="require(`~/assets/img/works/${work.img}`)" />
      <div
        class="portfolio-item__content bg-gray-600 bg-opacity-95 p-5 text-white flex flex-col items-start"
        :class="{ 'work-rip': work.rip }"
      >
        <h4
          class="text-xl xxl:text-lg font-medium mb-5 border-amber-400 border-b-2 inline-block"
        >
          {{ work.name }}
        </h4>
        <ul>
          <li v-for="item in work.list" :key="item" class="mb-1">
            {{ item }}
          </li>
        </ul>
        <div class="mt-auto flex justify-between items-center w-full">
          <a
            v-if="!work.rip"
            :href="work.url"
            class="portfolio-item__link underline flex items-center hover:no-underline"
          >
            <img
              src="~assets/img/svg/external.svg"
              width="12"
              height="12"
              class="mr-2"
            />
            <span class="">Перейти</span>
          </a>
          <span v-else class="xl:text-sm">Rip</span>
          <span class="xl:text-sm">{{ work.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
