import {resolve} from 'path'

export default defineNuxtConfig({
  css:['reset-css'],
  devtools: { enabled: false },
  routeRules:{
    "/user/**":{
      ssr:false
    }
  },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],

  unocss: {
    nuxtLayers: true,
  },
  hooks:{
    "pages:extend":(pages)=>{
      pages.push({
        path:'/user',
        file:resolve(__dirname,"components/Micro.vue"),
        children:[
          {
            path:'/:slug(.*)*',
            file:resolve(__dirname,"components/Micro.vue")
          }
        ]
      })
    }
  },

  compatibilityDate: '2024-10-21',
})