<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
