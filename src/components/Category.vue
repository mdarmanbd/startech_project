<script setup>
import {ref,reactive,onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios'

const route = useRoute()
const routeId = route.params.id
const catagory = ref([])

onBeforeMount(()=>{
    axios.get(`https://dummyjson.com/products/${routeId}`)
    .then(result => {
        catagory.value = result.data
    })
})

</script>

<template>
    
    <h1 class="bg-green-500">single produce page</h1>
    <p>ID : {{ catagory.id }}</p>
    <p>{{ catagory.description }}</p>
</template>

<style scoped>

</style>