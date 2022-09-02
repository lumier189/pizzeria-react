// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setUser(user) {
    return sessionStorage.setItem('user', JSON.stringify(user))
    },

    getUser() {
      return JSON.parse(sessionStorage.getItem('user')) 
  },

}