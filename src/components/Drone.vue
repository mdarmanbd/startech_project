<script setup>
import {ref,reactive,onBeforeMount} from 'vue'
import {cartStore} from '../store/cart'
import axios from 'axios'

const products = ref([])

const loaded = ref()

onBeforeMount(()=>{
    axios.get('https://dummyjson.com/products?limit=20')
        .then(result => {
            products.value = result.data.products
    
        })
})



</script>

<template>
    <section class="bg-white w-full">
        <div class="py-3 ">
            <div class="w-full ">
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
                </div>
                <h3 class="pb-2 text-xl font-semibold text-blue-700 px-3">Best Gimbal Price in Bangladesh</h3>
                <div class="flex flex-row gap-3 py-3 px-3">
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">DJI</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Gudsen</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Zhiyan</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Insta360</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Baseus</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">WiWu</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Leofoto</button>
                </div>
                <div class="w-full bg-gray-100">
                    <div class="flex justify-between py-3 px-3">
                        <div>
                            <label class="text-base text-black">Search : </label>
                            <input type="text" class="outline-none focus:outline-none border-none px-2 text-sm font-medium text-black" placeholder="product name">
                        </div>
                        <div>
                            <label class="text-base text-black">Search : </label>
                            <select class="text-black text-sm cursor-pointer ">
                                <option value="10" class="text-black text-sm cursor-pointer">10</option>
                                <option value="20" class="text-black text-sm cursor-pointer">20</option>
                                <option value="30" class="text-black text-sm cursor-pointer">30</option>
                            </select>
                        </div>
                    </div>

                    <p>{{ cartStore.goll }}</p>
                   
                    <div class="grid grid-cols-4 gap-3 px-3">
                        <div v-for="(product,index) in products" :key="product.id" class="bg-white w-full py-3">
                            <RouterLink :to="`/drone/${product.id}`">
                                <div class="border-b border-b-gray-200">
                                    <img :src="product.thumbnail" class="w-1/2 m-auto pb-2">
                                </div>
                                <div class="flex flex-col py-3 px-3 border-b border-b-gray-200">
                                    <p class="pb-1 text-center"><span class="text-lg font-medium">Brand name :</span> <span class="text-lg font-medium"> {{ product.title }}</span></p>
                                    <p class="w-full text-justify"><span class="text-base font-medium">Product description :</span> <span class="text-15 font-normal">{{ product.description }}</span> </p>
                                </div>
                            </RouterLink>
                            
                            <div class="text-center px-3">
                                <p class="text-center pb-1 pt-3 text-orange-500 text-lg font-semibold">{{ product.price }} $</p>
                                <button @click="cartStore.addItem(product)" class="w-full bg-blue-100 rounded text-center pb-2 p-1 text-blue-600 font-medium text-base hover:bg-blue-200">Add to card</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
</template>