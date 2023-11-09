import{ref,reactive} from 'vue'
import router from '../router/router'
import { register } from './register'
import md5 from 'blueimp-md5'

const logIN = reactive({
          wrongEmail : false,
          wrongPassword : false,
          registerUser : false,
          commonUser : true,
    

   loginButton(emailValue,passwordValue){
        const oldEmail = localStorage.getItem('email')
        const oldPassword = localStorage.getItem('confarmPassword')

          if(JSON.parse(oldEmail) == emailValue && JSON.parse(oldPassword) == md5(passwordValue)){
               localStorage.setItem('token','true')
               this.wrongEmail = false
               this.wrongPassword = false
               this.registerUser = true
               this.commonUser = false
               router.push('/profile')
             
          }else{
               this.wrongEmail = true
               this.wrongPassword = true
          }

     },

   logOut(){
          localStorage.removeItem('token')
          localStorage.removeItem('userFirstName')
          localStorage.removeItem('userLastName')
          localStorage.removeItem('email')
          localStorage.removeItem('newPassword')
          localStorage.removeItem('confarmPassword')
          router.push('/register')
          this.commonUser = true
          this.registerUser = false
     }

})

export{logIN}