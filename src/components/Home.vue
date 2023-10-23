<script setup>
import{ref,reactive,computed} from 'vue';
import  Carousel from '../components/Carousel.vue';
import ProductCatagory from '../components/ProductCatagory.vue';
import {authStore,sideBar} from '../store/store';

const sideBarTwo = sideBar.value

</script>

<template>

  <div class="w-full flex bg-gray-100">
    <div class="w-full !bg-gray-100">
        <div class="w-full ">
            <!--carousal-->
            <Carousel></Carousel>
            <!--marquee-->
            <div class="w-full bg-gray-100 my-5 px-5">
                <marquee class="text-gray-700 bg-white py-2 rounded-full text-base font-normal">18th October Wednesday, our all outlets are open except Pragati Sharani & Uttara Syed Grand Center outlets. Additionally, our online activities are open and operational.</marquee>
            </div>
            <!--product catagory-->
            <div class="pt-5 py-3 px-5 w-full bg-gray-100">
                <div class="w-full text-center pb-3">
                    <h2 class="text-black text-base font-semibold">Featured Category</h2>
                    <p class="text-black text-base font-normal capitalize">get your desired product from featred category!</p>
                </div>
                <div class="w-fll">
                    <ProductCatagory></ProductCatagory>
                </div>
            </div>
        </div> 
    </div>
  </div>
  
</template>

<style scoped>

</style>
