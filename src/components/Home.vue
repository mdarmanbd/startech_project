<script setup>
import{ref,reactive,computed} from 'vue'
import  Carousel from '../components/Carousel.vue';

let sideBar = ref(false)
let plusIcon = ref(false)
let sideLaptop = ref(false)
let sideMonitor = ref(false)

const navThreeBars = () => {
    sideBar.value = !sideBar.value
}

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
  <section class="bg-deepBlue w-full">
    <nav class="px-2 py-3 w-full">
        <div class="w-full">
            <div class="flex sm:flex md:flex lg:hidden xl:hidden justify-between px-2 w-full">
                <div @click="navThreeBars" class="cursor-pointer">
                    <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#FCFAFA"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"/></svg>
                </div>
                
                <div class="">
                    <img class="w-20" src="https://www.startech.com.bd/image/catalog/logo.png">
                </div>
                <div class="">
                    <div class="">
                        <img class="absolute right-5" src="../assets/e-commerch.svg">
                        <samp class="relative -top-3 left-2 bg-orange-600 rounded py-0 px-1 text-center text-white text-sm">0</samp>
                    </div>
                </div>
            </div>
            
            <div class="hidden sm:hidden md:hidden lg:flex xl:flex justify-around w-full">
                <div class=" ">
                    <img class="w-20" src="https://www.startech.com.bd/image/catalog/logo.png">
                </div>
                <div class="flex bg-white w-1/3 justify-between rounded">
                    <input class="w-11/12 rounded text-black px-1 pt-0 border-none outline-0 text-lg " placeholder="Search" type="text">
                    <div class="my-auto mx-1">
                        <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        
                        <title>search</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs>
                            </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#000000">
                                <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketch:type="MSShapeGroup">

                            </path>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="px-2 flex">
                    <div class="flex">
                        <div class="my-auto">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#E92114" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 17H21M12 8L10 12M12 8L14 12M12 8H7.5C6.83696 8 6.20107 7.73661 5.73223 7.26777C5.26339 6.79893 5 6.16304 5 5.5C5 4.83696 5.26339 4.20107 5.73223 3.73223C6.20107 3.26339 6.83696 3 7.5 3C11 3 12 8 12 8ZM12 8H16.5C17.163 8 17.7989 7.73661 18.2678 7.26777C18.7366 6.79893 19 6.16304 19 5.5C19 4.83696 18.7366 4.20107 18.2678 3.73223C17.7989 3.26339 17.163 3 16.5 3C13 3 12 8 12 8ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="">
                            <p class="text-white font-normal text-base leading-none">Offers 
                                <br>
                                <small class="text-gray-500 text-sm">Latest Offers</small>
                            </p>
                        </div>
                    </div>

                    <div class="flex mx-3">
                        <div class="my-auto">
                            <svg fill="#E92114" width="25px" height="25px" viewBox="0 0 24 24" id="thunder" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M18.82,9.18A2,2,0,0,0,17,8H15.19l1.33-3.26a2,2,0,0,0-.19-1.84A2.06,2.06,0,0,0,14.62,2H10.28A2,2,0,0,0,8.37,3.27l-3.23,8a2,2,0,0,0,.2,1.83,2.06,2.06,0,0,0,1.71.9H9.81L8,20.74a1,1,0,0,0,.5,1.15A1.12,1.12,0,0,0,9,22a1,1,0,0,0,.76-.35l8.8-10.37A2,2,0,0,0,18.82,9.18Z"
                                style="fill:#E92114;"></path>
                            </svg>
                        </div>
                        <div class="">
                            <p class="text-white font-normal text-base leading-none">Mega Fest 
                                <br>
                                <small class="text-gray-500 text-sm">Special Deals</small>
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex mx-3">
                        <div class="my-auto">
                            <svg fill="#E92114" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>
                        </div>
                        <div class="">
                            <p class="text-white font-normal text-base leading-none">Account 
                                <br>
                                <small class="text-gray-500 text-sm"><span class="hover:text-gray-200 cursor-pointer">Register</span> or <span class="hover:text-gray-200 cursor-pointer">Login</span></small>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <button class="capitalize text-white font-normal text-base px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-center"><samp class="uppercase">pc</samp> builder</button>
                </div>
            </div>
        </div>
    </nav>
  </section>
  <div class="w-full flex">
    <div v-if="sideBar" class="w-1/2  h-screen">
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
    <div :class="{'bg-slate-400 opacity-25':sideBar, 'w-full':!sideBar}" class="w-full bg-gray-100">
        <!--slider start-->
        <div class="w-full ">
            <Carousel></Carousel>
            
        </div>
       
       
    </div>
  </div>
  
</template>

<style scoped>

</style>
