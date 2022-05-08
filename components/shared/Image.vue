<template>
  <div class="image">
    <b-img-lazy v-bind="mainProps" :src="source" alt="block Image"></b-img-lazy>
  </div>
</template>

<script>
export default {
  name: 'SharedImage',
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        class: 'img-fluid',
      },
    }
  },
}
</script>
