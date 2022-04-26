<template>
  <div class="showreel">
    <video
      ref="showreelvideo"
      v-b-visible="playVideo"
      :poster="showreel.video_cover.paysage.sizes.large"
      preload="true"
      playsinline
      muted
      class="video-player"
    >
      <source :src="showreel.video_url.url" type="video/mp4" />
      <track kind="captions" label="English" default />
    </video>
    <svg
      id="button-play"
      :class="!showIcon ? 'btn-play inactive' : 'btn-play'"
      data-name="button-play"
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 96 96"
      @click="playVideo"
    >
      <circle id="Ellipse_19" data-name="Ellipse 19" cx="48" cy="48" r="48" />
      <path
        id="Polygone_2"
        data-name="Polygone 2"
        d="M17.957,0,35.915,31.425H0Z"
        transform="translate(67.407 31.126) rotate(90)"
        fill="#fff"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'HomeShowreel',
  props: {
    showreel: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showIcon: true,
    }
  },

  methods: {
    playVideo(isVisible) {
      const player = this.$refs.showreelvideo
      player.hasAttribute('controls')
        ? player.removeAttribute('controls')
        : player.setAttribute('controls', 'controls')
      // toggle play and pause
      if (isVisible && player.paused) {
        player.play()
        this.showIcon = false
      } else {
        player.pause()
        this.showIcon = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.showreel {
  position: relative;
  .btn-play {
    position: absolute;
    inset: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.inactive {
      display: none;
    }
    @include responsive('phone') {
      width: 56px !important;
    }
  }
  .video-player {
    height: 67.875rem;
    @include responsive('widescreen') {
      height: calc(67.875rem * 0.75);
    }
    @include responsive('desktop') {
      height: calc(67.875rem * 0.64);
    }
    @include responsive('tablet') {
      height: calc(67.875rem * 0.51);
    }
    @include responsive('phone') {
      height: 41.6875rem;
    }
  }
  .controls {
    display: flex;
  }
}
</style>
