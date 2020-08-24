import axios from 'axios'
export default {
  namespaced: true,
  state: {
    drawer: false,
    menuInfo: []
  },
  mutations: {
    switchSideBar (state, drawer) {
      state.drawer = !drawer
    },
    initMenu (state, menuInfo) {
      state.menuInfo = menuInfo
    }
  },
  actions: {
    async getMenuInfo (context) {
      try {
        const res = await axios.get('/api/menuInfo')
        if (res.status === 200) {
          context.commit('initMenu', res.data)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
