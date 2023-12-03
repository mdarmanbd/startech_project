<script setup>
import { profile } from '../store/profile';
import {confirm} from '../store/confirm';
import {cartStore} from '../store/cart'

</script>

<template>
    <div v-if="profile.orderNavStatus" class=" ">
        <div class="w-full">
            <!---order nav start-->
            <div class="flex justify-around pr-1 pb-2 border-b border-b-slate-300">
                <div class="flex pt-6 pr-2">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Orders</p>
                </div>
                <div class="flex pt-6 pr-2">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Account</p>
                </div>
                <div class="flex pt-6 pr-2">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Password</p>
                </div>
                <div class="flex pt-6 pr-2">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Address</p>
                </div>
                <div class="flex pt-6 pr-2 ">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">List</p>
                </div>
                <div class="flex pt-6 pr-2">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Save Pc</p>
                </div>
                <div class="flex pt-6 pr-2">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Points</p>
                </div>
                <div class="flex pt-6 ">
                    <img src="../assets//Order.svg" class="w-9">
                    <p class="text-gray-600 text-base font-semibold pt-1">Store Create</p>
                </div>
            </div>
            <!--Order History-->
            <div class="py-8">
                <h2 class="text-blue-700 text-lg font-normal">Order History</h2>
            </div>
            <!--Drone Order here-->
            <div v-if="cartStore.droneOrder" class="">
                <div class="w-full bg-slate-100 rounded">
                    <div v-for="item in confirm.orderItem" :key="item.id" class="flex justify-between p-5">
                        <div class="flex space-x-2 w-1/2">
                            <img :src= "item.thumbnail" class="w-10">
                            <h2 class="text-lg font-normal text-black pt-1">{{ item.description }}</h2>
                        </div>
                        <div class="w-1/4 flex justify-end">
                            <p class="text-lg font-semibold text-orange-500 pr-10">{{ item.price }} $</p>
                        </div>
                        <div class="w-1/4 flex justify-end">
                            <button @click="profile.dronOrder" class="bg-blue-700 rounded text-white text-base px-2 py-1">View</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Cart order here--->
            <div v-if="cartStore.cartOrder" class="">
                <div class="w-full bg-slate-100 rounded">
                    <div v-for="product in cartStore.items" :key="product.id" class="flex justify-between p-5">
                        <div class="flex space-x-2 w-1/2">
                            <img :src="product.product.thumbnail" class="w-10">
                            <h2 class="text-lg font-normal text-black pt-1">{{ product.product.title }}</h2>
                        </div>
                        <div class="w-1/4 flex justify-end">
                            <p class="text-lg font-semibold text-orange-500 pr-10">{{ product.product.price }}</p>
                        </div>
                        <div class="w-1/4 flex justify-end">
                            <button class="bg-blue-700 rounded text-white text-base px-2 py-1">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

