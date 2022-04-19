<template>
  <section
    class="hero"
    :style="`background-image:url(${cover.Paysage.sizes.large})`"
  ></section>
</template>

<script>
export default {
  name: 'HomeHero',
  props: {
    cover: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.hero {
  background-color: black;
  height: 1080px;
  // background-image: url(cover.Paysage.sourceUrl);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: -170px;
  background-origin: padding-box;
  @include responsive('phone') {
    //  background-image: url(cover.portrait.sourceUrl);
    height: 667px;
  }
}
</style>
