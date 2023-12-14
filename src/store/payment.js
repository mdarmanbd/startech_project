import {reactive} from 'vue'
import {cartStore} from './cart'
import {compare} from './compare'

const payment = reactive({

    comparePayment(){
        console.log('comapre')
        compare.compareOrder = false
        cartStore.cartOrder = false
        compare.compareCart = {}
        cartStore.items = {}
        compare.compareItemCount = 0;
       
    },
    cartPayment(){
        console.log('cart')
        compare.compareOrder = false
        cartStore.cartOrder = false
        cartStore.items = {}
        compare.compareCart = {}
        compare.compareItemCount = 0;
      
    }
})

export{payment}