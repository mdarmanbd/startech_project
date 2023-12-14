<script setup>
import {ref,reactive,onBeforeMount, watch} from 'vue'
import {cartStore} from '../store/cart'
import {compare} from '../store/compare'
import {confirm} from '../store/confirm'
import axios from 'axios'

const products = ref([])
const searchProductTitle = ref('')
const limit = ref(10)

// search api
function searchFatchData(searchProductTitleLowerCase){
    axios.get(`https://dummyjson.com/products/search?q=${searchProductTitleLowerCase}`)
    .then(respons=>{
        products.value = respons.data.products
       // console.log(products.value[1].title)
        console.log(searchProductTitleLowerCase)
    })
}


// all proiduct list api
const fatchData = (limit) =>{
    axios.get(`https://dummyjson.com/products?limit=${limit.value}`)
    .then(respons=>{
        products.value = respons.data.products
       // console.log(products.value[4].title.toLowerCase())

    })
}

watch(searchProductTitle,(newTitle,oldTitle)=>{
    const searchProductTitleLowerCase = searchProductTitle.value.toLowerCase()
    searchFatchData(searchProductTitleLowerCase)
})

watch(limit,(newValue,oldValue)=>{
    fatchData(limit)
})

onBeforeMount(()=>{
    fatchData(limit)
    
})


</script>

