<template>
  <section
    class="hero"
    :style="`background-image:url(${cover.image.paysage.url})`"
  >
    <video
      v-show="cover.type === 'video'"
      ref="showreelvideo"
      :poster="cover.image.paysage.url"
      preload="true"
      autoplay
      loop
      playsinline
      muted
      class="cover-video"
    >
      <source :src="cover.video.url" type="video/mp4" />
      <track kind="captions" label="English" default />
    </video>
  </section>
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
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-origin: padding-box;
  .cover-video {
    height: 100vh;
    max-width: 100%;
  }
  @include responsive('tablet') {
    height: 667px;
  }
}
</style>
