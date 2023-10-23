
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Drone from '../components/Drone.vue'
import Gimbal from '../components/Gimbal.vue'
import Battery from '../components/Battery.vue'
import Tv from '../components/Tv.vue'
import Mobile from '../components/Mobile.vue'
import Portable from '../components/PortablePower.vue'
import Vr from '../components/Vr.vue'
import SmartWatch from '../components/SmartWatch.vue'


const routes = [
    {
        path: '/',
        component:Home
    },
    {
        path:'/drone',
        component:Drone
    },
    {
        path:'/gimbal',
        component:Gimbal
    },
    {
        path:'/battery',
        component:Battery
    },
    {
        path:'/tv',
        component:Tv
    },
    {
        path:'/mobile',
        component:Mobile
    },
    {
        path:'/portable',
        component:Portable
    },
    {
        path:'/vr',
        component:Vr
    },
    {
        path:'/smartWatch',
        component:SmartWatch
    }
    
   
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router