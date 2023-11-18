<script setup>
import {compare} from '../store/compare'

const compareItem = compare.compareCart

</script>

<template>
    <div class="flex flex-row justify-start py-3 px-5">
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

    <p class="px-5 pb-2">{{ compareItem}}</p>

    <div class="px-5">
        <div class="border-t-gray-200 border-t-2" >
            <div class="grid grid-cols-5">
                <div class="px-5 border-r-gray-200 border-r-2">
                    <h2 class="text-black font-semibold text-xl py-2">Product Comparision</h2>
                    <p class="text-gray-600 text-sm font-normal text-justify">Find and select products to see the differences and similarities between them</p>
                </div>
                <div v-for="product in compareItem" :key="product.id" class="px-5 border-r-gray-200 border-r">
                    <div class="flex-col justify-center">
                        <div class="pt-3 flex w-full">
                            <input type="text" class="border-gray-300 border-r-0 focus:shadow-none w-full">
                            <img src="../assets/search.svg" class="border border-gray-300 border-l-0 pr-2  p-1">
                        </div>
                        <div class="pt-10 pb-2">
                            <img :src="product.product.thumbnail" class="w-72 mx-auto pb-5">
                            <p class="text-black font-semibold text-base text-justify">{{ product.product.description }}</p>
                            <p class="text-orange-500 w-full text-center text-xl font-semibold pt-5 flex justify-center gap-0">
                                {{ product.product.price }}
                                <span>
                                    <img src="../assets/taka.svg" class="w-5 py-1">
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
   
   

</template>