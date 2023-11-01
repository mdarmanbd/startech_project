<script setup>
    import {ref,reactive} from 'vue'
    import { cartStore } from '../store/cart';

    if(cartStore.items.length == 0 ){
        console.log('hello')
    }
    
</script>

<template>
    <section class="w-full px-2">
        <div class="px-3 py-2 bg-white rounded shadow-lg">
            <div class="flex pb-1 border-b">
                <p class="bg-orange-100 w-5 text-orange-700 text-center rounded-full ">{{ cartStore.totalCartItems }}</p>
                <h2 class="pl-2 text-black text-lg font-semibold">Order Overview</h2>
            </div>
            <div class="pt-2">
                <div class="bg-gray-100 py-2 px-2 w-full flex justify-between">
                    <p class="text-gray-700 text-base font-medium border-r w-10/12">Product Name</p>
                    <div class="w-full flex justify-around">
                        <p class="text-gray-700 text-base font-medium border-r w-full text-left pl-2">Price</p>
                        <p class="text-gray-700 text-base font-medium border-r w-full text-left pl-2">Total</p>
                    </div>
                </div>
                <div v-for="item in cartStore.items" :key="item.id" class="">
                    <div class="bg-white py-2 px-2 w-full flex justify-between border-b">
                        <p class="text-gray-700 text-base font-medium w-10/12">{{ item.product.description }}</p>
                        <div class="w-full flex ">
                            <p class="text-gray-700 text-base font-medium w-1/2 text-left pl-2">{{ item.product.price}}</p>
                            <div class="w-10 ">
                                <input type="number" v-model="item.quantity" class="text-left text-gray-700 text-base w-16 font-medium">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="bg-white py-2 px-2 w-full flex justify-between border-b">
                        <p class="text-gray-700 text-base font-medium w-10/12"></p>
                        <div class="w-full flex justify-around">
                            <p class="text-orange-600 text-base font-medium w-full text-left pl-2">Sub-Total</p>
                            <p class="text-orange-600 text-base font-medium w-full text-left pl-2">{{ cartStore.totalPrice }}</p>
                        </div>
                    </div>
                    <div class="bg-white py-2 px-2 w-full flex justify-between border-b">
                        <p class="text-gray-700 text-base font-medium w-10/12"></p>
                        <div class="w-full flex justify-around">
                            <p class="text-orange-600 text-base font-medium w-full text-left pl-2">Home Delivery:</p>
                            <p class="text-orange-600 text-base font-medium w-full text-left pl-2">60</p>
                        </div>
                    </div>
                    <div class="bg-white py-2 px-2 w-full flex justify-between border-b">
                        <p class="text-gray-700 text-base font-medium w-10/12"></p>
                        <div class="w-full flex justify-around">
                            <p class="text-orange-600 text-base font-medium w-full text-left pl-2">Total:</p>
                            <p class="text-orange-600 text-base font-medium w-full text-left pl-2">{{ cartStore.totalPrice + 60 }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>