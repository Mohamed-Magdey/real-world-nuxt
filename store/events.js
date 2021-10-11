import EventService from '@/services/EventService'

export const state = () => ({
  events: [],
  event: {},
  totalEvents: 0,
  perPage: 3,
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
  },
  ADD_EVENT(state, event) {
    state.events.push(event)
  }
}

export const actions = {
  fetchEvents({ commit, state }, { page }) {
    return EventService.getEvents(state.perPage, page).then(res => {
      commit('SET_TOTAl', res.headers["x-total-count"])
      commit('SET_EVENTS', res.data)
    })
  },
  fetchEvent({ commit, getters }, id) {
    const event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return EventService.getEvent(id).then(res => {
        commit('SET_EVENT', res.data)
        return res.data
      })
    }
  },
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  }
}

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.filter(event => event.id === id)[0];
  },
};