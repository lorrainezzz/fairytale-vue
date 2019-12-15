import Api from '@/services/api'

export default {
  fetchFairytales () {
    return Api().get('/fairytale')
  },
  postFairytale (fairytale) {
    return Api().post('/fairytale', fairytale,
      { headers: {'Content-type': 'application/json'} })
  },

  deleteFairytale (id) {
    return Api().delete(`/fairytale/${id}`)
  },
  fetchFairytale (id) {
    return Api().get(`/fairytale/${id}`)
  },
  likeFairytale (id) {
    return Api().put(`/fairytale/${id}/like`)
  }
}
