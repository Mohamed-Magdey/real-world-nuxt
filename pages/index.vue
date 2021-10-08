<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events.events"
      :key="index"
      :event="event"
      :data-index="index"
    />
    <template v-if="page !== 1">
      <nuxt-link :to="{ name: 'index', query: { page: page - 1 } }" rel="prev">
        Prev Page
      </nuxt-link>
      |
    </template>
    <template v-if="lastPage > 0">
      <nuxt-link :to="{ name: 'index', query: { page: page + 1 } }" rel="next">
        Next Page
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EventList',
  components: {
    EventCard: () => import('~/components/EventCard.vue'),
  },
  async fetch() {
    try {
      this.$nuxt.$loading.start()
      const currentPage = parseInt(this.$route.query.page) || 1

      await this.$store
        .dispatch('events/fetchEvents', {
          page: currentPage,
        })
        .then(() => {
          this.$nuxt.$loading.finish()
        })
    } catch (err) {
      this.$nuxt.context.error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    lastPage() {
      return this.events.totalEvents - this.events.perPage * this.page
    },
    ...mapState(['events']),
  },
}
</script>
