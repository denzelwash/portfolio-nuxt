<template>
  <div class="portfolio-item w-1/4 active aspect-h-1">
    <img :src="require(`~/assets/img/works/${work.img}`)" />
    <div
      class="portfolio-item__content bg-gray-600 bg-opacity-90 p-5 text-white flex flex-col items-start"
      :class="{ 'work-rip': work.rip }"
    >
      <h4
        class="text-xl font-medium mb-5 border-amber-400 border-b-2 inline-block"
      >
        {{ work.name }}
      </h4>
      <ul>
        <li v-for="item in work.list" :key="item" class="text-sm mb-1">
          {{ item }}
        </li>
      </ul>
      <div class="mt-auto flex justify-between items-center w-full">
        <a
          v-if="!work.rip"
          :href="work.url"
          class="underline flex items-center hover:no-underline"
        >
          <img
            src="~assets/img/svg/external.svg"
            width="12"
            height="12"
            class="mr-2"
          />
          <span class="text-sm">Перейти</span>
        </a>
        <span v-else class="text-sm">Rip</span>
        <span class="text-sm">{{ work.year || 2019 }}</span>
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
