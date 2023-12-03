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
        console.log('view order')
        router.push('/profileDroneOrder')
    }
    
})

export{profile}