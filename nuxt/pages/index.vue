<template>
  <div class="portfolio">
    <h1 class="text-2xl mb-8">Портфолио</h1>
    <ul class="grid grid-flow-col justify-start mb-8">
      <li class="mr-20">
        <a
          href=""
          class="text-xl font-medium hover:text-amber-500 duration-300 active"
          @click.prevent="sort('all')"
          >Все работы</a
        >
      </li>
      <li class="mr-20">
        <a
          href=""
          class="text-xl font-medium hover:text-amber-500 duration-300"
          @click.prevent="sort('code')"
          >Верстка</a
        >
      </li>
      <li class="mr-20">
        <a
          href=""
          class="text-xl font-medium hover:text-amber-500 duration-300"
          @click.prevent="sort('cms')"
          >Cms</a
        >
      </li>
      <li class="mr-20">
        <a
          href=""
          @click.prevent="sort('vue')"
          class="text-xl font-medium hover:text-amber-500 duration-300"
          >Vue</a
        >
      </li>
      <li>
        <a
          href=""
          class="text-xl font-medium hover:text-amber-500 duration-300"
          @click.prevent="sort('trash')"
          >Trash</a
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
    }
  },
  methods: {
    sort(type) {
      console.log('click:', type)
      if (type === 'all') {
        this.tempWorks = this.works
        return
      }
      this.tempWorks = this.works.filter((work) => {
        if (work.type.includes(type)) {
          return true
        }
        return false
      })
      console.log(this.tempWorks)
    },
  },
}
</script>

<style></style>
