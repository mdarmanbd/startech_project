<script setup>


</script>

<template>
    <div class="w-full bg-gray-100 h-screen">
        <div class="w-2/5 mx-auto  ">
            <div class="pt-24">
                <div class="bg-white rounded shadow-lg pt-8 pb-6">
                    <img src="../assets/success.svg" class="w-2/12 mx-auto">
                    <h2 class="text-lg font-bold text-black py-3 text-center">Thank you for ordering!</h2>
                    <div class="text-center pt-3 ">
                        <router-link to="/drone">
                            <button class="bg-orange-500 text-white font-normal px-5 py-1 pb-2 rounded hover:bg-orange-400">Home</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>