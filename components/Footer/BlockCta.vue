<template>
  <div class="blockcta">
    <div class="blockcta-items">
      <a :href="link || '#'" class="blockcta-items__link">{{
        title || 'Back to Top'
      }}</a>
    </div>

    <div class="col-6 line"></div>
    <div class="col-6"></div>
  </div>
</template>
<script>
export default {
  name: 'FooterBlockCta',
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.blockcta {
  &-items {
    display: flex;
    justify-content: center;
    &__link {
      @include link;
      text-decoration: underline;
      margin-bottom: 1.875rem;
    }
  }
  .line {
    height: 7.5rem;
    border-right: 1px solid $grey;
  }
}
</style>
