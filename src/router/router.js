
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Drone from '../components/Drone.vue'
import SingleProduce from '../components/SingleProduct.vue'
import Gimbal from '../components/Gimbal.vue'
import Battery from '../components/Battery.vue'
import Tv from '../components/Tv.vue'
import Mobile from '../components/Mobile.vue'
import Portable from '../components/PortablePower.vue'
import Vr from '../components/Vr.vue'
import SmartWatch from '../components/SmartWatch.vue'
import ActionCamera from '../components/ActionCamera.vue'
import Graphics from '../components/GraphicsCard.vue'
import Printer from '../components/Printer.vue'
import HeadPhone from '../components/HeadPhone.vue'
import Earbuds from '../components/Earbuds.vue'
import Blutooth from '../components/Bluetooth.vue'
import CcCamera from '../components/CcCamera.vue'
import Gaming from '../components/Gaming.vue'

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
        path:'/drone/:id',
        component:SingleProduce
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
    },
    {
        path:'/actionCamera',
        component:ActionCamera
    },
    {
        path:'/graphics',
        component:Graphics
    },
    {
        path:'/printer',
        component:Printer
    },
    {
        path:'/headPhone',
        component:HeadPhone
    },
    {
        path:'/earbuds',
        component:Earbuds
    },
    {
        path:'/blutooth',
        component:Blutooth
    },
    {
        path:'/ccCamera',
        component:CcCamera
    },
    {
        path:'/gaming',
        component:Gaming
    }
    

    
   
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router