<template>
  <div class="page-wrapper">
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
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  },
}
</script>

<style></style>
