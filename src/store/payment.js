import {reactive} from 'vue'
import {cartStore} from './cart'
import {compare} from './compare'
import {confirm} from './confirm'

const payment = reactive({
    cartPayButton : true,
    disableCartPayButton : false,
    comparePayButton : true,
    disableComparePayButton : false,

    comparePayment(){
        console.log('comapre')
        this.comparePayButton = false
        this.disableComparePayButton = true
        // compare.js
        compare.compareOrder = false
        compare.compareCart = {}
        compare.compareItems = {}
      //  compare.compareItemsPopup = {}
        compare.compareOrder = false
        compare.compareItemCount = 0;
        // cart.js
        cartStore.cartOrder = false
        cartStore.items = {}
        cartStore.saveCartInLocalStorage()
        // confirm.js
        confirm.orderItem = []
        alert('order palce success')
       
    },
    cartPayment(){
        console.log('cart')
        this.cartPayButton = false
        this.disableCartPayButton = true
        // compare.js
        compare.compareOrder = false
        compare.compareOrder = false
        compare.compareCart = {}
        compare.compareItems = {}
      //  compare.compareItemsPopup = {}
        compare.compareItemCount = 0;
        // cart.js
        cartStore.cartOrder = false
        cartStore.cartOrder = false
        cartStore.items = {}
        cartStore.saveCartInLocalStorage()
        // confirm.js
        confirm.orderItem = []
        alert('order palce success')
        
    }
})

export{payment}