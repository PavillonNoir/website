<template>
  <div>
    <section v-if="error.statusCode === 404">
      <ErrorSection :error="error" />
    </section>
    <section v-else><ErrorSection :error="error" /></section>
  </div>
</template>

<script>
import ErrorSection from '~/components/Error/index.vue'
export default {
  name: 'ErrorPage',
  components: {
    ErrorSection,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: 'Error 404 Not Found',
    }
  },
}
</script>
