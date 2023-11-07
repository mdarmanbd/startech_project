import{ref,reactive,computed} from 'vue'


const cartStore = reactive({
    items:{},
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

    saveCartInLocalStorage(){
        localStorage.setItem('cart',JSON.stringify(this.items))
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('cart'))
    },
    addItem(product){
        
        if(this.items[product.id]){
            this.items[product.id].quantity++
        }else{
            this.items[product.id] = {
                product,
                quantity : 1
            }
        }
        this.saveCartInLocalStorage()
    },
     deletItem(product){
        delete this.items[product]
    },
    
})
cartStore.getCartFromLocalStorage()
export{cartStore}