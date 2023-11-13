<script setup>
import {compare} from '../store/compare'

const item = compare.compareItems
</script>

<template>
    <h1 class="bg-green-100 text-black p-10">this is compare iteam page</h1>
    <p class="p-5">{{ item }}</p>

</template>