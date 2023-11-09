import{ref,reactive} from 'vue'
import router from '../router/router'
import md5 from 'blueimp-md5'

const register = reactive({

    wrongEmail : false,
    wrongPassword : false,
    commonUser : true,
    registerUser : false,

  

   register(newEmailValue,newPasswordValue,confarmPasswordValue,userFirstName,userLastName){

          if( newPasswordValue === confarmPasswordValue){

            localStorage.setItem('email',JSON.stringify(newEmailValue))
            localStorage.setItem('newPassword',JSON.stringify( md5(newPasswordValue)))
            localStorage.setItem('confarmPassword',JSON.stringify( md5(confarmPasswordValue)))
            localStorage.setItem('userFirstName',JSON.stringify(userFirstName))
            localStorage.setItem('userLastName',JSON.stringify(userLastName))
            router.push('/logIn')
            this.registerUser = true
            this.commonUser = false
            this.wrongEmail = false
                
          }else{
            this.wrongEmail = true
          }

      
        
   },

    
})

export{register}