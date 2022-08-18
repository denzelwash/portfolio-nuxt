<template>
  <div class="portfolio">
    <h1 class="text-2xl sm:text-[22px] mb-10 sm:mb-8 page-title">Портфолио</h1>
    <ul class="flex flex-wrap mb-2 sm:mb-0">
      <li
        v-for="(item, name, i) in worksMenu"
        :key="item.text"
        class="mb-3"
        :class="{ 'mr-20 lg:mr-10': i < worksMenuLength - 1 }"
      >
        <a
          href=""
          class="text-xl sm:text-lg font-medium hover:text-amber-500 duration-300"
          :class="{ active: item.active }"
          @click.prevent="menuItemClick(item.type)"
          >{{ item.text }}</a
        >
      </li>
    </ul>
    <div v-if="works.length" ref="grid" class="flex flex-wrap gap-4 -mx-3">
      <AppCard
        v-for="work in works"
        :work="work"
        :key="work.id"
        :data-groups="JSON.stringify(work.type)"
      />
    </div>
  </div>
</template>

<script>
import Shuffle from 'shufflejs'
import AppCard from '@/components/AppCard'

export default {
  components: { AppCard },
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get('/works.json')
      return { works: res.data }
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      works: [],
      shuffleInstance: null,
      worksMenu: {
        all: {
          text: 'Все работы',
          type: 'all',
          active: true,
        },
        code: {
          text: 'Верстка',
          type: 'code',
          active: false,
        },
        cms: {
          text: 'Cms',
          type: 'cms',
          active: false,
        },
        vue: {
          text: 'Vue',
          type: 'vue',
          active: false,
        },
        trash: {
          text: 'Trash',
          type: 'trash',
          active: false,
        },
      },
    }
  },
  computed: {
    worksMenuLength() {
      return Object.keys(this.worksMenu).length
    },
  },
  mounted() {
    const element = this.$refs.grid
    // eslint-disable-next-line no-unused-vars
    this.shuffleInstance = new Shuffle(element, {
      itemSelector: '.portfolio-item',
      speed: 600,
    })
  },
  methods: {
    menuItemClick(type) {
      for (const menu in this.worksMenu) {
        this.worksMenu[menu].active = false
      }
      this.worksMenu[type].active = true
      this.shuffleInstance.filter(type)
    },
  },
}
</script>

<style></style>
