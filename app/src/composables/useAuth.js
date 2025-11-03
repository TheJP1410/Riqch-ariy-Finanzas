import { computed, ref } from "vue"

const authRef = ref(JSON.parse(localStorage.getItem("rq_auth")||"null"))
const usersRef = ref(JSON.parse(localStorage.getItem("rq_users")||"[]"))

function saveUsers(){
  localStorage.setItem("rq_users", JSON.stringify(usersRef.value))
}
function setAuth(payload){
  authRef.value = payload
  if(payload) localStorage.setItem("rq_auth", JSON.stringify(payload))
  else localStorage.removeItem("rq_auth")
}

const me = computed(()=>{
  if(!authRef.value) return null
  return usersRef.value.find(u=>u.email===authRef.value.email) || null
})

function updateMe(patch){
  if(!me.value) return
  Object.assign(me.value, patch)
  saveUsers()
}

export function useAuth(){
  return { auth:authRef, users:usersRef, me, setAuth, updateMe }
}
