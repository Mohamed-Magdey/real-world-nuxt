<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        v-model="event.category"
        label="Select a category"
        :options="categories"
        :selected="option === value"
      />
      <h3>Name & describe your event</h3>
      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
        placeholder="Title"
        class="field"
      />
      <BaseInput
        v-model="event.description"
        type="text"
        label="Description"
        placeholder="Description"
        class="field"
      />
      <h3>Where is your event?</h3>
      <BaseInput
        v-model="event.location"
        type="text"
        label="Location"
        placeholder="Location"
        class="field"
      />
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <date-picker v-model="event.date" placeholder="Select a date" />
      </div>
      <BaseSelect
        v-model="event.time"
        label="Select a time"
        :options="times"
        :selected="option === value"
        class="field"
      />
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createFreshEventObject(),
      times,
      categories: this.$store.state.categories,
    }
  },
  head() {
    return {
      title: 'Create an Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new event in your neighborhood.',
        },
      ],
    }
  },
  methods: {
    createEvent() {
      this.$store.dispatch('events/createEvent', this.event).then(() => {
        this.$router.push({
          name: 'index',
        })
        this.event = this.createFreshEventObject()
      })
    },
    createFreshEventObject() {
      const id = Math.floor(Math.random() * 10000000)
      return {
        id,
        category: '',
        organizer: {
          id: 'abc123',
          name: 'Adam',
        },
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      }
    },
  },
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
