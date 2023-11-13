import{ref,reactive} from 'vue'
import router from '../router/router'

const compare = reactive({
   compareShow : false,
   PopupShow : false,

   compareItemsPopup:{},
   compareItems:{},

   // addItem(product){   
   //     if( this.items[product.id]){
   //         this.items[product.id].quantity++
   //     }else{
   //         this.items[product.id] = {
   //             product,
   //             quantity : 1
   //         }
   //     }
       
   //     this.saveCartInLocalStorage()
   // },

    comparePopup(product){
      this.PopupShow = !this.PopupShow
      this.compareItemsPopup[product.id] = {
         product,
      }
     
   },
   compareNowButton(item){
      this.PopupShow = false
      this.compareItems = {
         item
      }
      console.log(item)
      this.compareItemsPopup = {},
      router.push('/compareItem')
   },

   continueButton(){

   }
   
    
})

export{compare}