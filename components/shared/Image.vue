<template>
  <div class="image-content">
    <b-img-lazy v-bind="mainProps" :src="source"></b-img-lazy>
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
