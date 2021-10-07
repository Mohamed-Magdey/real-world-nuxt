import EventService from '@/services/EventService'

export const state = () => ({
  events: [],
  event: {},
  totalEvents: 0,
  perPage: 2,
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  SET_TOTAl(state, total) {
    state.totalEvents = total;
  }
}

export const actions = {
  fetchEvents({ commit, state }, { page }) {
    return EventService.getEvents(state.perPage, page).then(res => {
      commit('SET_TOTAl', res.headers["x-total-count"])
      commit('SET_EVENTS', res.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(res => {
      commit('SET_EVENT', res.data)
    })
  }
}