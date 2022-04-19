<template>
  <section class="team">
    <b-img-lazy
      :src="file && file.desktop.url"
      blank="true"
      blank-color="#bbb"
      class="team-photo"
      alt="Team Photo"
    ></b-img-lazy>
  </section>
</template>
<script>
export default {
  name: 'TheAgencyTeam',
  props: {
    file: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.team {
  .team-photo {
    width: 100%;
  }
}
</style>
