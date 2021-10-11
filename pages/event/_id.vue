<template>
  <div v-if="eventLength !== 0">
    <div class="event-header">
      <span class="eyebrow"> @{{ event.time }} on {{ parsedDate }} </span>
      <h1 class="title">
        {{ event.title }}
      </h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <span name="map">
      <h2>Location</h2>
    </span>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ event.attendees ? event.attendees.length : 0 }}
      </span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  async fetch() {
    await this.$store
      .dispatch('events/fetchEvent', this.$nuxt.context.params.id)
      .then()
      .catch((e) => {
        this.$nuxt.context.error({
          statusCode: 404,
          message: `Event #${this.$route.params.id} not found.`,
        })
        this.$nuxt.context.next({ name: 'NuxtError' })
      })
  },
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about ${this.event.title}`,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      event: (state) => state.events.event,
    }),
    eventLength() {
      return Object.keys(this.event).length
    },
    parsedDate() {
      const eventDate = new Date(this.event.date)
      return eventDate.toDateString()
    },
  },
}
</script>

<style scoped>
.prompt-box {
  position: relative;
  overflow: hidden;
  padding: 1em;
  margin-bottom: 24px;
  transform: scaleY(1);
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > .actions {
  display: flex;
  align-items: center;
}
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
