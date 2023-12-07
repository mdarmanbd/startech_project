<script setup>
import ProfileNav from '../components/profilenav.vue'
import { logIN } from '../store/login';
import { profile } from '../store/profile';
 const userFName = localStorage.getItem('userFirstName')
 const userLtName = localStorage.getItem('userLastName')
const userFirstname = JSON.parse(userFName)
const userLastName = JSON.parse(userLtName)



</script>

<template>
    
    <section class="px-3 w-full">
        <div class="w-4/5 mx-auto py-3">
            <div class="flex flex-row justify-start px-3">
            <div>
                <RouterLink to="/">
                    <img src="../assets/home.svg">
                </RouterLink>      
            </div>
            <div class="pl-2 flex flex-col">
                <RouterLink to="/profile">
                    <p class="text-gray-700 text-lg font-semibold hover:underline"> / Account</p>
                </RouterLink>
            </div>
        </div>
        </div>
        <div class="w-3/5 pt-10 pb-5 mx-auto ">
            <div class="w-full flex justify-between gap-4" >
                <div class="w-4/5 flex gap-3 border-r">
                    <div class="">
                        <img src="../assets/userPerson.svg" class="w-16">
                    </div>
                    <div class="">
                        <p class="text-xl font-semibold text-gray-600">Hello</p>
                        <p class="text-lg text-black font-normal lowercase">{{ userFirstname }} {{ userLastName }}</p>
                    </div>
                </div>
                <div class="w-10 flex flex-col text-center ">
                    <div class="border-r pr-2">
                        <p class="text-gray-700 text-sm font-normal">Store Credit</p>
                        <p class="text-orange-600 text-lg font-bold">0</p>
                    </div>
                </div>
                <div class="w-10 flex flex-col text-center  ">
                    <div class="border-r pr-2">
                        <p class="text-gray-700 text-sm font-normal">Store Credit</p>
                        <p class="text-orange-600 text-lg font-bold">0</p>
                    </div>
                </div>
            </div>
            <div v-if="profile.orderStatus" class="">
                <div @click="profile.order" class="grid grid-cols-4 gap-2 py-3">
                    <div  class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Order</p>
                        </div>
                    </div>
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Edit Profile</p>
                        </div>
                    </div>
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Change Password</p>
                        </div>
                    </div>
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Addresses</p>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-4 gap-2 py-3">
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Wish List</p>
                        </div>
                    </div>
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Save PC</p>
                        </div>
                    </div>
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Star Points</p>
                        </div>
                    </div>
                    <div class="bg-white border text-center rounded shadow-lg cursor-pointer  hover:border-blue-400">
                        <div class="w-full text-center p-10 mx-auto">
                            <div class=" ">
                                <img src="../assets/Order.svg" class="rounded-full bg-blue-200 w-12 p-1 mx-auto">
                            </div>
                            <p class="text-base text-black font-semibold pt-1 text-center">Your Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--Order nav-->
            <ProfileNav></ProfileNav>

        </div>
    </section>
    
</template>

<style scoped>


</style>