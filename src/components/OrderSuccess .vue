<script setup>
import { cartStore } from '../store/cart';
import {compare} from '../store/compare'

</script>

<template>
    <div class="w-full bg-gray-100 h-screen">
        <div class="w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/5 xl:w-11/12 mx-auto  ">
            <div class="pt-10 sm:pt-10 md:pt-10 lg:pt-24 xl:pt-24">
                <div class="bg-white rounded shadow-lg pt-8 pb-6">
                    <img src="../assets/success.svg" class="w-2/12 mx-auto">
                    <h2 class="text-lg font-bold text-black py-3 text-center">Thank you for ordering!</h2>
                    <div class="text-center pt-3 ">
                        <router-link v-if="cartStore.cartOrder" to="/profileCartOrder">
                            <button class="bg-orange-500 text-white font-normal px-5 py-1 pb-2 rounded hover:bg-orange-400">Pay Now</button>
                        </router-link>
                        <router-link v-if="compare.compareOrder" to="/profileDroneOrder">
                            <button class="bg-orange-500 text-white font-normal px-5 py-1 pb-2 rounded hover:bg-orange-400">Pay Now</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>