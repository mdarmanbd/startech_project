import {reactive} from 'vue'

import {cartStore} from './cart'
import {compare} from './compare'

const payment = reactive({

    comparePayment(){
       // console.log('comapre')
        compare.compareCart = {}
        cartStore.items = {}
      
    //   compare.compareItems = 0
    //   compare.compareItemsPopup = 0
      // cartStore.totalCartItems = {}
      // compare.compareItemCount = 0
    },
    cartPayment(){
      //  console.log('cart')
        cartStore.items = {}
        compare.compareCart = {}
      
    //    compare.compareItems = 0
    //    compare.compareItemsPopup = 0
       // cartStore.totalCartItems = {}
       // compare.compareItemCount = 0
    }
})

export{payment}