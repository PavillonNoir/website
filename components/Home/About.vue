<template>
  <section class="about">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="about-title" v-html="catchphrase.paysage"></div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="about-title-mobile" v-html="catchphrase.portrait"></div>
    <nuxt-link to="/agency" class="about-link">Learn More</nuxt-link>
  </section>
</template>
<script>
export default {
  name: 'HomeAbout',
  props: {
    catchphrase: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
.about {
  padding: 23.1875rem 5.625rem;
  @include responsive('widescreen') {
    padding: calc(23.1875rem * 0.75) calc(5.625rem * 0.75);
  }
  @include responsive('desktop') {
    padding: calc(23.1875rem * 0.64) calc(5.625rem * 0.64);
  }
  @include responsive('tablet') {
    padding: calc(23.1875rem * 0.51) calc(5.625rem * 0.51);
  }
  @include responsive('phone') {
    padding: 10rem 1.375rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    @include h2;
    text-align: center !important;
    font-weight: 500;
    margin-bottom: 0.4375rem;
  }
  .about-link {
    @include link;
    color: $primary;
    text-decoration: underline;
  }
  .about-title {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .about-title-mobile {
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
