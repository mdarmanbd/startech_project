import{ref,reactive,computed} from 'vue'
import router from '../router/router'
import { cartStore } from './cart'
import { payment } from './payment'

const compare = reactive({
   compareShow : false,
   PopupShow : false,
   showCompareButton : false,

   compareCart:{},
   compareItemsPopup:{},
   compareItems:{},
   compareItemCount:0,
   compareOrder: false,

    comparePopup(product){
     
      cartStore.cartOrder = false
      this.compareOrder = true
      payment.comparePayButton = true
      payment.disableComparePayButton = false


      this.PopupShow = !this.PopupShow
      this.showCompareButton = true
       this.compareItemsPopup[product.id] = { product }

      if( this.compareCart[product.id]){

      }else{
         this.compareItemCount++
         if(this.compareItemCount < 5){
            this.compareCart[product.id] = {
               product,
            }
         }else{
            this.compareItemCount = 4
         }
      }
   },
   closeCompareItemButton(compareItemId){
      delete this.compareCart[compareItemId]
      this.compareItemCount--
      if(this.compareItemCount == 0){
         this.showCompareButton = false
      }
   },
   closePopup(){
      this.PopupShow = !this.PopupShow
      this.compareItemsPopup = {}
      
   },
   comapreButton(){
      router.push('/compareItem')
   },
   clearButton(){
      this.compareCart = {},
      this.showCompareButton = false,
      this.compareItemCount = 0

   },

   compareNowButton(item){
      this.PopupShow = false
      this.compareItems = {
         item
      }
      this.compareItemsPopup = {}
     router.push('/compareItem')
   },

  
   
    
})

export{compare}