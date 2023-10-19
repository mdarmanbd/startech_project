<script setup>
import {ref,reactive} from 'vue'
import {onBeforeMount} from 'vue'

const products = ref([])

onBeforeMount(()=>{
    fetch('https://dummyjson.com/products?limit=16')
    .then(res => res.json())
    .then(data =>{
        products.value = data.products
    });
})

</script>

<template>
    <div class="text-center bg-gray-100 w-full">
        <div class="py-3">
            <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-3 sm:gap-3 md:gap-5 lg:gap-3 xl:gap-3">
                <div v-for="(product,index) in products" :key="product.id" class=" bg-white rounded text-center overflow-hidden">
                    <div class="flex flex-col h-full">
                        <div class="flex-grow">
                           <RouterLink :to="`/products/${product.id}`" ><img :src="product.thumbnail" :alt="product.title" class="w-full p-0 sm:p-0 md:p-0 lg:p-3 xl:p-3"></RouterLink> 
                        </div>
                        <div class="mt-auto">
                           <RouterLink :to="`/products/${product.id}`"><p class="text-black font-normal text-sm sm:text-sm md:text-sm lg:text-base xl:text-base pb-2 hover:text-orange-600">{{ product.brand }}</p></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>

<style scoped>

</style>