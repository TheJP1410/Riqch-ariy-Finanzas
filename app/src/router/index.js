import {createRouter,createWebHistory} from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = createRouter({
  history:createWebHistory(),
  routes:[
    { path:"/", component:()=>import("@/pages/Inicio.vue") },
    { path:"/registro", component:()=>import("@/pages/Registro.vue") },
    { path:"/login", component:()=>import("@/pages/Seccion.vue") },
    { path:"/estudiante", component:()=>import("@/pages/Estudiante.vue"), meta:{ requiresAuth:true } },
  ],
});

router.beforeEach((to)=>{
  if(to.meta.requiresAuth){
    const { auth } = useAuth()
    if(!auth.value) return { path:"/login", query:{ redirect: to.fullPath } }
  }
})

export default router
