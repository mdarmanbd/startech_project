

<script setup>
import { ref, reactive,onMounted } from 'vue'

  const count = ref(0);
  const fullImage = ref("https://www.startech.com.bd/image/cache/catalog/home/banner/mpl-pc-laptop-offer-982x500.webp");
  const images = reactive([
  {
    full: "https://www.startech.com.bd/image/cache/catalog/home/banner/mpl-pc-laptop-offer-982x500.webp"
  },
  {
    full: "https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp"
  },
  {
    full: "https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
  },
  
])

let currentIndex = 0
const updatedImage =()=> {
    fullImage.value = images[currentIndex].full
}

const carouselBtnOne = () =>{
    currentIndex = 0
    fullImage.value = images[0].full
    updatedImage()
}
const carouselBtnTwo = () =>{
    currentIndex = 1
    fullImage.value = images[1].full
    updatedImage()
}
const carouselBtnThree = () =>{
    currentIndex = 2
    fullImage.value = images[2].full
    updatedImage()
}

onMounted(()=>{
    const interval = setInterval(()=>{
        currentIndex = (currentIndex + 1) % images.length
        updatedImage()
    },3000)
})



</script>

<template>
    <div class="w-full block sm:block md:block lg:flex xl:flex gap-8 p-2 bg-gray-100 ">
      <div class="w-full relative sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
          <div class="w-full ">
            <img :src="fullImage" class="w-full m-auto">
            <div class="absolute w-full flex justify-center bottom-5">
                    <button @click="carouselBtnOne" :class="[currentIndex == 0 ? 'bg-orange-500':'bg-gray-200 opacity-25']" class="px-4 w-10 h-3"></button>
                    <button @click="carouselBtnTwo" :class="[currentIndex == 1 ? 'bg-orange-500':'bg-gray-200 opacity-25']" class="px-4 w-10 h-3 ml-3"></button>
                    <button @click="carouselBtnThree" :class="[currentIndex == 2 ? 'bg-orange-500':'bg-gray-200 opacity-25']" class="px-4 w-10 h-3 ml-3"></button>
            </div>
          </div>
      </div>
      <div class="w-full mt-5 sm:mt-5 md:mt-5 lg:mt-0 xl:mt-0 sm:w-full md:w-full lg:w-3/12 xl:w-3/12">
        <div class=" w-full bg-creamBrulee p-1 px-3 text-center shadow-lg">
            <h1 class="pt-2 text-base text-black font-medium pb-1">Compare Products</h1>
            <div class="flex justify-betwee bg-white relative mt-4 sm:mt-4 md:mt-4 lg:mt-3 xl:mt-4">
                <input type="text" class="text-base text-black font-normal border-none outline-none w-full focus:border-transparent" placeholder="serach & select...">
                <img class="absolute right-1 top-3 " src="../assets/search.svg">
            </div>
            <div class="flex justify-betwee bg-white relative mt-4 sm:mt-4 md:mt-4 lg:mt-3 xl:mt-4">
                <input type="text" class="text-base text-black font-normal border-none outline-none w-full focus:border-transparent" placeholder="serach & select...">
                <img class="absolute right-1 top-3 " src="../assets/search.svg">
            </div>
            <div class="my-5 sm:my-5 md:my-5 lg:my-3 xl:my-5">
                <button class="bg-transparent px-5 py-1 border-2  border-blue-600 rounded text-center text-blue-600 text-base font-medium">View Comparision</button>
            </div>
        </div>
        <div class="mt-10 sm:mt-10 md:mt-10 lg:mt-2 xl:mt-10 shadow-lg">
                <img class="w-full" src="https://www.startech.com.bd/image/catalog/home/banner/small/budget-desktop-pc-27k.webp">
        </div>
      </div>
      
    </div>
</template>

<style scoped></style>