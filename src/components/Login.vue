<script setup>
import{ref,watch} from 'vue'
import{logIN} from '../store/login'
import {useRoute,useRouter} from 'vue-router'




</script>

<template>
    <section class="bg-white py-5 w-full h-screen">
        <div class="flex flex-row justify-start px-3">
            <div>
                <RouterLink to="/">
                    <img src="../assets/home.svg">
                </RouterLink>      
            </div>
            <div class="pl-2 flex flex-col">
                <RouterLink to="/login">
                    <h2 class="text-lg text-black font-semibold hover:text-orange-500">/ Login</h2>
                </RouterLink>
            </div>
        </div>
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-10 mx-auto">
            <div class="pb-4 px-5">
                <h1 class="text-black text-lg font-semibold pb-1">Account Login</h1>
                <div class="pb-2">
                    <p class="text-black text-lg font-normal">Phone / Email</p>
                    <input v-model="email"  type="text" placeholder="example@.com" class="w-full border border-gray-400 rounded outline-none pl-1 text-base font-normal">
                    <small v-if="logIN.wrongEmail" class="text-red-500">email length is too short and also requered the '@'</small>
                </div>
                <div class="pb-2">
                    <p class="text-black text-lg font-normal">Password</p>
                    <input v-model="password" type="text" class="w-full border border-gray-400 rounded outline-none pl-1 text-base font-normal">
                    <small v-if="logIN.wrongPassword" class="text-red-500">password is not a password</small>
                </div>
                <div class="w-full">
                   <button @click="logIN.loginButton(email,password)" class="bg-blue-700 text-white font-mono text-lg rounded py-2 w-full">
                    Login
                   </button> 
                </div>
            </div>
        </div>
     </section>

</template>


<style scoped>

</style>