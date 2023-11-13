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
    <section>
        <div class="relative">
            <div @click="compareSide" class="fixed cursor-pointer bg-blue-950 bottom-56 w-16 right-10 h-auto rounded-lg pb-3 z-10">
                <img src="../assets/e-commerch.svg" class="w-full m-auto p-3">
                <div class="absolute -bottom-1 left-1 right-1 ">
                    <p class="pb-2 text-xs font-normal text-center text-white px-1">Compare</p> 
                </div>
                <div class="bg-orange-500 w-6 rounded-full absolute -top-2 -right-1">
                    <p class="text-white text-center text-lg font-bold">0</p> 
                </div>
            </div>
            <!--compare side bar--->
            <div v-if="compare.compareShow" class="fixed w-72 bg-white right-0 bottom-56 h-48 z-10 shadow-lg  ">
                <div class="w-full bg-deepLightBlue flex justify-between px-4 py-2">
                    <p class="uppercase text-base text-white font-semibold">Compare</p>
                    <img @click="CompareClose"  src="../assets/Close.svg" class="cursor-pointer ">
                </div>
                <div class="h-3/5 bg-green-200 overflow-y-scroll px-2">
                    <P>Hello world</P>      
                </div>
                    <div class="flex justify-start px-2 py-1 ">          
                        <button  class="cursor-pointer bg-blue-700 text-center text-white text-sm font-normal px-3 py-1 hover:bg-blue-600">Compare</button>
                    </div>
            </div>
        </div> 
    </section>

</template>