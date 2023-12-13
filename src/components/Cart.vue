<script setup>
import{ref,reactive} from 'vue'
import {cartStore} from '../store/cart'
import {compare} from '../store/compare'

const cartShow = ref(false)

const cart = () => {
    cartStore.cartShow = !cartStore.cartShow
    // console.log(cartStore.cartShow)
   // cartShow.value = !cartShow.value
    compare.compareShow = false // hide compare component whene cart show
    
}




</script>

<template>
    <section class="flex">
        <div class="relative">
            <div @click="cart" class="hidden sm:hidden md:hidden lg:block xl:block fixed cursor-pointer bg-blue-950 bottom-32 w-16 right-10 h-auto rounded-lg pb-3 z-10">
                <img src="../assets/e-commerch.svg" class="w-full m-auto p-3">
                <div class="absolute -bottom-1 left-4 ">
                    <p class="pb-2 text-base font-normal text-center text-white">Cart</p> 
                </div>
                <div class="bg-orange-500 w-6 rounded-full absolute -top-2 -right-1">
                    <p class="text-white text-center text-lg font-bold">{{ cartStore.totalCartItems }} </p> 
                </div>
            </div>
            <!--cart side bar--->
            <div v-if="cartStore.cartShow" class="fixed w-60 bg-white right-0 top-0 h-screen z-10 shadow-lg  ">
                    <div class="w-full bg-deepLightBlue flex justify-between px-3 py-2 ">
                        <p class="uppercase text-base text-white font-semibold">Your Cart</p>
                        <img @click="cart" src="../assets/Close.svg" class="cursor-pointer">
                    </div>
                <div class="h-2/3 overflow-y-scroll">
                   
                    <div v-for="item in cartStore.items" :key="item.id" class="py-2 border-b">
                        <div class="flex justify-around gap-2 leading-4 px-1 hover:bg-slate-100">
                            <img :src="item.product.thumbnail" class="w-10 h-auto">
                            <p class="text-sm font-normal text-black">{{ item.product.description }}</p>

                            <div @click="cartStore.deletItem(item.product.id)" class="flex flex-col my-auto cursor-pointer">
                                <img src="../assets/Delet.svg">
                            </div>
                        </div>
                        <div class="px-1 flex justify-center gap-3 py-1">
                            <p class="text-sm">{{ item.product.price }}</p>
                            <p class="text-sm"> {{ item.quantity }} =</p>
                            <p class="text-sm">{{ item.product.price * item.quantity }}</p>
                        </div>
                    </div>
                </div>
                <div class="h-auto w-full ">
                    <div class="bg-gray-100 w-full py-2">
                        <div class="flex justify-between gap-3 px-3">
                            <input type="text" class="bg-white px-1 w-full border-0 outline-0 focus:outline-none" placeholder="Promo Code">
                            <button class="bg-blue-700 text-center px-2 text-white text-base">Apply</button>
                        </div>
                    </div>
                    <div class="bg-white w-full">
                        <div class="flex justify-around px-2 border-b py-2">
                            <p class="text-gray-600 text-base font-semibold">Sub-Total</p>
                            <p class="text-base font-semibold text-black">{{ cartStore.totalPrice }}</p>
                        </div>
                        <div class="flex justify-around px-2 border-b py-2">
                            <p class="text-gray-600 text-base font-semibold">Total</p>
                            <p class="text-base font-semibold text-black">{{ cartStore.totalPrice }}</p>
                        </div>
                        <div class="flex justify-around px-2 py-2 ">
                            <RouterLink to="/viewCart">
                                <button @click="cart" class="cursor-pointer bg-blue-700 text-center text-white text-sm font-normal px-3 py-1 hover:bg-blue-600">Show cart view</button>
                            </RouterLink> 
                            <button class="bg-orange-700 text-center text-white text-base font-normal px-3 py-1 hover:bg-orange-600">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>

</template>