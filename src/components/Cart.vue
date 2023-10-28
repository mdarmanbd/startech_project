<script setup>
import{ref,reactive} from 'vue'
import {cartStore} from '../store/cart'

const cartShow = ref(false)

const cart = () => {
    cartShow.value = !cartShow.value
}

function deletItem(item) {
  const cartItems = this.cartStore.items;
    console.log(cartItems.indexOf(item.product.id))
  const index = cartItems.indexOf(item);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }

}


</script>

<template>
    <section>
        <div class="relative">
            <div @click="cart" class="fixed cursor-pointer bg-blue-950 bottom-32 w-16 right-10 h-auto rounded-lg pb-3 z-10">
                <img src="../assets/e-commerch.svg" class="w-full m-auto p-3">
                <div class="absolute -bottom-1 left-4 ">
                    <p class="pb-2 text-base font-normal text-center text-white">Cart</p> 
                </div>
                <div class="bg-orange-500 w-6 rounded-full absolute -top-2 -right-1">
                    <p class="text-white text-center text-lg font-bold">{{ cartStore.totalCartItems }}</p> 
                </div>
            </div>
            <!--cart side bar--->
            <div v-if="cartShow" class="fixed w-60 bg-white right-0 top-0 h-screen z-10">
                <div class="w-full bg-deepLightBlue flex justify-between px-3 py-2 ">
                    <p class="uppercase text-base text-white font-semibold">Your Cart</p>
                    <img @click="cart" src="../assets/Close.svg" class="cursor-pointer">
                </div>
                <div v-for="item in cartStore.items" :key="item.id" class="py-2 border-b">
                    <div class="flex justify-around gap-2 leading-4 px-1 hover:bg-slate-100">
                        <img :src="item.product.thumbnail" class="w-10 h-auto">
                        <p class="text-sm font-normal text-black">{{ item.product.description }}</p>

                        <div @click="deletItem(item)" class="flex flex-col my-auto cursor-pointer">
                            <img src="../assets/Delet.svg">
                        </div>
                    </div>
                    <div class="px-1 flex justify-center py-1">
                        <p class="text-sm">{{ item.product.price }} * </p>
                        <p class="text-sm"> {{ item.quantity }} =</p>
                        <p class="text-sm">{{ item.product.price * item.quantity }}</p>
                    </div>
                    
                </div>
                
            </div>
        </div> 
    </section>

</template>