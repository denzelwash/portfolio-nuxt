<template>
  <div class="portfolio">
    <h1 class="text-2xl mb-8">Портфолио</h1>
    <ul class="grid grid-flow-col justify-start mb-8">
      <li class="mr-20" v-for="item in worksMenu" :key="item.text">
        <a
          href=""
          class="text-xl font-medium hover:text-amber-500 duration-300"
          :class="{ active: item.active }"
          @click.prevent="menuItemClick(item.type)"
          >{{ item.text }}</a
        >
      </li>
    </ul>
    <div v-if="works.length" class="grid grid-cols-5 gap-[10px]">
      <AppCard v-for="work in tempWorks" :work="work" :key="work.id" />
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'

export default {
  components: { AppCard },
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/works.json')
    return { works: res.data, tempWorks: res.data }
  },
  data() {
    return {
      works: [],
      tempWorks: [],
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
          text: 'CMS',
          type: 'cms',
          active: false,
        },
        vue: {
          text: 'VUE',
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
  methods: {
    menuItemClick(type) {
      for (const menu in this.worksMenu) {
        this.worksMenu[menu].active = false
      }
      this.sort(type)
      this.worksMenu[type].active = true
    },
    sort(type) {
      if (type === 'all') {
        this.tempWorks = this.works
        return
      }
      this.tempWorks = this.works.filter((work) => work.type.includes(type))
    },
  },
}
</script>

<style></style>
