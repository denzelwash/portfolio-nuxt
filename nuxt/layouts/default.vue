<template>
  <div class="page-wrapper">
    <Transition>
      <TheLoader v-if="loader" />
    </Transition>
    <TheHeader />
    <main class="page-main">
      <div class="container">
        <Nuxt />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: true,
    }
  },
  head: {
    bodyAttrs: {
      class: 'overflow-hidden',
    },
  },
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('load', () => {
      document.querySelector('body').classList.remove('overflow-hidden')
      this.loader = false
    })
  },
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