<template>
    <section class="bg-white w-full">
        <div class="py-3 ">
            <div class="w-full ">
                <div class="flex flex-row justify-start py-3 px-3">
                    <div>
                        <RouterLink to="/">
                            <img src="../assets/home.svg">
                        </RouterLink>
                        
                    </div>
                    <div class="pl-2 flex flex-col">
                        <RouterLink to="/drone">
                            <h2 class="text-lg text-black font-semibold hover:text-orange-500">/ Drone</h2>
                        </RouterLink>
                    </div>
                </div>
                <h3 class="pb-2 text-xl font-semibold text-blue-700 px-3">Best Gimbal Price in Bangladesh</h3>
                <div class="w-full block space-x-1 space-y-2 sm:block sm:space-x-1 sm:space-y-2 md:space-x-0 md:space-y-0 sm:w-full md:flex lg:flex xl:flex flex-row gap-3 py-3 px-3">
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">DJI</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Gudsen</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Zhiyan</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Insta360</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Baseus</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">WiWu</button>
                    <button class="bg-transparent rounded-full border border-gray-200 px-3 py-1 text-sm font-normal text-black">Leofoto</button>
                </div>
                <div class="w-full bg-gray-100">
                    <div class="w-full flex justify-between py-3 px-1 sm:px-1 md:px-3 lg:px-3 xl:px-3">
                        <div class="flex justify-end">
                            <label class="text-base text-black pt-2 hidden sm:hidden md:flex lg:flex xl:flex">Search : </label>
                            <input v-model="searchProductTitle" type="text" class="outline-none focus:outline-none border-none px-2 text-sm font-medium text-black" placeholder="product name">
                        </div>
                        <div>
                            <label class="text-base text-black">Search : </label>
                            <select v-model="limit" class="text-black text-sm cursor-pointer ">
                                <option value="10" class="text-black text-sm cursor-pointer">10</option>
                                <option value="20" class="text-black text-sm cursor-pointer">20</option>
                                <option value="30" class="text-black text-sm cursor-pointer">30</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 px-3">
                        <div v-for="(product,index) in products" :key="product.id" class="bg-white w-full py-3">
                            <RouterLink :to="`/drone/${product.id}`">
                                <div class="border-b border-b-gray-200">
                                    <img :src="product.thumbnail" class="w-1/2 m-auto pb-2">
                                </div>
                                <div class="flex flex-col py-3 px-3 border-b border-b-gray-200">
                                    <p class="pb-1 text-center"><span class="text-lg font-medium">Brand name :</span> <span class="text-lg font-medium"> {{ product.title }}</span></p>
                                    <p class="w-full text-justify"><span class="text-base font-medium">Product description :</span> <span class="text-15 font-normal">{{ product.description }}</span> </p>
                                </div>
                            </RouterLink>
                            
                            <div class="text-center px-3">
                                <p class="text-center pb-1 pt-3 text-orange-500 text-lg font-semibold">{{ product.price }} $</p>
                                <!--add to card-->
                                <button @click="cartStore.addItem(product)" class="w-full bg-blue-100 rounded text-center pb-2 p-1 text-blue-600 font-medium text-base hover:bg-blue-200">Add to card</button>
                                <!--add to compare-->
                                <div class="pt-1">
                                    <button @click="compare.comparePopup(product)" class="w-full bg-white rounded text-center pb-2 p-1 text-gray-600 font-medium text-base hover:bg-gray-100">Add to compare</button>
                                </div>
                            </div>
                            
                        </div>
                           
                    </div>
                    
                </div>
            </div>    
        </div>
    </section>
    <!---compare popup component---->
        <div v-if="compare.PopupShow" class="fixed top-0 left-0 w-full h-full z-10 bg-blackOverLay">
            <div class="relative w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 top-1/3 h-48 bg-slate-50 mx-auto rounded opacity-100">
                <div class="grid grid-cols-1 p-3 w-full">
                    <div class="w-full flex justify-end">
                        <img @click="compare.closePopup" src="../assets/Close.svg" class="bg-orange-500 p-1 cursor-pointer rounded hover:bg-orange-400">
                    </div>
                </div>
                <div v-for="item in compare.compareItemsPopup" :key="item.id" class="w-11/12 mx-auto">
                    <div class="pb-3 flex justify-start gap-2">
                        <div class="">
                            <img src="../assets/true.svg" class="w-7">
                        </div>
                        <p class="text-black text-base font-normal">Success: You have added
                            <span class="text-orange-500"> {{ item.product.title }} </span> 
                             to your product comparison!</p>
                    </div>
                    <div class="pl-3 flex gap-3">
                        <button @click="compare.compareNowButton(item)" class="bg-blue-700 text-yellow-300 text-base font-semibold px-4 pb-2 pt-1 rounded hover:bg-blue-800 hover:duration-300 hover:translate-x-1">Compare Now</button>
                        <button @click="confirm.confirmOrderButton(item.product)"  class=" bg-white text-blue-800 text-base font-semibold px-4 pb-2 pt-1 rounded hover:bg-blue-800 hover:text-white hover:duration-300 border-2 border-blue-800 hover:translate-x-1">Comfirm Order</button>
                    </div>
                </div>
            </div>    
        </div>
        <!--add to cart popup component-->
        <div v-if="cartStore.CartPopupShow" class="fixed top-0 left-0 w-full h-full z-10 bg-blackOverLay">
            <div class="relative w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 top-1/3 h-48 bg-slate-50 mx-auto rounded opacity-100">
                <div class="grid grid-cols-1 p-3 w-full">
                    <div class="w-full flex justify-end">
                        <img @click="cartStore.cartClosePopup" src="../assets/Close.svg" class="bg-orange-500 p-1 cursor-pointer rounded hover:bg-orange-400">
                    </div>
                </div>
                <div v-for="item in cartStore.cartItemsPopup" :key="item.id" class="w-11/12 mx-auto">
                    <div class="pb-3 flex justify-start gap-2">
                        <div class="">
                            <img src="../assets/true.svg" class="w-7">
                        </div>
                        <p class="text-black text-base font-normal">Success: You have added
                            <span class="text-orange-500"> {{ item.title }} </span> 
                             to your product comparison!</p>
                    </div>
                    <div class="pl-3 flex gap-3">
                        <button @click="cartStore.viewCart" class="bg-blue-700 text-white text-base font-semibold px-4 pb-2 pt-1 rounded hover:bg-blue-800 hover:duration-300 hover:translate-x-1">View Cart</button>
                        <button @click="cartStore.cartConfirmOrder" class="bg-white text-blue-800 text-base font-semibold px-4 pb-2 pt-1 rounded hover:bg-blue-800 hover:text-white hover:duration-300 border-2 border-blue-800 hover:translate-x-1">Comfirm Order</button>
                    </div>
                </div>
            </div>    
        </div>
</template>