<template>
  <section class="members">
    <h2 class="members-title">Our Crew</h2>
    <div class="members-content">
      <div
        v-for="(member, index) in teams"
        :key="index"
        class="members-content__item col-md-12 col-lg-3"
      >
        <h3 class="firstname">{{ member.acf.firstname }}</h3>
        <h3 class="lastname">{{ member.acf.lastname }}</h3>
        <!-- eslint-disable vue/no-v-html -->
        <div class="position" v-html="member.acf.position"></div>
        <a class="link" :href="`mailto:${member.acf.email}`">Contacter</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TheAgencyMembers',
  props: {
    teams: {
      type: Array,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.members {
  padding: 9.375rem 5.625rem;
  &-title {
    @include body;
    font-weight: 700;
    text-align: center;
    margin-bottom: 7.5rem;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3.9375rem;
      .firstname,
      .lastname {
        @include h3;
        font-weight: 500;
        margin-bottom: 4px;
        text-align: center;
      }
      .position {
        @include link;
        font-family: $IBMPlexMono;
        margin-bottom: 4px;
        text-align: center;
        text-decoration: none;
        font-weight: 600;
      }
      .link {
        @include footer-caption;
        color: $primary;
        font-weight: 600;
        margin-top: 10px;
        color: $tertiary;
        text-transform: uppercase;
      }
    }
  }
  @include responsive('widescreen') {
    padding: calc(9.375rem * 0.75) calc(5.625rem * 0.75);
  }
  @include responsive('dekstop') {
    padding: calc(9.375rem * 0.64) calc(5.625rem * 0.64);
  }
  @include responsive('tablet') {
    padding: calc(9.375rem * 0.51) calc(5.625rem * 0.51);
  }
}
</style>
