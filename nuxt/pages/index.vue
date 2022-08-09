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
    const res = await $axios.get('/api/works.json')
    return { works: res.data }
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
  mounted() {
    const element = this.$refs.grid
    // eslint-disable-next-line no-unused-vars
    this.shuffleInstance = new Shuffle(element, {
      itemSelector: '.portfolio-item',
      speed: 600,
    })

    const nodes = this.$refs.grid.querySelectorAll('.portfolio-item__wr')
    const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' }
    const classNames = ['in', 'out']
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b))

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect()
      const l = ev.pageX - (left + window.pageXOffset)
      const t = ev.pageY - (top + window.pageYOffset)
      const x = l - (width / 2) * (width > height ? height / width : 1)
      const y = t - (height / 2) * (height > width ? width / height : 1)
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    }

    class Item {
      constructor(element) {
        this.element = element
        this.element.addEventListener('mouseover', (ev) => {
          this.update(ev, 'in')
        })
        this.element.addEventListener('mouseout', (ev) =>
          this.update(ev, 'out')
        )
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames)
        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
        )
      }
    }

    nodes.forEach((node) => new Item(node))
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
