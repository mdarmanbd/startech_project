<script setup>
import {confirm} from '../store/confirm'
import { cartStore } from '../store/cart'
import { profile } from '../store/profile';

</script>

<template>
    <div class="w-full bg-gray-100 h-screen">
        <div class="w-1/2 mx-auto  ">
            <div class="pt-24">
                <div class="bg-white rounded shadow-lg p-5 pb-6">
                    
                    <h2 class="text-lg font-bold text-black ">Payment</h2>
                    <div class="pt-3">
                        <p class="text-gray-700 text-base font-semibold pb-1">Order Id </p>
                        <input value="#123abc" class="p-2 text-15 border border-gray-300 focus:outline-none rounded w-full">
                    </div>
                    <div class="pt-3">
                        <p class="text-gray-700 text-base font-semibold pb-1">Name </p>
                        <input :value="confirm.firstName " class="p-2 text-15 border border-gray-300 focus:outline-none rounded w-full">
                    </div>
                    <div class="pt-3">
                        <p class="text-gray-700 text-base font-semibold pb-1">Due </p>
                        <input :value="cartStore.totalPrice + 60" class="p-2 text-15 border border-gray-300 focus:outline-none rounded w-full">
                    </div>
                    <div class="pt-3">
                        <p class="text-gray-700 text-base font-semibold pb-1">Payment</p>
                        <select class="w-30 border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600">
                            <option class="text-sm font-light">Bkash</option>
                            <option class="text-sm font-light">Nagad</option>
                            <option class="text-sm font-light">Roket</option>
                        </select>
                    </div>
                    <div class="w-full pt-3 ">
                        <button @click="profile.pay" class="w-full text-white text-base font-semibold bg-blue-700 px-3 py-1 pb-2 text-center rounded">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>