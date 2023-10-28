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
    totalPrice(){},
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