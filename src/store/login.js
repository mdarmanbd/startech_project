import{ref,reactive} from 'vue'
import router from '../router/router'

const logIN = reactive({

    wrongEmail : false,
    wrongPassword : false,
    commonUser : true,
    registerUser : false,

   login(emailValue,passwordValue){
        localStorage.setItem('email',JSON.stringify(emailValue))
        localStorage.setItem('password', JSON.stringify(passwordValue))
   },

   register(newEmailValue,oldPasswordValue,confarmPasswordValue){
        const localStorageEmail = localStorage.getItem('email')
        const localStoragePassword = localStorage.getItem('password')

        if(JSON.stringify(newEmailValue) === localStorageEmail && JSON.stringify(oldPasswordValue) === localStoragePassword && JSON.stringify(confarmPasswordValue) === localStoragePassword){
            this.wrongEmail = false
            this.commonUser = false
            this.registerUser = true
            router.push('/profile')
        }
        else{
           this.wrongEmail = true
           
        }
        
   },

   logOut(){
        localStorage.setItem('email','{}')
        localStorage.setItem('password','{}')
        router.push('/')
        this.registerUser = false
        this.commonUser = true
   }
    
})

export{logIN}