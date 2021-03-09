import { createStore } from 'vuex'

export default createStore({
  state: {
    recent: []
  },
  mutations: {
    UPDATE_RECENT: (state): void => {
      const data = (localStorage.getItem('recent') as string)
      if(data) state.recent = JSON.parse(data)
    },

    REMOVE_RECENT: (state, index: number): void => {
      state.recent.splice(index, 1)
      localStorage.setItem('recent', JSON.stringify(state.recent))
    },

    ADD_RECENT: (state, data): void => {
      const recent: Array<unknown> = state.recent
      recent.push(data)
      localStorage.setItem('recent', JSON.stringify(recent))
    }
  },
  actions: {

  },
  modules: {
  }
})
