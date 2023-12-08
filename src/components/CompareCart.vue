<script setup>
import {ref,reactive} from 'vue'
import {compare} from '../store/compare'


const compareSide = () => {
    compare.compareShow = !compare.compareShow
}

const CompareClose = () => {
    compare.compareShow = !compare.compareShow   
}

</script>

<template>
    <section class="hidden sm:hidden md:flex lg:flex xl:flex">
        <div class="relative">
            <div @click="compareSide" class="fixed cursor-pointer bg-blue-950 bottom-56 w-16 right-10 h-auto rounded-lg pb-3 z-10">
                <img src="../assets/e-commerch.svg" class="w-full m-auto p-3">
                <div class="absolute -bottom-1 left-1 right-1 ">
                    <p class="pb-2 text-xs font-normal text-center text-white px-1">Compare</p> 
                </div>
                <div class="bg-orange-500 w-6 rounded-full absolute -top-2 -right-1">
                    <p class="text-white text-center text-lg font-bold">{{ compare.compareItemCount }}</p> 
                </div>
            </div>
            <!--compare side bar--->
            <div v-if="compare.compareShow" class="fixed w-72 bg-white right-0 bottom-56 h-64 z-10 shadow-lg  ">
                <div class="w-full bg-deepLightBlue flex justify-between px-4 py-2">
                    <p class="uppercase text-base text-white font-semibold">Compare</p>
                    <img @click="CompareClose"  src="../assets/Close.svg" class="cursor-pointer ">
                </div>
                <div class="h-3/5 bg-white overflow-y-scroll px-2">
                    <div v-for="compareItem in compare.compareCart" :key="compareItem.id" class="">
                        <div class="w-full flex justify-around py-1 border-b">
                            <img :src="compareItem.product.thumbnail" class="w-11 h-10">
                            <p class="pt-1 text-black text-base font-normal capitalize">{{ compareItem.product.title }}</p>
                            <img @click="compare.closeCompareItemButton(compareItem.product.id)" src="../assets/Delet.svg" class="w-6 cursor-pointer ">
                        </div>
                       
                    </div>
                </div>
                    <div v-if="compare.showCompareButton" class="flex gap-2 justify-start px-2 py-1 ">          
                        <button @click="compare.comapreButton"  class="cursor-pointer bg-blue-700 text-center text-white text-sm font-normal px-3 py-1 hover:bg-blue-600">Compare</button>
                        <button @click="compare.clearButton" class="bg-transparent text-black text-base font-normal hover:underline ml-10">Clear</button>
                    </div>
            </div>
        </div> 
    </section>

</template>