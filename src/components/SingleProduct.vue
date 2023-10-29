<script setup>
import{ref,reactive, onBeforeMount} from 'vue'
import{useRoute} from 'vue-router'
import { cartStore } from '../store/cart';
import axios from 'axios'


const route = useRoute()
const routeId = route.params.id
const product = ref()
const currentProductImage = ref()

onBeforeMount(()=>{
    axios.get(`https://dummyjson.com/products/${routeId}`)
        .then(res =>{
            product.value = res.data
            currentProductImage.value = res.data.thumbnail
        })
})

function productImages(productImg){
    currentProductImage.value = productImg
}


</script>

<template>
    <div class="w-full bg-white">
        <div class="flex flex-row justify-start py-3 px-3">
            <div>
                <RouterLink to="/">
                    <img src="../assets/home.svg">
                </RouterLink>     
            </div>
            <div class="pl-2 flex flex-col">
                <RouterLink to="/drone">
                    <h2 class="text-lg text-black font-semibold hover:text-orange-500">/ Drone</h2>
                </RouterLink>
            </div>
            <div class="pl-2 flex flex-col">
                <h2 class="text-lg text-black font-semibold">/ {{ product.brand }}</h2>
            </div>
        </div>
        <div class="w-full flex flex-row py-5 px-3 gap-5">
            <div class="w-2/5">
                <img :src="currentProductImage" class="w-full m-auto">
            </div>
            <div class="w-full">
                <h2 class="text-xl font-bold text-black">Product details : <span class="text-lg font-semibold text-black">{{ product.description }}</span> </h2>
                <h2 class="text-xl font-bold text-black">Product brand : <span class="text-lg font-semibold text-black">{{ product.brand }}</span> </h2>
                <h2 class="text-xl font-bold text-black">Product category : <span class="text-lg font-semibold text-black">{{ product.category }}</span> </h2>
                <div class="w-full pt-5 flex flex-row gap-3">
                    <div v-for="(productImg , index) in product.images" :key="product.id" class="">
                        <img @click="productImages(productImg)" :src="productImg" class="w-20 cursor-pointer m-auto pr-2 pb-2 border-r-2 border-r-gray-200 hover:border-b-2 hover:border-b-gray-200">
                    </div>
                </div>
                <div class="text-left pt-10">
                    <p class="pb-1 text-orange-500 text-lg font-semibold">Product price : {{ product.price }} $</p>
                    <button @click="cartStore.addItem(product)" class="w-40 bg-blue-100 rounded text-center pb-2 p-1 text-blue-600 font-medium text-base hover:bg-blue-200">Add to card</button>
                </div>
            </div>
        </div>
    </div>
        

</template>

<style scoped>

</style>