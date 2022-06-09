<template>
  <b-row
    :class="
      block.orientation === 'right'
        ? 'justify-content-end'
        : 'justify-content-start'
    "
  >
    <b-col md="6" class="description">
      <h3 class="title">{{ block.title }}</h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="block.description"></div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'BlocksDescription',
  props: {
    block: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
.description {
  padding: 0 5.625rem;
  margin-bottom: 9.375rem;
  @include responsive('desktop') {
    padding: 0 calc(5.625rem * 0.75);
    margin-bottom: calc(9.375rem * 0.75);
  }
  @include responsive('widescreen') {
    padding: 0 calc(5.625rem * 0.64);
    margin-bottom: calc(9.375rem * 0.64);
  }
  @include responsive('tablet') {
    padding: 0 calc(5.625rem * 0.51);
    margin-bottom: calc(9.375rem * 0.51);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    @include h3;
  }
  p {
    @include caption;
    font-weight: normal;
  }
}
</style>
