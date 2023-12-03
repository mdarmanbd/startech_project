<script setup>
import {confirm} from '../store/confirm'

</script>

<template>
    <div class="w-2/5 bg-white px-4 pt-2 pb-5 rounded-md">
        <div class="flex gap-4 border-b pb-2">
            <p class="w-5 text-center text-orange-600 font-normal text-base bg-orange-100 rounded-full px-1 pb-1">1</p>
            <p class="text-base text-black font-medium">Customer Information</p>
        </div>
                
                
        <div class="w-full pt-5">
            <div class="w-full flex gap-2">
                <div class="w-1/2">
                    <p class="text-black text-15 font-normal pb-1">First Name</p>
                    <input v-model="confirm.firstName" type="text" :class="confirm.wrongFirstName? 'border-red-400' : 'border-gray-300'" class="text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600" placeholder="first name">
                    <small v-if="confirm.wrongFirstName" class="text-xs text-red-500">First Name must be between 1 and 12 characters</small>
                </div>
                <div class="w-1/2">
                    <p class="text-black text-15 font-normal pb-1">Last Name</p>
                    <input v-model="confirm.lastName" type="text" class="text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600" placeholder="Last name">
                </div>
            </div>
            <div class="w-full pt-5">
                <p class="text-black text-15 font-normal pb-1">Address</p>
                <input type="text" v-model="confirm.address" :class="confirm.wrongAddress? 'border-red-400' : 'border-gray-300'" class="w-full text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600" placeholder="Address">
                <small v-if="confirm.wrongAddress" class="text-xs text-red-500">Address have must be 3 differnt characters</small>
            </div>
            <div class="w-full pt-5">
                <p class="text-black text-15 font-normal pb-1">Mobile</p>
                <input type="number" v-model="confirm.mobile" :class="confirm.wrongMobile? 'border-red-400' : 'border-gray-300'" class="w-full text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600" placeholder="Telephone">
                <small v-if="confirm.wrongMobile" class="text-xs text-red-500">please input vaild phone number</small>
            </div>
            <div class="w-full pt-5">
                <p class="text-black text-15 font-normal pb-1">Email</p>
                <input type="text" v-model="confirm.email" :class="confirm.wrongEmail? 'border-red-400' : 'border-gray-300'" class="w-full text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600" placeholder="E-mail">
                <small v-if="confirm.wrongEmail" class="text-xs text-red-500">please input vaild email acount</small>
            </div>
            <div class="w-full flex gap-2 pt-5">
                <div class="w-1/2">
                    <p class="text-black text-15 font-normal pb-1">City</p>
                    <input class="text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600" placeholder="city">
                </div>
                <div class="w-1/2">
                    <p class="text-black text-15 font-normal pb-1">Zone</p>
                        <select class="w-30 border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600">
                            <option class="text-sm font-light">Dhaka City</option>
                            <option class="text-sm font-light">Khulna City</option>
                            <option class="text-sm font-light">Rajshahi City</option>
                            <option class="text-sm font-light">Rangpur City</option>
                            <option class="text-sm font-light">Chittagong City</option>
                            <option class="text-sm font-light">Gazipur City</option>
                        </select>
                </div>
            </div>
            <div class="pt-5">
                <p class="text-black text-15 font-normal pb-1">Comments</p>
                <textarea class="w-full h-20 text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600"></textarea>
            </div>
        </div>
    </div>

</template>