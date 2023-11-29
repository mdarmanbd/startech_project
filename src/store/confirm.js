import {reactive} from 'vue'
import {computed} from 'vue'
import router from '../router/router'

const confirm = reactive ({
    orderItem:[],
    firstName: '',
    lastName: '',
    address: '',
    mobile: '',
    email: '',
    wrongFirstName: false,
    wrongAddress: false,
    wrongMobile: false,
    wrongEmail: false,

    confirmOrderButton(item){
        if(this.orderItem[item.id - 1]){
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
        }
    }


})

export{confirm}