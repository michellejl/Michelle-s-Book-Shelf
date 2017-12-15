import { fbAuth } from './firebase'

export function logout() {
  return fbAuth().signOut()
}

export function login(email, password) {
  return fbAuth().signInWithEmailAndPassword(email, password)
}