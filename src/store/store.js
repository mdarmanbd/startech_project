import{ref,reactive} from 'vue'



let sideBar = ref(false)

const authStore = reactive({
    navThreeBar: () =>{
        sideBar.value = !sideBar.value
        
       // console.log(sideBar.value)
        return sideBar.value
    },
    
})

export{authStore,sideBar}