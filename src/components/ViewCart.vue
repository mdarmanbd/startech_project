<script setup>
import OrderOverview from '../components/OrderOverview.vue'
import { cartStore } from '../store/cart';

</script>

<template>
    <section class="bg-slate-100 py-3">
            <OrderOverview></OrderOverview>
        <div class="px-2 pt-2">
            <button @click="cartStore.emptyCart" class="bg-red-500 text-white text-base font-normal px-2 pb-1 rounded">Empty cart</button>
        </div>        

    </section>

</template>

<style scoped>

</style>