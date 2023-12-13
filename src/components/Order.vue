<script setup>
import OrderFrom from '../components/OrderFrom.vue'
import { cartStore } from '../store/cart';
import {confirm} from '../store/confirm'

const orderItem = confirm.orderItem




</script>

<template>
    <!-- <p class="text-gray-600 pb-2 p-5">{{ orderItem }}</p> -->
    <div class="w-full px-5 py-5 bg-slate-100">
        <div class="pl-2 flex flex-col pb-2">
            <RouterLink to="/drone">
                <h2 class="text-lg text-black font-semibold hover:text-orange-500"> Drone</h2>
            </RouterLink>
        </div>

        <div class="block sm:block md:flex lg:flex xl:flex border-b border-b-gray-300 pb-2">
            <OrderFrom></OrderFrom>
            <div class="w-full gap-3">
                <div class="w-full block sm:block md:flex lg:flex xl:flex sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 mx-auto  gap-5">
                    <div class="mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 w-full sm:w-full md:w-1/2 lg:w-full xl:w-full bg-white rounded px-5 pt-2 pb-5">
                        <div class="flex gap-4 border-b pb-2">
                            <p class="w-5 text-center text-orange-600 font-normal text-base bg-orange-100 rounded-full px-1 pb-1">2</p>
                            <p class="text-base text-black font-medium">Payment Method</p>
                        </div>
                        <p class="text-base font-normal text-black pt-4 pb-2">Select a payment method</p>
                        <p class="pt-3 ">
                            <input type="radio">
                            <samp class="text-base font-normal text-black pl-2">Cash on Delivery</samp> 
                        </p>
                        <p class="pt-2">
                            <input type="radio">
                            <samp class="text-base font-normal text-black pl-2">Online payment</samp> 
                        </p>
                        <p class="pt-2">
                            <input type="radio">
                            <samp class="text-base font-normal text-black pl-2">POS on Delivery</samp> 
                        </p>
                        <p class="py-4 text-base font-normal text-black">We Accept : </p>
                        <div class="w-full">
                            <img class="w-full" src="https://www.startech.com.bd/catalog/view/theme/starship/images/payment-methods.png">
                        </div>
                    </div>

                    <div class="mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 w-full sm:w-full md:w-1/2 lg:w-full xl:w-full bg-white rounded px-5 pt-2 pb-5">
                        <div class="flex gap-4 border-b pb-2">
                            <p class="w-5 text-center text-orange-600 font-normal text-base bg-orange-100 rounded-full px-1 pb-1">3</p>
                            <p class="text-base text-black font-medium">Delivery Method</p>
                        </div>
                        <p class="text-base font-normal text-black pt-4 pb-2">Select a delivery method</p>
                        <p class="pt-3 ">
                            <input type="radio">
                            <samp class="text-base font-normal text-black pl-2">Home Delivery</samp> 
                        </p>
                        <p class="pt-2">
                            <input type="radio">
                            <samp class="text-base font-normal text-black pl-2">Store Pickup</samp> 
                        </p>
                        <p class="pt-2">
                            <input type="radio">
                            <samp class="text-base font-normal text-black pl-2">Request Express - Charge Applicable</samp> 
                        </p>
                    </div>
                </div>
                <div class="w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 mx-auto">
                    <div class="my-5 w-full">
                        <div class="w-full block sm:block md:flex lg:flex xl:flex gap-3 p-5 bg-white rounded">
                            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 block sm:block md:flex lg:flex xl:flex gap-2 space-y-2 sm:space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-0">
                                <input class="text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600 w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5" placeholder=" Gift Voucher">
                                <button class="w-full sm:w-full md:w-fit lg:w-fit xl:w-fit bg-transparent border border-blue-500 text-15 font-normal text-blue-800 rounded px-5 pt-1 pb-2 hover:bg-blue-500 hover:text-white">Apply Voucher</button>
                            </div>
                            <div class="mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 block sm:block md:flex lg:flex xl:flex gap-2 space-y-2 sm:space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-0">
                                <input class="text-15 font-normal border border-gray-300 focus:outline-none rounded px-2 py-1 text-gray-600 w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5" placeholder="Promo / Coupon">
                                <button class="w-full sm:w-full md:w-fit lg:w-fit xl:w-fit bg-transparent border border-blue-500 text-15 font-normal text-blue-800 rounded px-5 pt-1 pb-2 hover:bg-blue-500 hover:text-white">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 mx-auto bg-white rounded">
                    <div class="p-5">
                        <div class="flex gap-4 border-b pb-2">
                            <p class="w-5 text-center text-orange-600 font-normal text-base bg-orange-100 rounded-full px-1 pb-1">4</p>
                            <p class="text-base text-black font-medium">Order Overiew</p>
                        </div>
                        <!--order details-->
                        <div class="pt-3">
                            <div class="bg-gray-100 w-full">
                                <div class="w-full flex">
                                    <div class="w-3/5 border-r-2 border-r-white">
                                        <p class="text-gray-900 text-lg font-normal p-3">Product Name</p>
                                    </div>
                                    <div class="w-1/5">
                                        <p class="text-gray-900 text-lg font-normal p-3 border-r-2 border-r-white">Price</p>  
                                    </div>
                                    <div class="w-1/5">
                                        <p class="text-gray-900 text-lg font-normal p-3">Total</p>    
                                    </div>
                                </div>
                                <!-- drone confirm order view -->
                                <div v-if="cartStore.droneOrder">
                                    <div v-for="product in orderItem" :key="product.id" class="w-full flex">
                                        <div class="w-3/5">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-1 sm:p-1 pl-3 sm:pl-3 md:pl-0 md:p-1 lg:p-3 xl:p-3">
                                                <h2 class="text-15 sm:text-15 md:text-lg lg:text-lg xl:text-lg font-normal text-black">{{ product.title }}</h2>
                                            </div>
                                        </div>
                                        <div class="w-1/5">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-1 sm:p-1 md:p-1 lg:p-3 xl:p-3">
                                                <h2 class="text-15 sm:text-15 md:text-lg lg:text-lg xl:text-lg font-normal text-black">{{ product.price }} * 1</h2>
                                            </div>
                                        </div>
                                        <div class="w-1/5">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-1 sm:p-1 md:p-1 lg:p-3 xl:p-3">
                                                <h2 class="text-15 sm:text-15 md:text-lg lg:text-lg xl:text-lg font-normal text-black">{{ product.price }}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div  v-if="confirm.subTotalOrderPrice > 10" class="w-full flex justify-end sm:justify-end">
                                        <div class="w-1/4 sm:w-1/4 md:w-1/4 lg:w-3/5 xl:w-3/5">

                                        </div>
                                        <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-3">
                                                <h2 class="text-lg font-normal text-black">Sub-Total :</h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-3">
                                                <h2 class="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg font-normal text-black">Home Delivery :</h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-3">
                                                <h2 class="text-lg font-normal text-black">Total :</h2>
                                            </div>
                                        </div>
                                        <div class="w-fit sm:w-fit md:w-fit lg:w-1/4 xl:w-1/4">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-3">
                                                <h2 class="text-lg font-normal text-orange-500 lg:text-center lg:pl-4">{{ confirm.subTotalOrderPrice }} </h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 pb-0.5 sm:p-0.5 md:pb-4 lg:pb-2 xl:pb-2 bg-white p-3">
                                                <h2 class="text-lg font-normal text-orange-500 lg:text-center lg:pl-4 pb-0 sm:pb-0 lg:pb-2 xl:pb-2">100</h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-3">
                                                <h2 class="text-lg font-normal text-orange-500 lg:text-center lg:pl-4">{{ confirm.subTotalOrderPrice + 100 }}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!---cart confirm order view-->
                                <div v-if="cartStore.cartOrder" class="">
                                    <div v-for="item in cartStore.items" :key="item.id" class="w-full flex">
                                        <div class="w-3/5">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-1 sm:p-1 pl-3 sm:pl-3 md:pl-0 md:p-1 lg:p-3 xl:p-3">
                                                <h2 class="ttext-15 sm:text-15 md:text-lg lg:text-lg xl:text-lg font-normal text-black">{{ item.product.title }}</h2>
                                            </div>
                                        </div>
                                        <div class="w-1/5">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-1 sm:p-1 md:p-1 lg:p-3 xl:p-3">
                                                <h2 class="text-15 sm:text-15 md:text-lg lg:text-lg xl:text-lg font-normal text-black">{{ item.product.price }} * {{ item.quantity }}</h2>
                                            </div>
                                        </div>
                                        <div class="w-1/5">
                                            <div class="border-b border-b-gray-300 pb-2 bg-white p-1 sm:p-1 md:p-1 lg:p-3 xl:p-3 ">
                                                <h2 class="text-15 sm:text-15 md:text-lg lg:text-lg xl:text-lg font-normal text-black">{{ item.product.price * item.quantity }}</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full flex justify-end sm:justify-end  ">
                                        <div class="w-1/4 sm:w-1/4 md:w-1/4 lg:w-3/5 xl:w-3/5">

                                        </div>
                                        <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                            <div class="border-b border-b-gray-300 bg-white p-3">
                                                <h2 class="text-lg font-normal text-black">Sub-Total :</h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 bg-white p-3">
                                                <h2 class="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg font-normal text-black">Delivery :</h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 bg-white p-3">
                                                <h2 class="text-lg font-normal text-black">Total :</h2>
                                            </div>
                                        </div>
                                        <div class="w-fit sm:w-fit md:w-fit lg:w-1/4 xl:w-1/4 ">
                                            <div class="border-b border-b-gray-300 bg-white p-3 ">
                                                <h2 class="text-lg font-normal text-orange-500 p-0 sm:p-0 md:p-0 lg:pl-4 xl:pl-4">{{ cartStore.totalPrice }} </h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 bg-white p-2 pb-3 sm:pb-3 md:pb-4 lg:pb-4 xl:pb-4">
                                                <h2 class="text-lg font-normal text-orange-500 p-0 sm:p-0 md:p-0 lg:pl-4 xl:pl-4">100</h2>
                                            </div>
                                            <div class="border-b border-b-gray-300 bg-white p-2 pb-4 sm:pb-4 md:pb-4 lg:pb-4 xl:pb-4">
                                                <h2 class="text-lg font-normal text-orange-500 p-0 sm:p-0 md:p-0 lg:pl-4 xl:pl-4">{{ cartStore.totalPrice + 100 }}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="bg-slate-100 w-full my-3">
            <div class="pr-10 flex justify-end">
                <button @click="confirm.ConfirmOrder" class="text-white bg-blue-600 text-lg font-normal py-2 px-3 rounded">Confirm order</button>
            </div>
            
        </div>
        
    </div>

</template>