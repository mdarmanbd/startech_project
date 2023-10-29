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
    deletItem(item){
        const selectProduct = item.product
      const cartItem =  cartStore.items
      if( selectProduct in cartItem){
        console.log('item have')
      }else{
        console.log('do not have')
      }
    },
    totalPrice:computed(()=>{
        let total = 0
        for(let id in cartStore.items){
            total += cartStore.items[id].product.price * cartStore.items[id].quantity
        }
        return parseFloat(total)
    }),
    addItem(product){
        if(this.items[product.id]){
            this.items[product.id].quantity++
        }else{
            this.items[product.id] = {
                product,
                quantity : 1
            }
        }
    }
    
})

export{cartStore}