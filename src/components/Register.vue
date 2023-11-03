<script setup>
import {ref,reactive} from 'vue'
import { logIN } from '../store/login'
import ProfileVue from '../components/Profile.vue'

const newEmail = ref('')
const oldPassword = ref('')
const confarmPassword = ref('')

const userProfile = reactive({
    firstName : 'fsdf',
    lastName : 'fdsf'
})

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
                <RouterLink to="/logIn">
                    <h2 class="text-lg text-black font-semibold hover:text-orange-500">/ log in</h2>
                </RouterLink>
            </div>
            <div class="pl-2 flex flex-col">
                <RouterLink to="/register">
                    <h2 class="text-lg text-black font-semibold hover:text-orange-500">/ register</h2>
                </RouterLink>
            </div>
        </div>
        <div class="w-1/2 pt-10 mx-auto">
            <div class="pb-4 px-5">
                <h1 class="text-black text-lg font-semibold pb-1">This is regiter page</h1>
                <div class="flex gap-1 justify-between pb-2 pt-3">
                    <div class="">
                        <p class="text-black font-normal text-lg">First Name</p>
                        <input v-model="userProfile.firstName" type="text" class="w-full border border-gray-400 rounded outline-none pl-1 text-base">
                        
                    </div>
                    <div class="">
                        <p class="text-black font-normal text-lg">Last Name</p>
                        <input v-model="userProfile.lastName" type="text" class="w-full border border-gray-400 rounded outline-none pl-1 text-base">
                        
                    </div>
                  
                </div>
                <div class="pb-2">
                    <p class="text-black font-normal text-lg">Email / Phone</p>
                    <input v-model="newEmail" type="email" placeholder="example@.com" class="w-full border border-gray-400 rounded outline-none pl-1 text-base">
                    <small v-if="logIN.wrongEmail" class="text-red-500">email is not match</small>
                </div>
                <div class="pb-2">
                    <p class="text-black font-normal text-lg">Old Password</p>
                    <input v-model="oldPassword" type="text" class="w-full border border-gray-400 rounded outline-none pl-1 text-base">
                    
                </div>
                <div class="pb-2">
                    <p class="text-black font-normal text-lg">Confarm Password</p>
                    <input v-model="confarmPassword" type="text" class="w-full border border-gray-400 rounded outline-none pl-1 text-base">
                    <small v-if="logIN.wrongEmail" class="text-red-500">password is not match</small>
                </div>
                <div>
                   <button @click="logIN.register(newEmail , oldPassword , confarmPassword)" class="bg-blue-800 text-white font-mono text-lg rounded px-2">
                    Registration
                   </button> 
                </div>
            </div>
        </div>
     </section>
</template>

<style scoped>

</style>