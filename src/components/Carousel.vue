<script setup>
import { Carousel } from 'flowbite-vue'

const props = defineProps({
    pictures: {
        type: Array,
        default() {
            return [
                {
                    'src': 'https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp',
                    'alt': 'Picture 1',
                },
                {
                    'src': 'https://flowbite.com/docs/images/carousel/carousel-2.svg',
                    'alt': 'Picture 2',
                },
                {
                    'src': 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
                    'alt': 'Picture 3',
                },
            ]
        },
    },
})


</script>

<template>
<div class="w-full">
    <p>ksjhdk</p>
    <Carousel :controls="false"></Carousel>





</div>


</template>

<style scoped>

</style>