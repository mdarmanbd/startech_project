<script setup>
import {confirm} from '../store/confirm'
import {cartStore} from '../store/cart'
import {profile} from '../store/profile'


</script>

<template>
    <div class="w-full bg-gray-100 h-screen">
        <div class="w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto">
            <div class="pt-10 sm:pt-10 md:pt-24 lg:pt-24 xl:pt-24">
                <div class="bg-white rounded shadow-lg pt-8 pb-6 p-1 sm:p-1 md:p-5 lg:p-5 xl:p-5">
                    <h2 class="text-lg font-bold text-black pb-3 text-center">Order Information</h2>
                    <div class="w-full">
                        <div class="w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 m-auto flex gap-3 sm:gap-3 md:gap-0 lg:gap-0 xl:gap-0 p-3 sm:p-3 md:p-5 lg:p-5 xl:p-5 bg-gray-100 rounded">
                            <div class="w-1/2">
                                <h2 class="text-black text-lg font-bold">Shipping Address</h2>
                                <div class="py-2">
                                    <p class="text-base font-bold text-black">{{ confirm.firstName }} {{ confirm.lastName }}</p>
                                    <p class="text-base font-bold text-black">{{ confirm.address }}</p>
                                    <p class="text-base font-bold text-black">Mobile: {{ confirm.mobile }}</p>
                                </div>
                            </div>
                            <div class="w-1/2">
                                <h2 class="text-black text-lg font-bold">Order Summary</h2>
                                <div class="py-2">
                                    <div class="w-full flex justify-between">
                                        <p class="text-base font-bold text-black">Sub-Total</p>
                                        <p class="text-base font-bold text-black">{{ confirm.subTotalOrderPrice }} $</p>
                                    </div>
                                   
                                    <div class="w-full flex justify-between">
                                        <p class="text-base font-bold text-black">Delivery</p>
                                        <p class="text-base font-bold text-black">60</p>
                                    </div>
                                    <div class="w-full flex justify-between">
                                        <p class="text-base font-bold text-black">Total</p>
                                        <p class="text-base font-bold text-black">{{ confirm.subTotalOrderPrice + 60 }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-11/12 m-auto py-5">
                            <h2 class="text-black text-base font-bold">Products</h2>
                        </div>
                        <div class="w-11/12 m-auto flex justify-between border-b border-b-gray-300 pb-2">
                            <div class="w-1/2 flex space-x-5">
                                <p class="text-gray-600 font-semibold text-base">Image</p>
                                <p class="text-gray-600 font-semibold text-base">Product Name</p>
                            </div>
                            <div class="w-1/2 flex justify-end space-x-5">
                                <p class="text-gray-600 font-semibold text-base">Quantity</p>
                                <p class="text-gray-600 font-semibold text-base">Total</p>
                            </div>
                        </div>
                        <!---->
                        <div v-for="item in confirm.orderItem" class="w-11/12 m-auto flex justify-between p-3 border-b border-b-gray-300 ">
                            <div class="w-1/2 flex space-x-5">
                                <img :src="item.thumbnail" class="w-10">
                                <p class="text-gray-600 font-semibold text-base pl-3">{{ item.title }}</p>
                            </div>
                            <div class="w-1/2 flex justify-end space-x-5">
                                <p class="text-gray-600 font-semibold text-base">1</p>
                                <p class="text-gray-600 font-semibold text-base">{{ confirm.subTotalOrderPrice + 60}}</p>
                            </div>
                        </div>
                        <!--order comment-->
                        <div class="w-11/12 m-auto pb-2 border-b border-b-gray-300">
                            <div class="py-3">
                                <h2 class="text-black font-semibold text-base">Order Comments</h2>
                                <p class="text-gray-800 font-normal text-base pt-2">{{ confirm.comment }}</p>
                            </div>
                        </div>
                        <div class="py-3 w-11/12 m-auto">
                            <div class="flex justify-end">
                                <button @click="profile.dronPayNow" class="text-white text-base bg-blue-800 px-3 py-1 rounded">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>