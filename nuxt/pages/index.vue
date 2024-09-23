<template>
  <div class="portfolio">
    <h1 class="relative text-2xl sm:text-[22px] mb-10 sm:mb-8 page-title">
      <span>Портфолио</span>
      <div class="notice">
        <svg
          class=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 2.45001C11.45 1.86001 12.58 1.86001 13.26 2.45001L14.84 3.80001C15.14 4.05001 15.71 4.26001 16.11 4.26001H17.81C18.87 4.26001 19.74 5.13001 19.74 6.19001V7.89001C19.74 8.29001 19.95 8.85001 20.2 9.15001L21.55 10.73C22.14 11.43 22.14 12.56 21.55 13.24L20.2 14.82C19.95 15.12 19.74 15.68 19.74 16.08V17.78C19.74 18.84 18.87 19.71 17.81 19.71H16.11C15.71 19.71 15.15 19.92 14.85 20.17L13.27 21.52C12.57 22.11 11.44 22.11 10.76 21.52L9.18001 20.17C8.88001 19.92 8.31 19.71 7.92 19.71H6.17C5.11 19.71 4.24 18.84 4.24 17.78V16.07C4.24 15.68 4.04 15.11 3.79 14.82L2.44 13.23C1.86 12.54 1.86 11.42 2.44 10.73L3.79 9.14001C4.04 8.84001 4.24 8.28001 4.24 7.89001V6.20001C4.24 5.14001 5.11 4.27001 6.17 4.27001H7.9C8.3 4.27001 8.86 4.06001 9.16 3.81001L10.75 2.45001Z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 8.13V12.96"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9945 16H12.0035"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>
          ≈1/5 работ, <br />
          фриланс + учебные проекты
        </p>
      </div>
    </h1>
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
        :key="work.id"
        :work="work"
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
        spa: {
          text: 'Spa',
          type: 'spa',
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
