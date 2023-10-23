<script setup>
import {ref} from 'vue'

const props = defineProps([
    'modelValue'
])

let plusIcon = ref(false)
let sideLaptop = ref(false)
let sideMonitor = ref(false)

const sideBarDesktop = () =>{
    plusIcon.value = !plusIcon.value
    sideLaptop.value = false
    sideMonitor.value = false
}

const sideBarLaptop = () =>{
    sideLaptop.value = !sideLaptop.value
    plusIcon.value = false
    sideMonitor.value = false
}

const sideBarMonitor = () =>{
    sideMonitor.value = !sideMonitor.value
    sideLaptop.value = false
    plusIcon.value = false
}

</script>

<template>
    <div v-if="modelValue" class="w-full  h-screen">
        <div class="bg-white p-1">
            <div class="w-full px-1 border-b pb-1">
                <div class="flex justify-between">
                    <p class="text-black font-normal text-base">Desktop</p>
                    <img v-if="!plusIcon" @click="sideBarDesktop" src="../assets/plus.svg" alt="">
                    <img v-else @click="sideBarDesktop" src="../assets/minus.svg"> 
                </div>
                
                <div v-if="plusIcon" class="pl-2">
                    <ul class="text-slate-800 font-normal text-15 capitalize">
                        <li class="mb-1 hover:underline">1. hp</li>
                        <li class="mb-1 hover:underline">2. dell</li>
                        <li class="mb-1 hover:underline">3. acer</li>
                        <li class="mb-1 hover:underline">4. lenovo</li>
                    </ul>
                </div>
            </div>
            <div class="w-full px-1 border-b pb-1">
                <div class="flex justify-between">
                    <p class="text-black font-normal text-base">Laptop</p>
                    <img v-if="!sideLaptop" @click="sideBarLaptop" src="../assets/plus.svg" alt="">
                    <img v-else @click="sideBarLaptop" src="../assets/minus.svg"> 
                </div>
                
                <div v-if="sideLaptop" class="pl-2">
                    <ul class="text-slate-800 font-normal text-15 capitalize">
                        <li class="mb-1 hover:underline">1. hp</li>
                        <li class="mb-1 hover:underline">2. dell</li>
                        <li class="mb-1 hover:underline">3. acer</li>
                        <li class="mb-1 hover:underline">4. lenovo</li>
                    </ul>
                </div>
            </div>
            <div class="w-full px-1 border-b pb-1">
                <div class="flex justify-between">
                    <p class="text-black font-normal text-base">Monitor</p>
                    <img v-if="!sideMonitor" @click="sideBarMonitor" src="../assets/plus.svg" alt="">
                    <img v-else @click="sideBarMonitor" src="../assets/minus.svg"> 
                </div>
                
                <div v-if="sideMonitor" class="pl-2">
                    <ul class="text-slate-800 font-normal text-15 capitalize">
                        <li class="mb-1 hover:underline">1. hp</li>
                        <li class="mb-1 hover:underline">2. dell</li>
                        <li class="mb-1 hover:underline">3. acer</li>
                        <li class="mb-1 hover:underline">4. lenovo</li>
                    </ul>
                </div>
            </div>
            <div class="w-full px-1">
                <ul>
                    <li class="border-b pb-1 text-base font-normal">Component</li>
                    <li class="border-b pb-1 text-base font-normal">UPS</li>
                    <li class="border-b pb-1 text-base font-normal">Phone</li>
                    <li class="border-b pb-1 text-base font-normal">Tablet</li>
                    <li class="border-b pb-1 text-base font-normal">Camera</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>