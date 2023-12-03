import {reactive} from 'vue'
import {computed} from 'vue'
import { cartStore } from './cart'
import {logIN} from './login'
import router from '../router/router'

const confirm = reactive ({
    orderItem:[],
    firstName: '',
    lastName: '',
    address: '',
    mobile: '',
    email: '',
    comment:'',
    wrongFirstName: false,
    wrongAddress: false,
    wrongMobile: false,
    wrongEmail: false,

    confirmOrderButton(item){

        cartStore.droneOrder = true
        cartStore.cartOrder = false

        if(this.orderItem[item.id -1]){
            router.push('/order')
        }
        else{
            this.orderItem.push(item)
            router.push('/order')
        } 
    },

    subTotalOrderPrice:computed(()=>{
        let total = 0
        for(let id in confirm.orderItem){
            total = total + confirm.orderItem[id].price
        }
        return parseFloat(total)
    }),

    // order page confirm order

    ConfirmOrder(){

        if(this.firstName.length == 0 || this.firstName.length < 1){
            this.wrongFirstName = true
        }
        
        else if (this.address.length < 4){
            this.wrongAddress = true
        }

        else if(this.mobile.length < 5 || this.mobile.length > 5){
            this.wrongMobile = true
        }

        else if (this.email.indexOf('@') == -1){
            this.wrongEmail = true
        }

        else{
            this.wrongFirstName = false
            this.wrongAddress = false
            this.wrongMobile = false
            this.wrongEmail = false

            if(logIN.registerUser){         // if successfuly login
                router.push('/orderSuccess')

            }else{                          // other wise go to the register page    
                router.push('/register')
            }
        }
    }


})

export{confirm}