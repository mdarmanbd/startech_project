import{ref,reactive,computed} from 'vue'
import router from '../router/router'

const cartStore = reactive({
    items:{},
    droneOrder:true,
    cartOrder:false,
    CartPopupShow : false,
    cartItemsPopup:{},

    addItem(product){  

        this.CartPopupShow = !this.CartPopupShow
        this.cartItemsPopup = {product}

        if( this.items[product.id]){
            this.items[product.id].quantity++
        }else{
            this.items[product.id] = {
                product,
                quantity : 1
            }
        }
        
        this.saveCartInLocalStorage()
    },
    cartClosePopup(){
        this.CartPopupShow = !this.CartPopupShow
    },

    viewCart(){
        router.push('/viewCart')
    },


     deletItem(product){
        delete this.items[product]
    },
    totalCartItems:computed(()=>{
        let total = 0
        for(let id in cartStore.items){
            total += cartStore.items[id].quantity
        }
        
        return total
    }),
   
    totalPrice:computed(()=>{
        let total = 0
        for(let id in cartStore.items){
            total += cartStore.items[id].product.price * cartStore.items[id].quantity
        }
        return parseFloat(total)
    }),
    emptyCart(){
        this.items= {}
        this.saveCartInLocalStorage()
    },
    cartConfirmOrder(){
        
        this.droneOrder = false
        this.cartOrder = true
        router.push('/order')
    },

    saveCartInLocalStorage(){
        localStorage.setItem('cart',JSON.stringify(this.items))
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('cart'))
    },
   
    
})
cartStore.getCartFromLocalStorage()

export { cartStore }