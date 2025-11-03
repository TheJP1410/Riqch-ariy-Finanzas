const LS_USERS = 'rq_users', LS_AUTH = 'rq_auth'

export async function register(payload){
  const users = JSON.parse(localStorage.getItem(LS_USERS)||'[]')
  if(users.some(u=>u.email===payload.email)) throw new Error('email-exists')
  users.push({ id:crypto.randomUUID(), ...payload, etapa:'Brote', coins:0, progress:10, level:3, streak:1, achievements:0 })
  localStorage.setItem(LS_USERS, JSON.stringify(users))
  localStorage.setItem(LS_AUTH, JSON.stringify({ email:payload.email }))
  return true
}

export async function login(email, password){
  const users = JSON.parse(localStorage.getItem(LS_USERS)||'[]')
  const u = users.find(x=>x.email===email && x.password===password)
  if(!u) throw new Error('invalid-credentials')
  localStorage.setItem(LS_AUTH, JSON.stringify({ email }))
  return true
}