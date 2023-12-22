<script setup>
import {ref} from 'vue'
// // let arr = [1, 2, 3, 3, 4];
// const numbers = [1, 2, 3, 3, 4, 5, 5];

// function findDuplicateNumbers(array){
//     const find = []
//     for(let i = 0 ; i < array.length; i++){
//         for(let f = i + 1 ; f < array.length ; f++){
//            if(array[i] == array[f]){
//                 find.push(array[i])
//            }
//         }
//     }
//     console.log(find.length)
//     return find
// }


// console.log(findDuplicateNumbers(numbers)); 


    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordReg = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

    const email = ref('');
    const emailError = ref(false);
    
    const phoneNumber = ref('');
    const phoneError = ref(false);


    const validateEmail = () => {
      
      //const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const regex = /^[a-zA-Z0-9_.]+(@hotmail)+$/;
      if (!regex.test(email.value)) {
        emailError.value = 'Invalid email format';
      } else {
        emailError.value = '\'';
      }
    };

   // AA#11jjj
    const validatePhoneNumber = () => {
      const regex = /^\d{5}$/; // Basic check for 10 digits
      if (!regex.test(phoneNumber.value)) {
        phoneError.value = 'Invalid phone number format';
      } else {
        phoneError.value = '';
      }
    };

const logIn = () =>{
      if(!passwordReg.test(phoneNumber.value)){
          // emailError.value = true
          phoneError.value = true
      }
      
      else if(!emailReg.test(email.value)){
          emailError.value = true
      }
      
      else{
        // emailError.value = false
        phoneError.value = false
        emailError.value = false
      }
}



// function duplicateNumber(arr){
//     return arr
// }

// console.log(duplicateNumber(arr))


//const seen = new Set(arr);
//console.log(arr)

// const result = arr.filter(number => {
//     const seenSize = seen.size
//     const seenAdd =  seen.add(number).size
    
//     return seenSize === seenAdd
// })
// console.log(result)
// console.log(result.length)


</script>

<template>
   
    <h1>this is dron gimbal</h1>

    <div class="p-5"> 
      <input v-model="email" class="rounded border-2 border-gray-100" placeholder="Enter Email" />
      <p v-if="emailError" style="color: red;"> emailError </p>

      <br />

      <input v-model="phoneNumber" class="rounded border-2 border-gray-100" placeholder="Enter Phone Number" />
      <p v-if="phoneError" style="color: red;"> phoneError </p>

     
    </div>
    <button @click="logIn" class="bg-cyan-600 text-white py-1 px-2 m-2">login</button>
</template>