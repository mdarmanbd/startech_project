<script setup>
import OrderOverview from '../components/OrderOverview.vue'
import { cartStore } from '../store/cart';

</script>

<template>
    <section class="w-full bg-slate-100 py-3 px-3">
        
        <p class="py-2 text-base text-black font-semibold">Checkout</p>
    
            <OrderOverview></OrderOverview>
        <div class="px-2 pt-2 flex gap-3">
            <button @click="cartStore.saveCartInLocalStorage()" class="bg-blue-500 text-base font-normal text-white px-2 pb-1 rounded">Update to cart</button>
            <button @click="cartStore.emptyCart" class="bg-red-500 text-white text-base font-normal px-2 pb-1 rounded">Empty cart</button>
        </div>        

    </section>

</template>

<style scoped>

</style>