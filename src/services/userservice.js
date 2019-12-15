import Api from '@/services/api'

export default {
  userRegister (user) {
    return Api().post('/user/register', user,
      { headers: {'Content-type': 'application/json'} })
  },
  signIn (user) {
    return Api().post('/user/login', user,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchUser (name) {
    return Api().get(`/user/${name}`)
  },
  editPassword (id, user) {
    console.log('REQUESTING ' + user._id + ' ' +
      JSON.stringify(user, null, 5))
    return Api().put(`/user/${id}`, user,
      { headers: {'Content-type': 'application/json'} })
  }
}
