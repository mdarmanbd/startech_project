import{reactive} from 'vue'
import router from '../router/router'


const profile = reactive({

    orderStatus: true,
    orderNavStatus: false,

    order(){
        this.orderStatus = false
        this.orderNavStatus = true
        
    },
    dronOrder(){
        // console.log('view order')
        router.push('/profileDroneOrder')
    },
    cartOrder(){
        router.push('/profileCartOrder')
    },
    dronPayNow(){
       
        router.push('/payment')
    },
    cartPayNow(){
        router.push('/cartPayment')
        console.log('ihf')
    },
    pay(){
        alert('order palce success')
    }
    
})

export{profile}