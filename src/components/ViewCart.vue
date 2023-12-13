<script setup>
import OrderOverview from '../components/OrderOverview.vue'
import { cartStore } from '../store/cart';

</script>

<template>
    <section class="w-full bg-slate-100 py-3 px-3">
        <p class="py-2 text-base text-black font-semibold">Checkout</p>
        <OrderOverview></OrderOverview>
        <div class="bg-white mx-2 py-3 px-3">
            <h1 class="text-xl font-semibold text-black">What would you like to do next?</h1>
            <p class="text-15 text-black font-normal">Choose if you a discount code or reward points you want to user or would like to estimate your delivery cost.</p>
            <div class="bg-slate-100 p-3 w-full block sm:block md:flex lg:flex xl:flex space-y-4 sm:space-y-4 md:space-y-0 gap-5 my-5">
                <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex gap-3">
                    <input class="w-1/2 lg:w-4/5 xl:w-4/5 px-2 py-2 pb-2 focus:outline-none" placeholder="promo / coupon code">
                    <button class="w-full bg-transparent border border-blue-500 px-2 py-1 rounded text-base text-blue-700">Apply coupon</button>
                </div>
                <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex gap-3">
                    <input class="w-1/2 lg:w-4/5 xl:w-4/5 px-2 py-2 pb-2 focus:outline-none" placeholder="enter your gift voucher code here">
                    <button class="w-full bg-transparent border border-blue-500 px-2 py-1 rounded text-base text-blue-700">Apply voucher</button>
                </div>
            </div>
        </div>
        <div class="px-2 flex justify-between gap-3 pt-3">
            <div class="space-x-3">
                <button @click="cartStore.saveCartInLocalStorage()" class="bg-blue-500 text-base font-normal text-white p-2 rounded">Update to cart</button>
                <button @click="cartStore.emptyCart" class="bg-red-500 text-white text-base font-normal p-2 rounded">Empty cart</button>  
            </div>
            <button @click="cartStore.cartConfirmOrder" class="bg-blue-600 text-white text-base font-normal p-2 rounded">Confirm order</button>
        </div>        

    </section>

</template>

<style scoped>

</style>