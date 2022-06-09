<template>
  <section class="catchphrase">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="catchphrase-title" v-html="catchphrase.paysage"></div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="catchphrase-title mobile" v-html="catchphrase.portrait"></div>
    <div class="catchphrase-connect">
      <p class="catchphrase-connect__title">connect</p>
      <div class="catchphrase-connect__link">
        <a
          v-for="(connectLink, index) in connectLinks"
          :key="index"
          :href="`mailto:${connectLink.connect_link}`"
          >{{ connectLink.connect_label }}</a
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TheAgencyHero',
  props: {
    catchphrase: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      connectLinks: [],
    }
  },
  async fetch() {
    const data = await this.$wp.cpt('website-info').slug('footer')
    this.connectLinks = await data[0].acf.connect
  },
  mounted() {
    this.$fetch()
  },
}
</script>

<style lang="scss">
.catchphrase {
  padding: 20.625rem 5.625rem 25.625rem;
  &-title > h2 {
    @include h2;
    margin-bottom: 1.25rem;
    @include responsive('phone') {
      display: none;
    }
  }
  .mobile {
    @media (min-width: 768px) {
      h2 {
        display: none;
      }
    }
    @include responsive('phone') {
      h2 {
        display: block;
      }
    }
  }
  &-connect {
    &__title {
      @include caption;
      margin-bottom: 0.25rem;
      color: $tertiary;
      font-weight: 400;
      text-transform: uppercase;
    }
    &__link {
      display: flex;
      a {
        @include link;
        color: $primary;
        font-weight: 400;
        margin-right: 1.25rem;
        margin-top: 0.625rem;
        text-decoration: underline;
        &:hover {
          font-weight: 600;
        }
      }
    }
  }
  @include responsive('widescreen') {
    padding: calc(20.625rem * 0.75) calc(5.625rem * 0.75) calc(25.625rem * 0.75);
  }
  @include responsive('desktop') {
    padding: calc(20.625rem * 0.64) calc(5.625rem * 0.64) calc(25.625rem * 0.64);
  }

  @include responsive('phone') {
    padding: 9.8125rem 1.1875rem 14.4375rem 2.5rem;
  }
}
</style>
