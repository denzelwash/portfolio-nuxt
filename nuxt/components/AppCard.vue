<template>
    <div class="portfolio-item aspect-w-1 aspect-h-1">
        <img :src="require(`~/assets/img/works/${work.img}`)" />
        <div class="portfolio-item__wr"></div>
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
